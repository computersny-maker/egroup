import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.egrouptec.com'),
  title: 'E-Group Tech Services | Clases GED en Español',
  description:
    'Prepárate para el GED en español con E-Group Tech Services. Clases virtuales, grupos pequeños y apoyo personalizado para adultos en Nueva York.',
  keywords: [
    'GED en español',
    'clases GED en español',
    'GED Queens',
    'GED Bronx',
    'GED Brooklyn',
    'GED New York',
    'preparación GED en español',
    'clases GED online',
    'GED para adultos',
  ],
  openGraph: {
    title: 'E-Group Tech Services | Clases GED en Español',
    description:
      'Prepárate para el GED en español con E-Group Tech Services. Clases virtuales, grupos pequeños y apoyo personalizado para adultos.',
    locale: 'es_US',
    type: 'website',
    siteName: 'E-Group Tech Services, Inc.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#123b66',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${inter.variable} ${jakarta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
