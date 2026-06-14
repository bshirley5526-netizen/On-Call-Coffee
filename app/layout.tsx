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
  title: 'On Call Coffee — Premium coffee. On your terms.',
  description: 'On Call Coffee delivers specialty-grade, hand-crafted coffee experiences — for your office, your event, or your morning ritual.',
  keywords: [
    'On Call Coffee',
    'luxury coffee delivery',
    'specialty coffee subscription',
    'corporate coffee program',
    'private event coffee catering',
    'premium coffee Indianapolis',
    'artisan coffee delivery',
  ],
  openGraph: {
    title: 'On Call Coffee — Premium coffee. On your terms.',
    description: 'On Call Coffee delivers specialty-grade, hand-crafted coffee experiences — for your office, your event, or your morning ritual.',
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
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FoodEstablishment',
              name: 'On Call Coffee',
              description: 'Specialty-grade coffee experiences delivered to your office, event, or door.',
              email: 'hello@oncallcoffee.com',
              url: 'https://oncallcoffee.com',
              servesCuisine: 'Coffee',
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
