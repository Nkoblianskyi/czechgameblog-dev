'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Dices, Clock } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  const featuredGames = [
    {
      id: 'prsi',
      title: 'Prší',
      image: '/images/game-prsi.jpg',
      year: '1920s',
      players: '2-6',
      description: 'Klasická česká karetní hra plná strategie',
      color: 'from-orange-500/20 to-red-500/20',
      difficulty: 'Snadná',
    },
    {
      id: 'clovece',
      title: 'Člověče, nezlob se!',
      image: '/images/game-clovece.jpg',
      year: '1910',
      players: '2-4',
      description: 'Ikonická česká desková hra',
      color: 'from-blue-500/20 to-cyan-500/20',
      difficulty: 'Snadná',
    },
    {
      id: 'mariash',
      title: 'Mariáš',
      image: '/images/game-mariash.jpg',
      year: '19. století',
      players: '3',
      description: 'Sofistikovaná karetní hra',
      color: 'from-emerald-500/20 to-teal-500/20',
      difficulty: 'Pokročilá',
    },
    {
      id: 'zaba',
      title: 'Žába',
      image: '/images/game-zaba.jpg',
      year: 'Tradiční',
      players: '2+',
      description: 'Zábavná hospodská hra',
      color: 'from-amber-500/20 to-yellow-500/20',
      difficulty: 'Střední',
    },
  ]

  const blogHighlights = [
    {
      id: 'historie-deskovych-her',
      title: 'Od Středověku k Modernosti',
      excerpt: 'Historie českých her',
      category: 'Historie',
      accent: 'bg-primary/10 text-primary',
      readTime: '8 min',
    },
    {
      id: 'strategie-mariase',
      title: 'Mistrovské Tahy',
      excerpt: 'Strategie Mariáše',
      category: 'Strategie',
      accent: 'bg-secondary/10 text-secondary',
      readTime: '6 min',
    },
    {
      id: 'hospodske-hry',
      title: 'Herní Rituály',
      excerpt: 'Česká hospodská kultura',
      category: 'Kultura',
      accent: 'bg-accent/10 text-accent-foreground',
      readTime: '5 min',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero - Asymmetric Split */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-border">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/5 via-transparent to-transparent"
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
          {/* Left side - Content */}
          <div className="lg:col-span-7">

            <h1 className="mt-8 font-serif text-6xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Vítejte ve
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Světě Her
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-balance text-xl leading-relaxed text-muted-foreground">
              Prozkoumejte bohatou historii, pravidla a strategie her, které formovaly českou herní kulturu napříč generacemi.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button size="lg" className="group min-w-[180px] text-base" asChild>
                <Link href="/hry">
                  Katalog Her
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px] text-base" asChild>
                <Link href="/blog">Číst Blog</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-serif text-3xl font-bold text-foreground">50+</div>
                <div className="mt-1 text-sm text-muted-foreground">Her</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-foreground">100+</div>
                <div className="mt-1 text-sm text-muted-foreground">Článků</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-foreground">2025</div>
                <div className="mt-1 text-sm text-muted-foreground">Založeno</div>
              </div>
            </div>
          </div>

          {/* Right side - Floating game cards */}
          <div className="relative lg:col-span-5">
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Floating card 1 */}
              <div
                className="absolute right-0 top-0 w-64 origin-top-right animate-float rounded-2xl border border-border bg-card p-4 shadow-2xl transition-transform hover:scale-105"
                style={{ animationDelay: '0s' }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/game-prsi.jpg"
                    alt="Prší"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Prší</h3>
                  <p className="text-xs text-muted-foreground">1920s • Karetní hra</p>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute bottom-12 left-0 w-56 origin-bottom-left animate-float rounded-2xl border border-border bg-card p-4 shadow-2xl transition-transform hover:scale-105"
                style={{ animationDelay: '1s' }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/game-clovece.jpg"
                    alt="Člověče, nezlob se!"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Člověče, nezlob se!</h3>
                  <p className="text-xs text-muted-foreground">1910 • Desková hra</p>
                </div>
              </div>

              {/* Floating card 3 */}
              <div
                className="absolute right-12 top-1/2 w-48 -translate-y-1/2 animate-float rounded-2xl border border-border bg-card p-3 shadow-2xl transition-transform hover:scale-105"
                style={{ animationDelay: '2s' }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/game-mariash.jpg"
                    alt="Mariáš"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-serif text-base font-semibold text-foreground">Mariáš</h3>
                  <p className="text-xs text-muted-foreground">19. století</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Games Showcase - Bento Grid */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Katalog Tradičních Her
              </h2>
              <p className="mt-4 text-lg text-balance leading-relaxed text-muted-foreground">
                Objevte hry, které spojují generace
              </p>
            </div>
            <Button variant="ghost" className="group hidden md:flex" asChild>
              <Link href="/hry">
                Zobrazit vše
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Large featured game */}
            <Link
              href={`/hry/${featuredGames[0].id}`}
              onMouseEnter={() => setHoveredGame(featuredGames[0].id)}
              onMouseLeave={() => setHoveredGame(null)}
              className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background md:col-span-2"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredGames[0].image}
                  alt={featuredGames[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              <div className="relative flex h-full flex-col justify-end p-8">
                <h3 className="font-serif text-4xl font-bold text-foreground">
                  {featuredGames[0].title}
                </h3>
                <p className="mt-2 max-w-md text-balance text-muted-foreground">
                  {featuredGames[0].description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{featuredGames[0].year}</span>
                  <span>•</span>
                  <span>{featuredGames[0].players} hráčů</span>
                </div>
              </div>
            </Link>

            {/* Medium games */}
            {featuredGames.slice(1, 3).map((game, idx) => (
              <Link
                key={game.id}
                href={`/hry/${game.id}`}
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="absolute inset-0">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                    {game.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{game.year}</span>
                    <span>•</span>
                    <span>{game.players} hráčů</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Small game */}
            <Link
              href={`/hry/${featuredGames[3].id}`}
              onMouseEnter={() => setHoveredGame(featuredGames[3].id)}
              onMouseLeave={() => setHoveredGame(null)}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card md:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredGames[3].image}
                  alt={featuredGames[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                  {featuredGames[3].title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{featuredGames[3].year}</span>
                  <span>•</span>
                  <span>{featuredGames[3].players}+</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button variant="outline" className="group" asChild>
              <Link href="/hry">
                Zobrazit všechny hry
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Highlights - Immersive Diagonal Layout */}
      <section className="relative overflow-hidden border-y border-border bg-gradient-to-br from-background via-card/50 to-background py-24 lg:py-32">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-secondary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Angled Header */}
          <div className="mb-20">
            <div className="relative inline-block">
              <div className="absolute -left-4 top-0 h-full w-2 bg-gradient-to-b from-primary via-secondary to-accent" />
              <h2 className="pl-8 font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Z Našeho
                <span className="mt-2 block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Blogu
                </span>
              </h2>
            </div>
            <p className="mt-6 max-w-2xl pl-8 text-xl text-balance leading-relaxed text-muted-foreground">
              Ponořte se do příběhů, strategií a kultury her
            </p>
          </div>

          {/* Diagonal Split Layout */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Main Featured - Left Side */}
            <Link
              href={`/blog/${blogHighlights[0].id}`}
              className="group relative overflow-hidden rounded-3xl border-2 border-border bg-gradient-to-br from-card to-background transition-all duration-500 hover:border-primary/50 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 via-transparent to-transparent"
                style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
              />

              <div className="relative p-10 lg:p-12">
                <h3 className="font-serif text-4xl font-bold text-balance leading-[1.1] text-foreground lg:text-5xl">
                  {blogHighlights[0].title}
                </h3>

                <p className="mt-6 text-xl text-balance leading-relaxed text-muted-foreground">
                  {blogHighlights[0].excerpt}
                </p>

                {/* Meta info with divider */}
                <div className="mt-8 flex items-center gap-2 border-t border-border pt-6">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium text-foreground">{blogHighlights[0].readTime} čtení</span>
                </div>

                {/* Arrow with background on hover */}
                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                  <span>Číst článek</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            {/* Secondary Articles - Right Side Stacked with Offset */}
            <div className="flex flex-col gap-6">
              {blogHighlights.slice(1).map((article, idx) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-secondary/50 hover:shadow-xl"
                  style={{
                    transform: idx % 2 === 0 ? 'translateX(0)' : 'translateX(0)',
                  }}
                >
                  {/* Gradient accent line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-secondary via-accent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />

                  <div className="relative p-8">
                    <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold text-balance leading-tight text-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>

                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {article.excerpt}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-sm">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="font-medium text-foreground">{article.readTime} čtení</span>
                        </div>
                      </div>

                      {/* Animated arrow circle */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary/10">
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-secondary" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA with Gradient Border */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
              <Button
                size="lg"
                variant="outline"
                className="group border-2 text-base font-semibold transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/blog">
                  Prohlédnout všechny články
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA - Centered Content */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-secondary-foreground/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center text-primary-foreground">
            <h2 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Spojujeme Tradici s{' '}
              <span className="inline-block bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 bg-clip-text text-transparent">
                Moderním Světem
              </span>
            </h2>

            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-xl leading-relaxed text-primary-foreground/90">
              <p className="text-balance">
                Deskové hry jsou mostem mezi generacemi. Od středověkých karetních her hraných ve šlechtických salonech až po hospodské souboje v Mariáši – každá hra nese v sobě kousek české kultury a historie.
              </p>
              <p className="text-balance">
                Czech Game Blog je vaším průvodcem tímto fascinujícím světem. Objevujeme zapomenuté hry, vysvětlujeme strategie mistrů a zachováváme tradice pro další generace. Protože nejlepší hry nejsou jen o vítězství – jsou o příbězích, které vytváříme společně.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="group text-base" asChild>
                <Link href="/o-nas">
                  Poznejte naši misi
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-base text-black hover:bg-primary-foreground/10" asChild>
                <Link href="/hry">
                  Prohlédnout hry
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
