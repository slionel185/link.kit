import type { ProviderProps } from '@/types/ProviderProps'

import AuthProvider from '@/components/providers/AuthProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'

export default function MainProvider({ children }: ProviderProps) {
    return (
        <AuthProvider>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                {children}
            </ThemeProvider>
        </AuthProvider>
    )
}