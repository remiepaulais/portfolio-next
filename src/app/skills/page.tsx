import { SKILLS } from '@/constants'
import Skill from '@/components/Skill'
import React from 'react'

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

export default function SkillsPage() {
  // TODO: Mobile responsiveness and accessibility
  return (
    <>
      <main className='container relative mx-auto my-24 h-screen items-center justify-between px-8'>
        <ul className='flex w-full flex-col gap-4 text-center'>
          {SKILLS.map((skill, index) => (
            <Skill skill={skill} key={index} index={index} />
          ))}
        </ul>
      </main>
      <div
        className='pointer-events-none fixed bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-background to-background/0'
        aria-hidden='true'
      ></div>
    </>
  )
}
