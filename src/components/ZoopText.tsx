import React from 'react'
import { motion } from 'motion/react'

type ZoopTextProps = {
  children: string
  delay?: number
}

export default function ZoopText({ children, delay = 0 }: ZoopTextProps) {
  return (
    <>
      {children
        ? Array.from(children).map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: -20,
                rotate: -15,
                filter: 'blur(4px)'
              }}
              animate={{
                filter: 'blur(0px)',
                rotate: 0,
                opacity: 1,
                y: 0,
                transition: {
                  delay: delay + 0.05 * index
                }
              }}
              whileHover={{
                scale: 1.1,
                color: '#bfbfff',
                rotate: (Math.random() - 0.5) * 15,
                y: (Math.random() - 0.5) * 30,
                transition: { duration: 0.1, ease: 'circOut' }
              }}
              className='inline-block scale-100'
              style={{ whiteSpace: 'pre' }}
            >
              {letter}
            </motion.span>
          ))
        : null}
    </>
  )
}
