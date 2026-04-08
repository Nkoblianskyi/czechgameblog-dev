'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Domů' },
    { href: '/hry', label: 'Katalog Her' },
    { href: '/blog', label: 'Blog' },
    { href: '/o-nas', label: 'O Nás' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01M12 12h.01" />
            </svg>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Czech Game Blog
          </span>
        </Link>

        <ul className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:px-4',
                  pathname === link.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
