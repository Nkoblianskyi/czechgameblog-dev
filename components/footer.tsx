import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
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
            </div>
            <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-muted-foreground">
              Váš průvodce světem deskových her v České republice. Objevte historii, pravidla a strategie her, které formovaly generace hráčů.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground">
              Navigace
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Domů
                </Link>
              </li>
              <li>
                <Link
                  href="/hry"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Katalog Her
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  O Nás
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground">
              Právní Informace
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Ochrana Soukromí
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-balance text-xs leading-relaxed text-muted-foreground">
              © {new Date().getFullYear()} Czech Game Blog. Všechna práva vyhrazena.
            </p>
            <p className="text-balance text-xs leading-relaxed text-muted-foreground">
              Provozováno společností K.C. NTOMATA LIMITED
              <br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              Stylianou Lena, 24 Christiana Court, Flat/Office 202
              <br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              Strovolos, 2019 Nicosia, Cyprus
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
