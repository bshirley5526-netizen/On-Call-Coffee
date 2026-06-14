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
  title: 'On Call Coffee — [TAGLINE]',
  description: '[META_DESCRIPTION]',
  keywords: [
    'On Call Coffee',
    // TODO: add relevant keywords
  ],
  openGraph: {
    title: 'On Call Coffee — [TAGLINE]',
    description: '[META_DESCRIPTION]',
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
              name: 'On Call Coffee',
              description: '[BUSINESS_DESCRIPTION]',
              email: '[CONTACT_EMAIL]',
              url: 'https://[YOUR_DOMAIN]',
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
