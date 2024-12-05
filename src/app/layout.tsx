import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/Header'
import Cursor from '@/components/Cursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Welcome!',
  description: "Rémi's Creative Portfolio",
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
