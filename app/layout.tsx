import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
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
  title: 'Synthesys — Websites That Make Small Businesses Impossible to Ignore',
  description:
    'Synthesys designs premium websites that make small businesses look unforgettable and turn visitors into customers.',
  keywords: [
    'small business website design',
    'professional website design',
    'custom web design',
    'small business web designer',
    'Synthesys',
  ],
  openGraph: {
    title: 'Synthesys — Websites that make small businesses impossible to ignore.',
    description:
      'Premium, conversion-focused websites for small and local businesses. Built to make you look like the obvious choice.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Synthesys',
              description:
                'Premium web design for small businesses.',
              email: 'synthesyscontact@gmail.com',
              url: 'https://synthesyscreate.com',
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
