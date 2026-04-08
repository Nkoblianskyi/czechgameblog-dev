'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Flame, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import type { Metadata } from 'next'

const posts = [
  {
    id: 'historie-deskovych-her',
    title: 'Historie Deskových Her v České Republice',
    excerpt: 'Objevte fascinující vývoj herní kultury od středověku po současnost. Od prvních zmínek o karetních hrách ve středověkých kronikách až po moderní herní renaissance v 21. století.',
    date: '15. 3. 2026',
    readTime: '8 min',
    category: 'Historie',
    featured: true,
    trending: true,
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    id: 'strategie-mariase',
    title: 'Mistrovství v Mariáši: Pokročilé Strategie',
    excerpt: 'Naučte se pokročilé techniky a taktiky od profesionálních hráčů. Objevte tajemství paměti, počítání karet a psychologie hry pro zvládnutí této královské české hry.',
    date: '10. 3. 2026',
    readTime: '12 min',
    category: 'Strategie',
    featured: true,
    trending: true,
    gradient: 'from-secondary/20 to-secondary/5',
  },
  {
    id: 'ucit-deti-hry',
    title: 'Jak Přiblížit Dětem Svět Deskových Her',
    excerpt: 'Praktické rady pro rodiče a pedagogy. Metody, které fungují, běžné chyby a jak vybudovat v dětech lásku k hrám, které je naučí strategii, trpělivosti a fair play.',
    date: '5. 3. 2026',
    readTime: '6 min',
    category: 'Pro rodiče',
    featured: false,
    trending: false,
    gradient: 'from-accent/20 to-accent/5',
  },
  {
    id: 'ceske-karetni-hry',
    title: 'Velký Průvodce Českými Karetními Hrami',
    excerpt: 'Kompletní přehled od Prší přes Mariáš až po méně známé regionální varianty. Historie, pravidla a kulturní význam každé hry v českých zemích.',
    date: '28. 2. 2026',
    readTime: '10 min',
    category: 'Průvodce',
    featured: false,
    trending: true,
    gradient: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 'hospodske-hry',
    title: 'Tradiční České Hospodské Hry a Jejich Kultura',
    excerpt: 'Prozkoumejte svět hospodských her jako Žába, šipky a kulečník. Sociální rituály, tradice a neformální pravidla, která dělají z hospody centrum českého společenského života.',
    date: '20. 2. 2026',
    readTime: '7 min',
    category: 'Kultura',
    featured: false,
    trending: true,
    gradient: 'from-orange-500/20 to-orange-500/5',
  },
  {
    id: 'clovece-nezlob-se',
    title: 'Člověče, nezlob se!: Cesta z Indie do Čech',
    excerpt: 'Fascinující příběh transformace starověké indické Pachisi na nejoblíbenější českou rodinnou hru. Historie, evoluce pravidel a kulturní adaptace napříč kontinenty a stoletími.',
    date: '12. 2. 2026',
    readTime: '9 min',
    category: 'Historie',
    featured: false,
    trending: false,
    gradient: 'from-green-500/20 to-green-500/5',
  },
  {
    id: 'mariasove-turnaje',
    title: 'Příprava na Turnaj: Mentální Taktika Profíka',
    excerpt: 'Průvodce přípravou na soutěžní mariášové turnaje. Mentální příprava, tréninkové metody, stravování a tipy od profesionálů na zvládnutí tlaku a soustředění během turnaje.',
    date: '5. 2. 2026',
    readTime: '11 min',
    category: 'Strategie',
    featured: false,
    trending: true,
    gradient: 'from-purple-500/20 to-purple-500/5',
  },
  {
    id: 'digitalizace-her',
    title: 'Tradiční Hry v Éře Digitalizace',
    excerpt: 'Jak si klasické české hry udržují relevanci v době mobilních aplikací a online gamingu. Nové trendy, digitální adaptace a budoucnost tradičních her v moderním světě.',
    date: '28. 1. 2026',
    readTime: '8 min',
    category: 'Trendy',
    featured: false,
    trending: false,
    gradient: 'from-purple-500/20 to-purple-500/5',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Vše')
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  const categories = ['Vše', 'Historie', 'Strategie', 'Průvodce', 'Pro rodiče', 'Kultura', 'Trendy']
  const featuredPosts = posts.filter(post => post.featured)
  const trendingPosts = posts.filter(post => post.trending && !post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  const filteredRegularPosts = activeCategory === 'Vše' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* Hero - Wave Design */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/5 to-accent/10"
          style={{
            clipPath: 'ellipse(100% 100% at 50% 0%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Blog o
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Deskových Hrách
              </span>
            </h1>
            
            <p className="mt-8 max-w-2xl mx-auto text-balance text-xl leading-relaxed text-muted-foreground">
              Ponořte se do světa deskových her. Objevte historii, naučte se nové techniky, porozumějte strategiím a staňte se lepším hráčem.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
              Filtrovat:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'border border-border bg-card text-foreground hover:border-primary/40 hover:bg-card/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Immersive Cards */}
      {featuredPosts.length > 0 && (
        <section className="bg-gradient-to-b from-background to-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-3">
              <Flame className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Doporučené Články
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                  className={`group relative overflow-hidden rounded-3xl border transition-all ${
                    hoveredPost === post.id 
                      ? 'border-primary/50 shadow-2xl scale-[1.02]' 
                      : 'border-border hover:shadow-xl'
                  }`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`} />
                  
                  {/* Floating orb */}
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                  
                  <div className="relative p-10 lg:p-12">
                    {/* Category badge */}
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                        {post.category}
                      </div>
                      {post.trending && (
                        <div className="flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-bold text-secondary">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-serif text-3xl font-bold text-balance leading-tight text-foreground group-hover:text-primary md:text-4xl">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-6 text-balance leading-relaxed text-muted-foreground lg:text-lg">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} čtení</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        Číst článek
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Posts - Compact Horizontal Scroll */}
      {trendingPosts.length > 0 && (
        <section className="border-y border-border bg-background py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-secondary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Trending Nyní
              </h2>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {trendingPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group min-w-[340px] overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-secondary/50 hover:shadow-lg"
                >
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold uppercase tracking-wider text-secondary">
                        {post.category}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-bold text-balance leading-tight text-foreground group-hover:text-secondary">
                      {post.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-secondary">
                      Číst více
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts - Masonry-inspired Grid */}
      <section className="bg-gradient-to-b from-card to-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {activeCategory === 'Vše' ? 'Všechny Články' : `Články: ${activeCategory}`}
          </h2>

          {filteredRegularPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                Nenalezeny žádné články v této kategorii.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRegularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all ${
                    index % 3 === 1 ? 'lg:mt-8' : ''
                  } ${
                    hoveredPost === post.id
                      ? 'border-primary/50 shadow-xl scale-105'
                      : 'border-border bg-card hover:shadow-lg'
                  }`}
                >
                  {/* Gradient accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />
                  
                  <div className="p-6">
                    {/* Category */}
                    <div className="text-xs font-bold uppercase tracking-wider text-primary">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-xl font-bold text-balance leading-tight text-foreground group-hover:text-primary">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 line-clamp-3 text-sm text-balance leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime} čtení</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover gradient orb */}
                  <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-tl from-primary/20 to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA - Curved Background */}
      <section className="relative overflow-hidden border-t border-border bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          style={{
            clipPath: 'ellipse(140% 100% at 50% 100%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Zůstaňte v Obraze
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
              Pravidelně přidáváme nové články o historii, strategiích a zajímavostech ze světa deskových her. Prozkoumejte celý svět českých tradičních her.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group min-w-[200px]" asChild>
                <Link href="/o-nas">
                  Kontaktujte Nás
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
                <Link href="/hry">Prohlédnout Hry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
