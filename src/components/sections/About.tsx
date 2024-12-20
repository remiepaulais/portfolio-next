'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Me from '@/assets/me.jpg'
import { SOCIALS } from '@/constants'
import { Button } from '../ui/button'
import { RoughNotation } from 'react-rough-notation'
import { motion } from 'motion/react'
import { toast } from 'sonner'

export default function About() {
  const [state, setState] = useState({
    show: false
  })

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({ ...prev, show: true }))
    }, 1000)
  }, [])

  const handleEmailCopy = async (email: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email)
        toast.success('Copied to clipboard!')
      } else if (navigator.share) {
        await navigator.share({
          text: email
        })
        toast.success('Email ready to share!')
      } else {
        throw new Error('Clipboard API not supported')
      }
    } catch {
      toast.error('Unable to copy email')
    }
  }

  return (
    <div className='my-24 flex w-full max-w-5xl flex-col md:mt-32 md:grid md:grid-cols-2 md:gap-4'>
      {/* Content Section */}
      <section className='order-1 px-4 md:order-none md:px-0'>
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className='text-3xl font-bold leading-tight text-neutral-100 md:text-4xl'
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
              ease: 'backOut',
              delay: 0.1
            }}
            className='text-sm md:text-base'
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
              ease: 'backOut',
              delay: 0.2
            }}
            className='text-sm md:text-base'
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
              ease: 'backOut',
              delay: 0.3
            }}
            className='text-sm md:text-base'
          >
            I&apos;ve started learning Next.js and TailwindCSS right after I got
            accustomed to React and I&apos;ve been learning quite a lot since
            then!
            <br />
            <RoughNotation type='underline' color='#bfbfff' show={state.show}>
              NuxtJS, Vue 3, and Framer Motion
            </RoughNotation>{' '}
            are some of the technologies I&apos;m currently learning and
            I&apos;m always looking for new challenges to tackle!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(5px)', y: -10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'backOut',
              delay: 0.4
            }}
            className='text-sm md:text-base'
          >
            I&apos;ve recently discovered the concept of signals through Vue,
            Svelte, Angular and Preact, which I{' '}
            <span className='bg-gradient-to-r from-red-300 to-pink-600 bg-clip-text font-bold text-transparent'>
              love
            </span>
            !<br />
            Signals allow me to create reactive UIs in a more straightforward
            way, without relying on some complex React patterns like custom
            hooks or context providers to access state throughout the
            application!
          </motion.p>
        </div>
      </section>

      {/* Image and Social Links Section */}
      <section className='flex flex-col md:fixed md:right-0 md:h-full md:w-1/2 md:flex-col-reverse md:items-center md:justify-end'>
        {/* Image */}
        <div className='order-2 px-4 md:px-0'>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(5px)', y: -30, rotate: 5 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, rotate: 3 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: 'backOut'
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 4
              }}
              transition={{
                type: 'spring',
                stiffness: 500
              }}
              className='mx-auto aspect-square w-48 overflow-hidden rounded-xl md:w-64'
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
          </motion.div>
        </div>

        {/* Social Links */}
        <div className='order-3 px-4 md:order-none md:px-0'>
          <ul className='mx-auto flex w-full flex-col items-center gap-2 py-8 md:w-fit md:pt-16'>
            {SOCIALS.map((social, i) => (
              <li key={i} className='w-full md:w-auto'>
                {social.action ? (
                  <Button
                    variant='link'
                    onClick={() => handleEmailCopy(social.href)}
                    className='w-full md:w-auto'
                  >
                    <p className='flex items-center gap-2 text-sm'>
                      {social.icon}
                      <span>{social.name}</span>
                    </p>
                  </Button>
                ) : (
                  <Button asChild variant='link' className='w-full md:w-auto'>
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
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
