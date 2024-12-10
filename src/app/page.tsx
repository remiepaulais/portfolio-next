'use client'

import ZoopText from '@/components/ZoopText'
import { Globe } from 'lucide-react'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <main className='container relative mx-auto flex min-h-screen flex-col items-center justify-center'>
      <motion.p
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: 'easeOut'
          }
        }}
        className='text-[40px] text-accent'
      >
        Hi, I&apos;m
      </motion.p>
      <h1 className='-ml-1 text-9xl font-bold leading-none tracking-tight'>
        <ZoopText delay={1}>Rémi</ZoopText>{' '}
        <ZoopText delay={1.2}>Epaulais</ZoopText>
      </h1>
      <motion.h2
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.75,
            duration: 1,
            ease: 'easeOut'
          }
        }}
        className='mt-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-[40px] font-bold text-transparent'
      >
        A junior front end / web app developer
      </motion.h2>
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 2.5,
            duration: 1,
            ease: 'easeOut'
          }
        }}
        className='group mt-4 flex items-center gap-4 rounded-full p-2 text-center opacity-50'
      >
        <Globe />
        <p>
          From France
          <motion.span
            className='ml-3 inline-block'
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ ease: 'easeOut', type: 'spring', stiffness: 100 }}
          >
            🥐
          </motion.span>
        </p>
      </motion.div>
    </main>
  )
}
