'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import { NAV_ITEMS } from '@/constants'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{
          y: -200
        }}
        animate={{
          transition: { duration: 2, ease: 'circOut' },
          y: 0
        }}
        className='container fixed left-0 right-0 top-0 z-50 mx-auto bg-gradient-to-b from-background to-background/0 px-8 py-6'
      >
        <div className='relative flex items-center justify-between'>
          <Logo />
          <div className='hidden items-center gap-4 lg:flex'>
            <nav className='absolute right-1/2 translate-x-1/2 items-center gap-4'>
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative rounded-md p-2 transition after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
                  aria-label={`Go to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Button asChild className='hidden lg:flex'>
              <Link href='/contact'>
                Let&apos;s talk!
                <span className='h-2 w-2 rounded-full bg-green-400'>
                  <div className='h-2 w-2 animate-ping rounded-full bg-green-400'></div>
                </span>
              </Link>
            </Button>
          </div>
          <div className='flex items-center gap-4 lg:hidden'>
            <Button variant='link' onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20, delay: 0.1 }}
            className='fixed inset-y-0 right-0 z-40 w-full bg-background p-6 shadow-lg lg:hidden'
          >
            <div className='mt-20 flex flex-col items-center gap-8'>
              <nav className='flex flex-col items-center gap-4'>
                {NAV_ITEMS.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='text-xl font-medium transition hover:text-primary'
                    aria-label={`Go to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Button asChild className='w-full'>
                <Link href='/contact' onClick={() => setIsOpen(false)}>
                  Let&apos;s talk!
                  <span className='ml-2 h-2 w-2 rounded-full bg-green-400'>
                    <div className='h-2 w-2 animate-ping rounded-full bg-green-400'></div>
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
