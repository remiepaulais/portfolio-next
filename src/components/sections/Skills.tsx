'use client'

import React from 'react'
import { Badge } from '../ui/badge'
import { SKILLS } from '@/constants'
import Skill from '../Skill'
import { motion } from 'motion/react'

// Reorder if the skill has the new property
SKILLS.sort((a, b) => {
  if (a.new && !b.new) {
    return -1
  }
  if (!a.new && b.new) {
    return 1
  }
  return 0
})

export default function Skills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 2
        }}
        className='flex items-center justify-center gap-4 py-2 text-center'
      >
        <h1 className='sr-only'>Skills</h1>
        <Badge className='rounded-full border-primary/50 bg-primary/20 text-primary'>
          New
        </Badge>
        <p className='text-sm text-accent-foreground'>
          Is what I&apos;ve learned recently!
        </p>
      </motion.div>
      <ul className='flex w-full flex-col gap-4 overflow-y-hidden text-center'>
        {SKILLS.map((item, i) => (
          <Skill skill={item} key={i} index={i} />
        ))}
      </ul>
    </>
  )
}
