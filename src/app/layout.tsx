import '@/app/globals.css'

import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/LayoutProps'

import { Inter } from 'next/font/google'

import MainProvider from '@/components/providers/MainProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Titan Template',
    description: 'Starter template for your Saas'
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <MainProvider>
                    {children}
                </MainProvider>
            </body>
        </html>
    )
}