// Routes that do not require authentication
export const publicRoutes = [
    '/',
    '/auth/new-verification'
]

// Routes that are used for authentication
// Will redirect authenticated users to /dashboard
export const authRoutes = [
    '/auth/login',
    '/auth/error',
    '/auth/reset',
    '/auth/register',
    '/auth/new-password'
]

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'