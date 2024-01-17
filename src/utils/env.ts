import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {
        NEXT_PUBLIC_URL: z.string().url()
    },
    server: {
        DATABASE_URL: z.string().url(),

        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string(),

        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),

        LINKEDIN_CLIENT_ID: z.string(),
        LINKEDIN_CLIENT_SECRET: z.string(),

        RESEND_API_KEY: z.string()
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
    }
})