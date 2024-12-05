import React from 'react'
import { motion } from 'motion/react'

type ZoopTextProps = {
  children: string
  delay?: number
}

export default function ZoopText({ children, delay = 0 }: ZoopTextProps) {
  return (
    <div>
      {children
        ? children.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { opacity: 0, y: -20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: delay + 0.05 * index
                  }
                }
              }}
              whileTap={{
                scale: 1.1,
                color: '#bfbfff',
                transition: { duration: 0.1, ease: 'circOut' }
              }}
              className='inline-block scale-100'
            >
              {letter}
            </motion.span>
          ))
        : null}
    </div>
  )
}
