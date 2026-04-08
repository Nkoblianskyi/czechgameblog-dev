import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Clock, Share2 } from 'lucide-react'
import { notFound } from 'next/navigation'

const posts = [
  {
    id: 'historie-deskovych-her',
    title: 'Historie Deskových Her v České Republice',
    excerpt: 'Objevte fascinující vývoj herní kultury od středověku po současnost.',
    readTime: '8 min',
    category: 'Historie',
    content: `
      <h2>Počátky Herní Kultury</h2>
      <p>České země mají bohatou historii deskových a karetních her, která sahá až do středověku. První zmínky o karetních hrách se objevují ve 14. století, kdy se karty dostaly do Čech z území dnešního Německa a Itálie.</p>
      
      <h2>Zlatá Éra Mariáše</h2>
      <p>Mariáš, jedna z nejoblíbenějších českých karetních her, získal svou popularitu v 19. století. Tato hra se stala symbolem české hospodské kultury a tradice, která přetrvává dodnes.</p>
      
      <h2>Člověče, nezlob se!</h2>
      <p>Tato ikonická hra má své kořeny v indické hře Pachisi. Do Čech se dostala počátkem 20. století a rychle se stala jednou z nejrozšířenějších rodinných her.</p>
      
      <h2>Moderní Éra</h2>
      <p>V současnosti zažívají deskové hry v Česku renesanci. Kombinace tradičních českých her s moderními světovými tituly vytváří živou herní komunitu.</p>
      
      <h2>Budoucnost Tradice</h2>
      <p>Tradiční české hry si našly své místo i v digitálním věku. Mobilní aplikace a online platformy umožňují hrát klasické hry s přáteli po celém světě, přičemž zachovávají jejich původní kouzlo.</p>
    `,
  },
  {
    id: 'strategie-mariase',
    title: 'Mistrovství v Mariáši: Pokročilé Strategie',
    excerpt: 'Naučte se pokročilé techniky a taktiky od profesionálních hráčů.',
    readTime: '12 min',
    category: 'Strategie',
    content: `
      <h2>Základy Strategického Myšlení</h2>
      <p>Mariáš není jen o štěstí - je to hra dovednosti, paměti a strategie. Zkušení hráči vědí, že úspěch závisí na schopnosti číst hru a předvídat tahy soupeřů.</p>
      
      <h2>Počítání Kart</h2>
      <p>Jednou z klíčových dovedností v Mariáši je schopnost pamatovat si, které karty již byly zahrány. Tato technika vám umožní lépe odhadnout, které karty drží vaši soupeři.</p>
      
      <h2>Psychologie Hry</h2>
      <p>Profesionální hráči věnují velkou pozornost psychologickým aspektům hry. Sledování reakcí soupeřů a jejich herních vzorců může odhalit cenné informace.</p>
      
      <h2>Hlášení a Bodování</h2>
      <p>Správné načasování hlášení je kritické. Zkušení hráči vědí, kdy je výhodné hlásit a kdy je lepší počkat na příhodnější okamžik.</p>
      
      <h2>Týmová Hra</h2>
      <p>Ve čtyřhře je komunikace a spolupráce s partnerem zásadní. Naučte se číst náznaky partnera a koordinovat strategii pro maximální efektivitu.</p>
    `,
  },
  {
    id: 'ucit-deti-hry',
    title: 'Jak Přiblížit Dětem Svět Deskových Her',
    excerpt: 'Praktické rady pro rodiče a pedagogy.',
    readTime: '6 min',
    category: 'Pro rodiče',
    content: `
      <h2>Výběr Správné Hry</h2>
      <p>Každé dítě je jiné. Začněte jednoduchými hrami s jasnými pravidly a postupně přidávejte složitější prvky. Člověče, nezlob se! je ideální úvod do světa deskových her.</p>
      
      <h2>Vytvoření Herního Rituálu</h2>
      <p>Pravidelný čas na hry pomáhá dětem vytvořit pozitivní vztah k deskové zábavě. Například každou neděli odpoledne může být rodinným herním časem.</p>
      
      <h2>Trpělivost a Podpora</h2>
      <p>Děti potřebují čas na pochopení pravidel. Buďte trpěliví, vysvětlujte klidně a zajistěte, aby se všichni bavili - výhra není vše.</p>
      
      <h2>Vzdělávací Přínosy</h2>
      <p>Deskové hry učí děti strategickému myšlení, trpělivosti, fair play a schopnosti vyrovnat se s prohrou. Tyto dovednosti jsou cenné po celý život.</p>
    `,
  },
  {
    id: 'ceske-karetni-hry',
    title: 'Velký Průvodce Českými Karetními Hrami',
    excerpt: 'Kompletní přehled od Prší přes Mariáš až po méně známé regionální varianty.',
    readTime: '10 min',
    category: 'Průvodce',
    content: `
      <h2>Prší - Česká Klasika</h2>
      <p>Prší je jednoduchá, rychlá hra vhodná pro všechny věkové kategorie. Základní pravidla jsou snadno pochopitelná, ale existuje mnoho regionálních variant.</p>
      
      <h2>Mariáš - Královna Karetních Her</h2>
      <p>Považovaná za nejsložitější českou karetní hru, Mariáš vyžaduje strategii, paměť a týmovou spolupráci. Hra se hraje s 32 kartami a má bohatou historii.</p>
      
      <h2>Žolíky a Канaste</h2>
      <p>Ačkoli nejsou původem české, tyto hry si našly silné místo v české herní kultuře. Žolíky jsou oblíbené pro svou strategickou hloubku.</p>
      
      <h2>Regionální Varianty</h2>
      <p>Každý region Čech a Moravy má své unikátní varianty klasických her. Od moravského duraka po slezské speciální pravidla Prší.</p>
    `,
  },
  {
    id: 'hospodske-hry',
    title: 'Tradiční České Hospodské Hry a Jejich Kultura',
    excerpt: 'Prozkoumejte svět hospodských her jako Žába, šipky a kulečník.',
    readTime: '7 min',
    category: 'Kultura',
    content: `
      <h2>Žába - Hospodská Ikona</h2>
      <p>Hra Žába je neodmyslitelnou součástí české hospodské kultury. Skládá se z pěti otvorů v dřevěné desce a vyžaduje přesnost a zručnost.</p>
      
      <h2>Sociální Aspekt</h2>
      <p>Hospodské hry nejsou jen o závodění - jsou o komunitě. Pravidelné turnaje a neformální zápasy vytvářejí silné sociální vazby.</p>
      
      <h2>Neformální Pravidla</h2>
      <p>Každá hospoda má své vlastní tradice a pravidla. Od pořadí hráčů po rituály oslavování vítězství - tyto nepsané normy jsou součástí kouzla.</p>
      
      <h2>Moderní Oživení</h2>
      <p>V posledních letech zažívají tradiční hospodské hry renesanci. Nové hospody instalují Žáby a šipky, aby přilákaly mladší generace.</p>
    `,
  },
  {
    id: 'vyvoj-clovece',
    title: 'Člověče, nezlob se! Cesta z Indie do Čech',
    excerpt: 'Fascinující příběh transformace starobylé indické hry Pachisi do české ikonické podoby.',
    readTime: '9 min',
    category: 'Historie',
    content: `
      <h2>Indické Kořeny</h2>
      <p>Původní hra Pachisi vznikla v Indii před více než 1500 lety. Hrála se na křížovém herním plánu s kostkami a figurkami.</p>
      
      <h2>Cesta do Evropy</h2>
      <p>V 19. století se hra dostala do Evropy, kde byla adaptována do různých forem. V roce 1907 Josef Friedrich Schmidt vytvořil německou verzi "Mensch ärgere dich nicht".</p>
      
      <h2>Česká Adaptace</h2>
      <p>Do Československa se hra dostala po první světové válce a rychle se stala rodinnou klasikou. České vydání přineslo unikátní design a překlad.</p>
      
      <h2>Kulturní Význam</h2>
      <p>Člověče, nezlob se! se stalo více než jen hrou - je to symbol rodinného času a české identity. Každá domácnost měla svou krabici s opotřebovaným plánem.</p>
    `,
  },
  {
    id: 'turnaje-mariase',
    title: 'Příprava na Turnaj: Mentální Taktika Profíka',
    excerpt: 'Průvodce přípravou na soutěžní mariášové turnaje.',
    readTime: '11 min',
    category: 'Strategie',
    content: `
      <h2>Mentální Příprava</h2>
      <p>Úspěšní turnajový hráči věnují stejnou pozornost mentální přípravě jako strategii samotné. Meditace, vizualizace a stres management jsou klíčové.</p>
      
      <h2>Fyzická Kondice</h2>
      <p>Může to znít překvapivě, ale fyzická kondice hraje roli v dlouhých turnajích. Dobrý spánek, strava a hydratace ovlivňují vaši schopnost koncentrace.</p>
      
      <h2>Analýza Hry</h2>
      <p>Profesionálové pravidelně analyzují své předchozí hry, identifikují chyby a zdokonalují strategie. Použití zápisů z her je běžnou praxí.</p>
      
      <h2>Zvládání Tlaku</h2>
      <p>Turnajové prostředí přináší tlak. Naučte se techniky, jak zůstat klidní a soustředění, i když jsou sázky vysoké.</p>
    `,
  },
  {
    id: 'modernizace-her',
    title: 'Tradiční Hry v Éře Digitalizace',
    excerpt: 'Jak si klasické české hry udržují relevanci v době mobilních aplikací a online gamingu.',
    readTime: '8 min',
    category: 'Trendy',
    content: `
      <h2>Digitální Adaptace</h2>
      <p>Tradiční české hry úspěšně přešly do digitálního prostředí. Mobilní aplikace umožňují hrát Mariáš či Prší s přáteli nebo AI protivníky kdekoli.</p>
      
      <h2>Online Komunity</h2>
      <p>Internet vytvořil globální komunity hráčů tradičních her. Fóra, turnaje a streamování her přinesly nový život klasickým titulům.</p>
      
      <h2>Hybridní Zážitky</h2>
      <p>Nové technologie jako rozšířená realita nabízejí zajímavé možnosti pro kombinaci fyzických a digitálních herních prvků.</p>
      
      <h2>Zachování Tradice</h2>
      <p>Klíčové je najít rovnováhu mezi inovací a zachováním autenticity. Moderní platformy musí respektovat ducha původních her.</p>
    `,
  },
]

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const post = posts.find(p => p.id === id)
  
  if (!post) {
    return {
      title: 'Článek nenalezen',
    }
  }

  return {
    title: `${post.title} | Czech Game Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params
  const post = posts.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts.filter(p => p.id !== id && p.category === post.category).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-card/50 to-background">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zpět na blog
          </Link>

          <div className="mt-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{post.readTime} čtení</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Share2 className="h-4 w-4" />
                Sdílet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="space-y-8">
          {post.content.split('<h2>').filter(section => section.trim()).map((section, index) => {
            const [title, ...contentParts] = section.split('</h2>')
            const content = contentParts.join('</h2>').replace(/<\/?p>/g, '').trim()
            
            return (
              <div key={index} className="group">
                {/* Section with accent line */}
                <div className="relative">
                  <div className="absolute -left-6 top-2 h-8 w-1.5 rounded-full bg-gradient-to-b from-primary to-primary/20 opacity-60 transition-opacity group-hover:opacity-100" />
                  <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                    {title.trim()}
                  </h2>
                </div>
                
                {/* Content paragraphs */}
                <div className="mt-6 space-y-4">
                  {content.split('\n').filter(p => p.trim()).map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-lg leading-relaxed text-pretty text-muted-foreground"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Article Footer */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Líbil se vám tento článek? Sdílejte ho s přáteli!
            </p>
            <button className="flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5">
              <Share2 className="h-4 w-4" />
              Sdílet článek
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-gradient-to-b from-background to-card/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-12 font-serif text-3xl font-bold text-foreground">
              Související Články
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary">
                      {relatedPost.category}
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-foreground group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                      Číst článek
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Zobrazit všechny články</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
