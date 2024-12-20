'use client'

import ZoopText from '@/components/ZoopText'
import { Globe } from 'lucide-react'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <main className='container relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center'>
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
        className='text-[40px] text-lg text-accent md:text-2xl lg:text-3xl'
      >
        Hi, I&apos;m
      </motion.p>
      <h1 className='-ml-1 text-center text-4xl font-bold leading-none tracking-tight md:text-7xl lg:text-9xl'>
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
        className='mt-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-center text-[40px] text-base font-bold text-transparent md:text-2xl lg:text-3xl'
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
