import RegisterForm from '@/components/auth/RegisterForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterPage() {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <Card className='w-[350px]'>
                <CardHeader className='pb-2'>
                    <CardTitle>Titan</CardTitle>
                    <CardDescription>
                        Saas Template
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    )
}