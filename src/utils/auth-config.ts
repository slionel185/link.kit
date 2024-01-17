import type { NextAuthConfig } from 'next-auth'

import bcrypt from 'bcryptjs'
import Google from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'
import Credentials from 'next-auth/providers/credentials'

import { env } from '@/utils/env'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export default {
    providers: [
        Google({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }),
        LinkedIn({
            clientId: env.LINKEDIN_CLIENT_ID,
            clientSecret: env.LINKEDIN_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if(validatedFields.success) {
                    const { email, password } = validatedFields.data

                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if(passwordsMatch) return user
                }

                return null
            }
        })
    ]
} satisfies NextAuthConfig