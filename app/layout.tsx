import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Czech Game Blog | Objevte Svět Deskových Her',
  description: 'Váš průvodce světem deskových her v České republice. Objevte historii, pravidla a strategie tradičních i moderních her.',
  keywords: ['deskové hry', 'české hry', 'stolní hry', 'board games', 'Czechia', 'herní blog'],
  authors: [{ name: 'Czech Game Blog' }],
  creator: 'Czech Game Blog',
  publisher: 'K.C. NTOMATA LIMITED',
  metadataBase: new URL('https://czechgameblog.com'),
  openGraph: {
    title: 'Czech Game Blog | Objevte Svět Deskových Her',
    description: 'Váš průvodce světem deskových her v České republice',
    url: 'https://czechgameblog.com',
    siteName: 'Czech Game Blog',
    locale: 'cs_CZ',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
