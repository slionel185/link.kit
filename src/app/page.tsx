import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

export default function HomePage() {
    return (
        <main className='flex h-full flex-col items-center justify-center'>
            <div className='space-y-6 text-center'>
                <h1 className='text-6xl font-semibold drop-shadow-md'>
                    LINK.KIT
                </h1>

                <p className='text-lg'>
                    Make money through your platforms
                </p>

                <div>
                    <LoginButton>
                        <Button size={'lg'}>
                            Login
                        </Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    )
}