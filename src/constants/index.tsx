import {
  AppWriteLogo,
  FramerMotionLogo,
  NextJSLogo,
  ReactLogo,
  SQLiteLogo,
  TailwindCSSLogo,
  TypescriptLogo,
  VueLogo
} from '@/components/icons'
import { PenTool } from 'lucide-react'

export const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Skills',
    href: '/skills'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'About',
    href: '/about'
  }
]

export interface Skill {
  name: string
  label: string
  icon: JSX.Element
  new?: boolean
  description?: {
    title: string
    content: string[]
  }
  website?: string
}

export const SKILLS: Skill[] = [
  {
    name: 'TypeScript',
    label: 'Javascript but better',
    icon: <TypescriptLogo />,
    description: {
      title: 'What is TypeScript?',
      content: [
        'TypeScript adds type safety to JavaScript, making your codebase predictable and less error-prone.',
        'It introduces static typing, interfaces, generics, and advanced object-oriented features to JavaScript.',
        'While some developers find it more verbose, the benefits of catching errors early and better tooling support make it increasingly popular.'
      ]
    },
    website: 'https://www.typescriptlang.org/'
  },
  {
    name: 'React',
    label: 'Javascript Library',
    icon: <ReactLogo />,
    description: {
      title: 'But what is React?',
      content: [
        'React is a JavaScript library for building user interfaces.',
        'It introduces a component-based architecture that makes building complex UIs more manageable.',
        'React uses a Virtual DOM for efficient rendering and updates, making applications fast and responsive.'
      ]
    },
    website: 'https://reactjs.org/'
  },
  {
    name: 'NextJS',
    label: 'React Framework',
    icon: <NextJSLogo />,
    description: {
      title: 'What is NextJS?',
      content: [
        'Next.js is an open-source React framework that enables powerful features like server-side rendering and static site generation.',
        'It provides automatic route pre-fetching, built-in API routes, and excellent developer experience with hot reload.',
        'Next.js handles optimization out of the box, including image optimization, font optimization, and script loading strategies.',
        'Its hybrid static & server rendering approach makes it perfect for building fast, SEO-friendly applications.'
      ]
    },
    website: 'https://nextjs.org/'
  },
  {
    name: 'TailwindCSS',
    label: 'CSS Framework',
    icon: <TailwindCSSLogo />,
    description: {
      title: 'What is TailwindCSS?',
      content: [
        'Tailwind CSS is a utility-first CSS framework that allows you to style your HTML elements with classes instead of writing custom CSS.',
        'It provides a highly customizable design system with consistent spacing, colors, and typography.',
        'The framework generates only the CSS you use, resulting in minimal production bundles.'
      ]
    },
    website: 'https://tailwindcss.com/'
  },
  {
    name: 'Motion',
    label: 'Animation Library',
    icon: <FramerMotionLogo />,
    description: {
      title: 'What is Motion?',
      content: [
        'Motion is a JavaScript animation library for React that uses the Web Animations API to create smooth and natural animations.',
        'It provides a declarative API that makes complex animations and gestures simple to implement.',
        'It use to be known as Framer Motion but it became independent very recently in 2024!'
      ]
    },
    new: true,
    website: 'https://motion.dev/'
  },
  {
    name: 'NuxtJS',
    label: 'Vue Framework',
    icon: <VueLogo />,
    description: {
      title: 'What is NuxtJS?',
      content: [
        'NuxtJS is a Vue framework for building universal applications.',
        "It's the Vue equivalent of Next.js, providing similar features like SSR (Server-Side Rendering) and static site generation.",
        'It simplifies Vue development with conventions and optimizations out of the box!'
      ]
    },
    new: true,
    website: 'https://nuxt.com/'
  },
  {
    name: 'SQLite',
    label: 'Lightweight Database',
    icon: <SQLiteLogo />,
    description: {
      title: 'What is SQLite?',
      content: [
        'SQLite is a lightweight, file-based database management system.',
        'It requires no separate server process and is perfect for quick prototyping',
        'Perfect for local storage, and small to medium-scale applications.',
        'They have a way better looking website than I do, you should check it out! :)'
      ]
    },
    new: true,
    website: 'https://www.sqlite.org/'
  },
  {
    name: 'AppWrite',
    label: 'Backend-as-a-Service',
    icon: <AppWriteLogo />,
    description: {
      title: 'What is AppWrite?',
      content: [
        'AppWrite is an open-source backend-as-a-service platform.',
        'It provides pre-built APIs for authentication, databases, storage, and much more.',
        'The platform offers real-time capabilities, serverless functions, and advanced security features.',
        'Self-hosted alternative to Firebase, giving developers full control over their data and infrastructure.'
      ]
    },
    new: true,
    website: 'https://appwrite.io/'
  },
  {
    name: 'UI/UX',
    label: 'Design Skills',
    icon: <PenTool className='h-full w-full' />,
    description: {
      title: 'What is UI/UX?',
      content: [
        'UI (User Interface) design focuses on creating visually appealing and intuitive interfaces.',
        'UX (User Experience) design ensures that applications are accessible, efficient, and enjoyable to use.',
        'These skills combine psychology, design principles, and technical knowledge to create user-centered solutions.',
        'Important aspects include wireframing, prototyping, user research, and accessibility considerations.'
      ]
    }
  }
]
