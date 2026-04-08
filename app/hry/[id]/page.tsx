import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Users, Clock, Calendar, TrendingUp } from 'lucide-react'

const gamesData: Record<string, any> = {
  prsi: {
    title: 'Prší',
    image: '/images/game-prsi.jpg',
    year: '1920s',
    players: '2-6 hráčů',
    duration: '20-30 min',
    difficulty: 'Snadná',
    category: 'Karetní hry',
    description: 'Prší je klasická česká karetní hra, která kombinuje štěstí s taktikou. Hra je oblíbená napříč všemi věkovými kategoriemi a patří k základním kamenům české herní kultury.',
    history: 'Hra Prší vznikla pravděpodobně ve 20. letech 20. století a rychle se rozšířila po celé České republice. Její jednoduchost a zábavnost z ní udělaly oblíbenou rodinnou hru, kterou hrají generace Čechů.',
    rules: [
      'Hra se hraje s klasickou balíčkem 32 karet.',
      'Každý hráč dostane na začátku 4 karty.',
      'Cílem je zbavit se všech karet jako první.',
      'Hráči pokládají karty stejné barvy nebo hodnoty.',
      'Speciální karty mají zvláštní funkce (sedma - další hráč si bere 2 karty, eso - změna barvy, atd.).',
    ],
    strategy: [
      'Pamatujte si, které speciální karty již byly zahrány.',
      'Pokud máte více karet stejné barvy, nechte si speciální karty na později.',
      'Sedmičky a esa si šetřete na klíčové momenty.',
      'Sledujte počet karet ostatních hráčů a snažte se jim zabránit ve výhře.',
    ],
  },
  clovece: {
    title: 'Člověče, nezlob se!',
    image: '/images/game-clovece.jpg',
    year: '1910',
    players: '2-4 hráči',
    duration: '30-45 min',
    difficulty: 'Snadná',
    category: 'Deskové hry',
    description: 'Člověče, nezlob se! je ikonická česká desková hra, která je známá po celém světě pod různými názvy. Tato hra kombinuje strategii s prvkem náhody a je oblíbená zejména mezi dětmi.',
    history: 'Hra byla vytvořena v roce 1910 v Česku na základě staré indické hry Pachisi. Stala se jednou z nejoblíbenějších rodinných her v České republice a rozšířila se do celého světa.',
    rules: [
      'Každý hráč má 4 figurky stejné barvy.',
      'Cílem je dostat všechny figurky ze startovní pozice do domečku.',
      'Pohybujete se podle hodu kostkou.',
      'Když hodíte šestku, můžete vytáhnout novou figurku nebo se posunout o 6 políček.',
      'Pokud skončíte na políčku s cizí figurkou, tato figurka se vrací na start.',
      'První hráč, který dostane všechny figurky do cíle, vyhrává.',
    ],
    strategy: [
      'Snažte se rychle vytáhnout všechny figurky ze startovní pozice.',
      'Blokujte soupeřovy figurky, když je to možné.',
      'Rozmístěte své figurky po herním plánu, abyste měli více možností.',
      'V závěru hry se soustřeďte na jednu nebo dvě figurky blízko cíle.',
    ],
  },
  mariash: {
    title: 'Mariáš',
    image: '/images/game-mariash.jpg',
    year: '19. století',
    players: '3 hráči',
    duration: '45-60 min',
    difficulty: 'Pokročilá',
    category: 'Karetní hry',
    description: 'Mariáš je považován za královnu českých karetních her. Je to sofistikovaná hra vyžadující taktické myšlení, paměť a schopnost odhadnout karty soupeřů.',
    history: 'Mariáš má kořeny v 19. století a vyvinul se z německé hry Sechsundsechzig. V České republice se stal nejpopulárnější karetní hrou pro dospělé a tradičně se hraje v hospodách a rodinných setkáních.',
    rules: [
      'Hra se hraje s 32 kartami (7, 8, 9, 10, spodek, svršek, král, eso).',
      'Každý hráč dostane 10 karet, 2 karty zůstanou jako talon.',
      'Hra probíhá v kolech, kdy jeden hráč hraje a ostatní se brání.',
      'Hráč oznámí hru (sedma, kilo, betl, durcha, atd.) a musí splnit podmínky.',
      'Body se počítají podle hodnot karet a splněných her.',
    ],
    strategy: [
      'Dobře si pamatujte, které karty již byly zahrány.',
      'Odhadněte sílu ruky soupeřů podle jejich licitace.',
      'V obraně koordinujte s partnerem.',
      'Nenechte se unést - nevyhlašujte hry, které nemáte jisté.',
      'Sledujte bodový stav a přizpůsobte strategii.',
    ],
  },
  zaba: {
    title: 'Žába',
    image: '/images/game-zaba.jpg',
    year: 'Tradiční',
    players: '2+ hráčů',
    duration: '15-20 min',
    difficulty: 'Střední',
    category: 'Zručnostní hry',
    description: 'Žába je tradiční česká hospodská hra kombinující zručnost, přesnost a soutěživost. Hra se obvykle hraje v hospodách a je oblíbeným společenským sportem.',
    history: 'Hra Žába má dlouhou tradici v českých hospodách a pivnicích. Její přesný původ není znám, ale hraje se již po desetiletí a je součástí české hospodské kultury.',
    rules: [
      'Hra se hraje na speciálním stole se žábou (kovový terč s otvory).',
      'Každý hráč má několik kotoučů (žetonů), které hází na terč.',
      'Body se získávají podle místa, kam kotouč dopadne.',
      'Nejvíce bodů přináší zásah do úst žáby.',
      'Hra probíhá v několika kolech a vyhrává hráč s nejvyšším součtem.',
    ],
    strategy: [
      'Najděte si správnou polohu a úhel hodu.',
      'Trénujte stejný pohyb pro konzistentní výsledky.',
      'Sledujte, kam dopadají kotouče soupeřů.',
      'V závěru hry riskujte více, pokud jste pozadu.',
      'Udržujte klid a soustředění i při tlaku.',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(gamesData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = gamesData[id]
  
  if (!game) {
    return {
      title: 'Hra nenalezena | Czech Game Blog',
    }
  }

  return {
    title: `${game.title} | Czech Game Blog`,
    description: game.description,
  }
}

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = gamesData[id]

  if (!game) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/hry">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na katalog
            </Link>
          </Button>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">
                {game.category}
              </Badge>
              <Badge variant="outline">
                {game.difficulty}
              </Badge>
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {game.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {game.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-border/40 bg-card/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-xs">Hráči</span>
                </div>
                <div className="mt-2 font-serif text-lg font-semibold text-foreground">
                  {game.players}
                </div>
              </div>
              <div className="rounded-xl border border-border/40 bg-card/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs">Délka</span>
                </div>
                <div className="mt-2 font-serif text-lg font-semibold text-foreground">
                  {game.duration}
                </div>
              </div>
              <div className="rounded-xl border border-border/40 bg-card/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">Období</span>
                </div>
                <div className="mt-2 font-serif text-lg font-semibold text-foreground">
                  {game.year}
                </div>
              </div>
              <div className="rounded-xl border border-border/40 bg-card/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-xs">Náročnost</span>
                </div>
                <div className="mt-2 font-serif text-lg font-semibold text-foreground">
                  {game.difficulty}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {/* History */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Historie
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                {game.history}
              </p>
            </div>

            {/* Rules */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Pravidla
              </h2>
              <ul className="mt-6 space-y-4">
                {game.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <p className="flex-1 pt-1 text-pretty leading-relaxed text-muted-foreground">
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Strategie a Tipy
              </h2>
              <div className="mt-6 grid gap-4">
                {game.strategy.map((tip: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/40 bg-card p-6"
                  >
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Chcete objevit více her?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Prozkoumejte náš kompletní katalog tradičních českých her.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/hry">
                Prohlédnout katalog
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
