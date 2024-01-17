'use client'

interface LogoutButtonPoops {
    children?: React.ReactNode
}

import { logout } from '@/actions/auth/logout'

export const LogoutButton = ({
    children,
}: LogoutButtonPoops) => {
    const onClick = () => {
        logout()
    }

    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    )
}
