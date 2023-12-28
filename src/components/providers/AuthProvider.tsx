'use client'

import type { ProviderProps } from '@/types/ProviderProps'

import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: ProviderProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}