'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaLinkedin } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/utils/routes'

export const Social = () => {
    const onClick = (provider: 'google' | 'linkedin') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className='flex items-center w-full gap-x-2'>
            <Button className='w-full' size='lg' variant='outline' onClick={() => onClick('google')}>
                <FcGoogle className='h-5 w-5' />
            </Button>
        
            <Button className='w-full' size='lg' variant='outline' onClick={() => onClick('linkedin')}>
                <FaLinkedin color='#0077b5' className='h-5 w-5' />
            </Button>
        </div>
    )
}