'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { Metadata } from 'next'

const games = [
  {
    id: 'prsi',
    title: 'Prší',
    image: '/images/game-prsi.jpg',
    year: '1920s',
    players: '2-6',
    duration: '20-30 min',
    description: 'Nejoblíbenější česká karetní hra, kterou znají všichni. Hra vyžaduje strategické myšlení a schopnost předvídat tahy soupeřů. Dokonalá kombinace štěstí a taktiky.',
    difficulty: 'Snadná',
    category: 'Karetní',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    id: 'clovece',
    title: 'Člověče, nezlob se!',
    image: '/images/game-clovece.jpg',
    year: '1910',
    players: '2-4',
    duration: '30-45 min',
    description: 'Ikonická desková hra, která se stala symbolem rodinných večerů. Původem z Indie, ale v Česku získala unikátní podobu a místo v srdcích hráčů všech generací.',
    difficulty: 'Snadná',
    category: 'Desková',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    id: 'mariash',
    title: 'Mariáš',
    image: '/images/game-mariash.jpg',
    year: '19. stol.',
    players: '3',
    duration: '45-60 min',
    description: 'Královna českých karetních her. Mariáš vyžaduje vynikající paměť, taktiku a schopnost číst hru. Pravá výzva pro milovníky strategických her s hlubokým herním systémem.',
    difficulty: 'Pokročilá',
    category: 'Karetní',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50',
  },
  {
    id: 'zaba',
    title: 'Žába',
    image: '/images/game-zaba.jpg',
    year: 'Tradiční',
    players: '2+',
    duration: '15-20 min',
    description: 'Klasická hospodská hra vyžadující zručnost a přesnost. Hráči hází kroužky nebo mincemi do otvoru ve tvaru žáby. Atmosféra, soutěž a česká tradice v jednom.',
    difficulty: 'Střední',
    category: 'Zručnostní',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'hover:border-amber-500/50',
  },
]

export default function GamesPage() {
  const [activeCategory, setActiveCategory] = useState('Vše')
  const [activeDifficulty, setActiveDifficulty] = useState('Vše')
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  const categories = ['Vše', 'Karetní', 'Desková', 'Zručnostní']
  const difficulties = ['Vše', 'Snadná', 'Střední', 'Pokročilá']

  const filteredGames = games.filter(game => {
    const categoryMatch = activeCategory === 'Vše' || game.category === activeCategory
    const difficultyMatch = activeDifficulty === 'Vše' || game.difficulty === activeDifficulty
    return categoryMatch && difficultyMatch
  })

  return (
    <div className="flex flex-col">
      {/* Hero - Diagonal Split */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Katalog
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Českých Her
              </span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-balance text-xl leading-relaxed text-muted-foreground">
              Od tradičních karetních her po klasické stolní hry. Objevte historii, naučte se pravidla a ovládněte strategie her, které baví generace.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filters */}
      <section className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Category filters */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Kategorie
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'border border-border bg-card text-foreground hover:border-primary/40 hover:bg-card/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty filters */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Obtížnost
              </span>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setActiveDifficulty(difficulty)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeDifficulty === difficulty
                        ? 'bg-secondary text-secondary-foreground shadow-lg'
                        : 'border border-border bg-card text-foreground hover:border-secondary/40 hover:bg-card/80'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase - Staggered Grid */}
      <section className="bg-gradient-to-b from-background to-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredGames.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                Nenalezeny žádné hry odpovídající filtrům.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredGames.map((game, index) => (
                <Link
                  key={game.id}
                  href={`/hry/${game.id}`}
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                  className={`group relative overflow-hidden rounded-3xl border transition-all ${
                    index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
                  } ${
                    hoveredGame === game.id
                      ? `border-2 ${game.borderColor.replace('hover:', '')} shadow-2xl`
                      : 'border-border hover:shadow-xl'
                  }`}
                  style={{
                    transform: hoveredGame === game.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Floating badges */}
                    <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                      <div className="rounded-full border border-primary/20 bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                        {game.difficulty}
                      </div>
                      <div className="rounded-full border border-secondary/20 bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground backdrop-blur-sm">
                        {game.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative bg-card p-8">
                    <h3 className="font-serif text-3xl font-bold text-foreground">
                      {game.title}
                    </h3>
                    
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{game.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{game.players} hráčů</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{game.duration}</span>
                      </div>
                    </div>

                    <p className="mt-6 text-balance leading-relaxed text-muted-foreground">
                      {game.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                      Zjistit více o hře
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Angled Design */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0 100%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Nenašli jste svou oblíbenou hru?
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Náš katalog neustále rozšiřujeme o nové tradiční i moderní české hry. Sledujte náš blog pro aktuální přírůstky, zajímavé příběhy a herní strategie.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group min-w-[200px]" asChild>
                <Link href="/blog">
                  Přejít na Blog
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
                <Link href="/o-nas">Kontaktujte Nás</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
