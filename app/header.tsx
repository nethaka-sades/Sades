'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="px-4 mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-semibold text-5xl text-black dark:text-white">
          Hi, I&apos;m Nethaka
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          I tweet on X.
        </TextEffect>
      </div>
    </header>
  )
}
