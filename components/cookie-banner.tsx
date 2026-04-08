'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-card/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-card/90">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h3 className="font-serif text-base font-semibold text-foreground">
            Používáme Cookies
          </h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Tento web používá cookies pro zlepšení vašeho zážitku. Přečtěte si naše{' '}
            <Link href="/cookie-policy" className="text-primary underline-offset-4 hover:underline">
              Cookie Policy
            </Link>
            {' '}a{' '}
            <Link href="/privacy-policy" className="text-primary underline-offset-4 hover:underline">
              Zásady Ochrany Soukromí
            </Link>
            .
          </p>
        </div>
        <div className="flex w-full shrink-0 gap-3 md:w-auto">
          <Button
            onClick={declineCookies}
            variant="outline"
            className="flex-1 md:flex-none"
          >
            Odmítnout
          </Button>
          <Button
            onClick={acceptCookies}
            className="flex-1 md:flex-none"
          >
            Přijmout Vše
          </Button>
        </div>
      </div>
    </div>
  )
}
