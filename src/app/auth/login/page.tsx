import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import LoginForm from '@/components/auth/LoginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function LoginPage() {
    const session = await getServerSession(authOptions)

    if(session) return redirect('/')

    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <Card className='w-[350px]'>
                <CardHeader className='pb-2'>
                    <CardTitle>Titan</CardTitle>
                    <CardDescription>
                        SaaS Template
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    )
}