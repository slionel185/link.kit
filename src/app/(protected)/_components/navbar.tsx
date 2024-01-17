'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/auth/user-button'

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className='bg-background/15 h-20 w-full flex items-center p-4 border-b absolute top-0'>
            <div className='flex flex-1 justify-start gap-x-2 items-center'>
                <Button variant={pathname === '/dashboard'? 'default' : 'outline'} asChild>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </Button>

                <Button variant={pathname === '/twitch'? 'default' : 'outline'} asChild>
                    <Link href='/twitch'>
                        Twitch
                    </Link>
                </Button>

                <Button variant={pathname === '/discord'? 'default' : 'outline'} asChild>
                    <Link href='/discord'>
                        Discord
                    </Link>
                </Button>


            </div>

            <h1 className='text-4xl flex flex-1 justify-center items-center uppercase font-bold'>Sciron</h1>

            <div className='flex flex-1 justify-end items-center'>            
                <UserButton />
            </div>
        </nav>
    )
}