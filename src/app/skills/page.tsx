import React from 'react'
import { Metadata } from 'next'
import Skills from '@/components/sections/Skills'

export const metadata: Metadata = {
  title: 'Rémi Epaulais | Skills',
  description: 'My skills and technologies'
}

export default function SkillsPage() {
  // TODO: Mobile responsiveness and accessibility
  return (
    <>
      <main className='container relative mx-auto my-24 min-h-[100dvh] items-center justify-between px-8'>
        <Skills />
      </main>
      <div
        className='pointer-events-none fixed bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-background to-background/0'
        aria-hidden='true'
      ></div>
    </>
  )
}
