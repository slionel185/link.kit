'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function LogoutButton({ children }: { children: React.ReactNode }) {
    return (
        <Button onClick={() => signOut()}>{children}</Button>
    )
}