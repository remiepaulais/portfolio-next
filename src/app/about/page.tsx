import About from '@/components/sections/About'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Rémi Epaulais | About',
  description: 'Your first place to learn everything about me!'
}

export default function AboutPage() {
  return (
    <main className='container mx-auto flex min-h-screen justify-center py-32'>
      <About />
    </main>
  )
}
