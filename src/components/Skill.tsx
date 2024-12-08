'use client'

import type { Skill } from '@/constants'
import React from 'react'
import { Badge } from './ui/badge'
import { motion } from 'motion/react'
import ZoopText from './ZoopText'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger
} from './ui/animated-modal'

export default function Skill({
  skill,
  index
}: {
  skill: Skill
  index: number
}) {
  const delay = index * 0.15
  return (
    <li className='group relative flex flex-col gap-4 py-2'>
      <Modal>
        <ModalTrigger>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay
            }}
          >
            <div className='relative flex justify-between overflow-clip py-8'>
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: '-50%' }}
                transition={{
                  duration: 0.5,
                  delay
                }}
                className='absolute top-1/2 -z-10 flex -translate-y-1/2 items-center justify-center gap-10 text-neutral-800'
              >
                <div className='w-24 px-5 transition duration-200 group-hover:scale-110 group-hover:text-neutral-50'>
                  {skill.icon}
                </div>
                <p className='text-5xl font-bold transition delay-100 duration-200 group-hover:scale-110 group-hover:text-neutral-50'>
                  <ZoopText delay={delay + 0.3}>{skill.name}</ZoopText>
                </p>
              </motion.div>
              <p className='flex-1 text-right text-xl font-bold text-white'>
                {'//  ' + skill.label}
              </p>
              <div className='flex w-24 justify-center'>
                {skill.new && (
                  <Badge className='rounded-full border-primary/50 bg-primary/20 text-primary hover:bg-primary/30'>
                    New
                  </Badge>
                )}
              </div>
            </div>
          </motion.li>
        </ModalTrigger>

        {skill.description && (
          <ModalBody className='dark relative bg-neutral-900 text-white'>
            <ModalContent className='flex items-center justify-center'>
              <div className='flex items-center justify-center gap-4'>
                <div className='absolute -left-24 -top-24 -z-10 size-96 text-neutral-800'>
                  {skill.icon}
                </div>
                {skill.new && (
                  <Badge className='rounded-full border-primary/50 bg-primary/20 text-primary'>
                    New
                  </Badge>
                )}
                <h2 className='text-balance text-3xl font-bold'>
                  {skill.description.title}
                </h2>
              </div>
              <div className='mt-4 text-balance text-neutral-600 dark:text-neutral-400'>
                {skill.description.content.map((content, index) => (
                  <p key={index} className='py-2'>
                    {content}
                  </p>
                ))}
              </div>
              {/* Add more detailed content about the skill here */}
            </ModalContent>
          </ModalBody>
        )}
      </Modal>
    </li>
  )
}