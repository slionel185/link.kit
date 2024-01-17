'use client'

interface LoginButtonPoops {
    children: React.ReactNode
    mode?: 'modal' | 'redirect'
    asChild?: boolean
}

import { useRouter } from 'next/navigation'

export const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonPoops) => {
    const router = useRouter()

    const onClick = () => {
        router.push('/auth/login')
    }

    if(mode === 'modal') return (
        <span>
            TODO: Implement modal
        </span>
    )
    
    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    )
}
