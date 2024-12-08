import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Rémi Epaulais | Contact',
  description: 'Wanna talk? Contact me!'
}

export default function ContactPage() {
  return (
    <main className='container mx-auto flex min-h-screen items-center justify-center'>
      Contact Page
    </main>
  )
}
