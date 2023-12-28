import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {},
    server: {
        DATABASE_URL: z.string().min(1, { message: 'Database URL is required.' }),

        NEXTAUTH_URL: z.string().min(1, { message: 'NextAuth URL is required.' }).url({ message: 'NextAuth URL should be a valid URL.' }),
        NEXTAUTH_SECRET: z.string().min(1, { message: 'NextAuth Secret is required.' })
    },
    experimental__runtimeEnv: process.env
})