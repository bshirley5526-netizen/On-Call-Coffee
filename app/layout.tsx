import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'On Call Coffee Co. — Small-batch coffee, shipped fresh.',
  description: 'Premium small-batch, single-origin coffee roasted to order and delivered to your door.',
  keywords: ['On Call Coffee', 'specialty coffee', 'single origin coffee', 'coffee subscription', 'fresh roasted coffee'],
  openGraph: {
    title: 'On Call Coffee Co. — Small-batch coffee, shipped fresh.',
    description: 'Premium small-batch, single-origin coffee roasted to order and delivered to your door.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  )
}
