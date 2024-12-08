import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rémi Epaulais | Projects',
  description: 'Wanna see what I made? Check out my projects!'
}

export default function ProjectsPage() {
  return (
    <main className='container mx-auto flex min-h-screen items-center justify-center'>
      Projects Page
    </main>
  )
}
