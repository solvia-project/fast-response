import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Solvia Response - Universal JSON Response Standardization',
    description: 'One response format. Every framework. Built-in analytics. Standardize your API responses across JavaScript, PHP, Python, and Go.',
    keywords: ['API', 'JSON', 'Response', 'Standardization', 'TypeScript', 'PHP', 'Laravel', 'Express', 'Fastify', 'NestJS'],
    authors: [{ name: 'Solvia Team' }],
    openGraph: {
        title: 'Solvia Response - Universal JSON Response Standardization',
        description: 'One response format. Every framework. Built-in analytics.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
