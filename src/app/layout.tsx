import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import clsx from 'clsx'
import DotPattern from '@/components/ui/dot-pattern'
import { Toaster } from '@/components/ui/sonner'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Rémi Epaulais | Home',
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
        <Toaster richColors position='bottom-center' closeButton />
        <div
          className='fixed inset-0 -z-50 min-h-screen overflow-hidden'
          aria-hidden='true'
        >
          <DotPattern
            width={40}
            height={40}
            cx={1}
            cy={1}
            cr={1}
            className={clsx(
              '-z-10 [mask-image:radial-gradient(circle,white,10%,transparent)]'
            )}
          />
        </div>
        {children}
      </body>
    </html>
  )
}
