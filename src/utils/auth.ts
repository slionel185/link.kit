import type { AuthOptions } from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        CredentialsProvider({
            id: 'Titan-Credentials',
            name: 'Titan-Credentials',
            credentials: {
                username: { type: 'text' },
                password: { type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials?.username || !credentials?.password) return null

                const user = { id: '1', username: credentials.username }
                
                if(user) return user
                return null
            },
        })
    ]
}