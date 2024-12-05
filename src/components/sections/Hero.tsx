'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Me from '@/assets/me.jpg'
import { Globe } from 'lucide-react'
import { motion } from 'motion/react'
import { MotionDotPattern } from '@/components/ui/dot-pattern'
import ZoopText from '../ZoopText'

export default function Hero() {
  // TODO: Mobile responsiveness + Check for reduced motion

  return (
    <section className='relative min-h-screen'>
      <div className='absolute inset-0 -z-50 min-h-screen overflow-hidden'>
        <MotionDotPattern
          initial={{
            y: -20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 3,
              ease: 'easeOut'
            }
          }}
          width={40}
          height={40}
          cx={1}
          cy={1}
          cr={1}
          y='y'
          className={clsx(
            '-z-10 [mask-image:radial-gradient(circle,white,10%,transparent)]'
          )}
        />
      </div>
      <div className='container mx-auto flex h-screen items-center justify-between px-8'>
        <div className='flex flex-col items-start'>
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
          <h1 className='-ml-1 text-[128px] font-bold leading-none tracking-tight'>
            <ZoopText delay={1}>Rémi</ZoopText>
            <br />
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
            A front end / web app
            <br />
            developer
          </motion.h2>
          <motion.button
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
              <span className='ml-3 inline-block group-hover:animate-[spin_1s_ease-out_forwards]'>
                🥖
              </span>
            </p>
          </motion.button>
        </div>
        <div className='relative'>
          <div className='flex h-[578px] w-[307px] flex-col items-center justify-center overflow-hidden rounded-full'>
            <motion.div
              className='h-full w-full'
              initial={{ opacity: 0, scale: 1.2, rotate: 15 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { delay: 3, duration: 1, ease: 'circOut' }
              }}
            >
              <motion.div
                className='h-full w-full'
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Image
                  src={Me}
                  alt="It's me"
                  className='inset-0 h-full scale-110 object-cover'
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              marginLeft: 15,
              marginTop: 15,
              transition: { delay: 4, duration: 0.5, ease: 'easeOut' }
            }}
            className='absolute inset-0 -z-10 flex h-[578px] w-[307px] flex-col items-center justify-center rounded-full border border-primary'
          />
        </div>
      </div>
    </section>
  )
}
