import LogoutButton from '@/components/auth/LogoutButton'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function HomePage() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <Card className='w-[350px]'>
                <CardHeader>
                    <CardTitle>Titan</CardTitle>
                    <CardDescription>Starter Saas Template</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <p>Welcome to Titan. Use this template to build your application.</p>
                </CardContent>
                <CardFooter>
                    <div className='flex w-full justify-end'>
                        <LogoutButton>Logout</LogoutButton>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}