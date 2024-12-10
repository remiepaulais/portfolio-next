'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Me from '@/assets/me.jpg'
import { SOCIALS } from '@/constants'
import { Button } from '../ui/button'
import { RoughNotation } from 'react-rough-notation'
import { motion } from 'motion/react'

export default function About() {
  const [state, setState] = useState({
    show: false
  })

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({ ...prev, show: true }))
    }, 2000)
  })

  return (
    <main className='grid w-full max-w-5xl grid-cols-2 gap-4'>
      <section>
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='text-4xl font-bold leading-tight text-neutral-100'
        >
          I&apos;m Rémi.
          <br />
          Crafting and building web experiences from France.
        </motion.h1>
        <div className='flex flex-col gap-5 py-7 text-neutral-500'>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.1
            }}
          >
            <RoughNotation type='crossed-off' color='#bfbfff' show={state.show}>
              A passionate
            </RoughNotation>{' '}
            I&apos;m a young web developer with an eye for smooth and slick
            animations, UI and UX and I would consider myself a versatile
            developer. I love to learn, listen and talk with others.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.2
            }}
          >
            My primary expertise is in the frontend, I know my way using
            <br />
            <RoughNotation type='box' color='#bfbfff' show={state.show}>
              React & React Router
            </RoughNotation>{' '}
            as both of those were my first introduction to the world of web
            development!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.3
            }}
          >
            I&apos;ve started learning Next.js and TailwindCSS right after I got
            accustomed to React and I&apos;ve been learning quite a lot since
            then!
            <br />
            <RoughNotation type='underline' color='#bfbfff' show={state.show}>
              NuxtJS, Vue 3, SQLite, and Framer Motion
            </RoughNotation>{' '}
            are some of the technologies I&apos;m currently learning and
            I&apos;m always looking for new challenges to tackle!
          </motion.p>
        </div>
      </section>
      <section>
        <motion.div
          initial={{ rotate: 3, scale: 1 }}
          whileHover={{
            scale: 1.05,
            rotate: 4
          }}
          transition={{
            type: 'spring',
            stiffness: 500
          }}
          className='mx-auto aspect-square w-64 overflow-hidden rounded-xl'
        >
          <Image
            src={Me}
            alt='Me'
            width={400}
            height={400}
            className='size-full object-cover'
            priority
          />
        </motion.div>
        <div>
          <ul className='mx-auto flex w-fit flex-col items-center gap-2 pt-16'>
            {SOCIALS.map((social, i) => (
              <li key={i} className='w-full'>
                <Button asChild variant='link'>
                  <a
                    href={social.href}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 text-sm'
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
