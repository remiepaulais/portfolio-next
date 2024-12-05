'use client'

import React from 'react'
import Logo from '../Logo'
import { Button } from '../ui/button'
import { NAV_ITEMS } from '@/constants'
import { motion } from 'motion/react'

export default function Header() {
  return (
    <motion.header
      initial={{
        y: -200
      }}
      animate={{
        transition: { duration: 2, ease: 'circOut' },
        y: 0
      }}
      className='container fixed left-0 right-0 top-0 z-50 mx-auto my-6 px-8'
    >
      <div className='relative flex items-center justify-between'>
        <Logo />
        <nav className='absolute right-1/2 flex translate-x-1/2 items-center gap-4'>
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative rounded-md p-2 transition after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Button>
          Let&apos;s talk!
          <span className='h-2 w-2 rounded-full bg-green-400'>
            <div className='h-2 w-2 animate-ping rounded-full bg-green-400'></div>
          </span>
        </Button>
      </div>
    </motion.header>
  )
}
