import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ochrana Soukromí | Czech Game Blog',
  description: 'Zásady ochrany osobních údajů pro Czech Game Blog',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-b from-card to-background">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Zásady Ochrany Osobních Údajů
          </h1>
          <p className="mt-4 text-muted-foreground">
            Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  1. Úvod
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Czech Game Blog (dále jen "my", "nás" nebo "naše") provozuje webovou stránku czechgameblog.com (dále jen "Služba"). 
                  Tato stránka vás informuje o našich zásadách týkajících se shromažďování, používání a zveřejňování osobních údajů 
                  při používání naší Služby a možnostech, které jste si s těmito údaji spojili.
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Vaše údaje používáme k poskytování a zlepšování Služby. Používáním Služby souhlasíte se shromažďováním a používáním 
                  informací v souladu s těmito zásadami.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  2. Správce Osobních Údajů
                </h2>
                <div className="mt-4 rounded-lg border border-border/40 bg-card p-6">
                  <p className="font-semibold text-foreground">K.C. NTOMATA LIMITED</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stylianou Lena, 24 Christiana Court, Flat/Office 202
                    <br />
                    Strovolos, 2019 Nicosia, Cyprus
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  3. Shromažďované Informace
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Shromažďujeme několik různých typů informací pro různé účely, abychom vám mohli poskytnout a zlepšit naši Službu.
                </p>
                
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  3.1 Osobní údaje
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Při používání naší Služby vás můžeme požádat o poskytnutí určitých osobně identifikovatelných informací, 
                  které lze použít k vašemu kontaktování nebo identifikaci ("Osobní údaje"). Osobně identifikovatelné informace mohou zahrnovat:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Emailová adresa</li>
                  <li>Jméno a příjmení</li>
                  <li>Cookies a údaje o používání</li>
                </ul>

                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  3.2 Údaje o používání
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Můžeme také shromažďovat informace o tom, jak je Služba přístupná a používána ("Údaje o používání"). 
                  Tyto údaje o používání mohou zahrnovat informace, jako je internetová protokolová adresa vašeho počítače (např. IP adresa), 
                  typ prohlížeče, verze prohlížeče, stránky naší Služby, které navštívíte, čas a datum vaší návštěvy, 
                  čas strávený na těchto stránkách a další diagnostická data.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  4. Použití Údajů
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Czech Game Blog používá shromážděné údaje pro různé účely:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Poskytování a udržování naší Služby</li>
                  <li>Upozorňování na změny naší Služby</li>
                  <li>Umožnění účasti na interaktivních funkcích naší Služby, pokud se rozhodnete tak učinit</li>
                  <li>Poskytování zákaznické podpory</li>
                  <li>Shromažďování analýz nebo cenných informací, abychom mohli zlepšit naši Službu</li>
                  <li>Sledování používání naší Služby</li>
                  <li>Detekce, prevence a řešení technických problémů</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  5. Předávání Údajů
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Vaše informace, včetně osobních údajů, mohou být přeneseny na počítače umístěné mimo vaši jurisdikci, 
                  kde se zákony o ochraně údajů mohou lišit od zákonů vaší jurisdikce.
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Czech Game Blog podnikne všechny kroky přiměřeně nutné k zajištění, že vaše údaje budou zpracovány bezpečně 
                  a v souladu s těmito Zásadami ochrany osobních údajů a žádný přenos vašich osobních údajů nebude probíhat 
                  do organizace nebo země, pokud nebudou zavedeny odpovídající kontroly včetně bezpečnosti vašich údajů a dalších osobních informací.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  6. Bezpečnost Údajů
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Bezpečnost vašich údajů je pro nás důležitá, ale pamatujte, že žádná metoda přenosu přes internet 
                  nebo metoda elektronického ukládání není 100% bezpečná. I když se snažíme používat komerčně přijatelné 
                  prostředky k ochraně vašich osobních údajů, nemůžeme garantovat jejich absolutní bezpečnost.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  7. Vaše Práva
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Máte právo:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Získat přístup k vašim osobním údajům, které uchováváme</li>
                  <li>Opravit nepřesné nebo neúplné osobní údaje</li>
                  <li>Požádat o vymazání vašich osobních údajů</li>
                  <li>Omezit zpracování vašich osobních údajů</li>
                  <li>Přenést vaše osobní údaje</li>
                  <li>Odvolat souhlas se zpracováním</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  8. Cookies
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Používáme cookies a podobné sledovací technologie ke sledování činnosti na naší Službě a ukládání určitých informací. 
                  Více informací najdete v naší <a href="/cookie-policy" className="text-primary underline-offset-4 hover:underline">Cookie Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  9. Změny Těchto Zásad
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Můžeme naše Zásady ochrany osobních údajů čas od času aktualizovat. O jakýchkoli změnách vás budeme informovat 
                  zveřejněním nových Zásad ochrany osobních údajů na této stránce.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  10. Kontaktujte Nás
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Máte-li jakékoli dotazy ohledně těchto Zásad ochrany osobních údajů, kontaktujte nás prosím prostřednictvím 
                  <a href="/o-nas" className="ml-1 text-primary underline-offset-4 hover:underline">kontaktního formuláře</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
