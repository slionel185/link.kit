import type { DefaultSession } from 'next-auth'
import type { User, UserRole } from '@prisma/client'

import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/utils/db'
import { getUserById } from '@/data/user'
import authConfig from '@/utils/auth-config'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'

declare module 'next-auth' {
    interface Session {
        user: User & DefaultSession['user']
    }
}


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    pages: {
        signIn: '/auth/login',
        error: '/auth/error'
    },
    callbacks: {
        async signIn({ user, account }) {
            // allow OAuth without email verification
            if(account?.provider !== 'credentials') return true

            const existingUser = await getUserById(user.id)
            if(!existingUser?.emailVerified) return false

            if(existingUser.isTwoFactorEnabled) {
                const twoFactorConfimation = await getTwoFactorConfirmationByUserId(existingUser.id)

                if(!twoFactorConfimation) {
                    return false
                }

                await db.twoFactorConfirmation.delete({
                    where: { id: twoFactorConfimation.id }
                })
            }

            return true
        },
        async jwt({ token }) {
            if(!token.sub) return token

            const existingUser = await getUserById(token.sub)
            if(!existingUser) return token

            token.role = existingUser.role
            return token
        },
        async session({ token, session }) {
            if(token.sub && session.user) {
                session.user.id = token.sub
            }

            if(token.role && session.user) {
                session.user.role = token.role as UserRole
            }

            return session
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
})