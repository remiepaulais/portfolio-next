import React, { useId } from 'react'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  [key: string]: unknown
}
const DotPattern = React.forwardRef(
  (
    {
      width = 16,
      height = 16,
      x = 0,
      y = 0,
      cx = 1,
      cy = 1,
      cr = 1,
      className,
      ...props
    }: DotPatternProps,
    ref: React.ForwardedRef<SVGSVGElement>
  ) => {
    const id = useId()
    return (
      <svg
        aria-hidden='true'
        className={cn(
          'pointer-events-none absolute inset-0 h-full w-full fill-neutral-500/80',
          className
        )}
        ref={ref}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits='userSpaceOnUse'
            patternContentUnits='userSpaceOnUse'
            x={x}
            y={y}
          >
            <circle id='pattern-circle' cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width='100%' height='100%' strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    )
  }
)

DotPattern.displayName = 'DotPattern'

export const MotionDotPattern = motion.create(DotPattern)
