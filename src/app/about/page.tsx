import About from '@/components/sections/About'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Rémi Epaulais | About',
  description: 'Your first place to learn everything about me!'
}

export default function AboutPage() {
  return (
    <>
      <main className='container mx-auto flex min-h-screen items-center justify-center p-4'>
        <About />
      </main>
      <div
        className='pointer-events-none fixed bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-background to-background/0'
        aria-hidden='true'
      ></div>
    </>
  )
}
