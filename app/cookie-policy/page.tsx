import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Czech Game Blog',
  description: 'Informace o používání cookies na Czech Game Blog',
}

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/40 bg-gradient-to-b from-card to-background">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Cookie Policy
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
                  1. Co jsou Cookies?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Cookies jsou malé textové soubory, které jsou ukládány ve vašem zařízení (počítač, tablet, smartphone) 
                  při návštěvě webových stránek. Cookies jsou široce používány k tomu, aby webové stránky fungovaly 
                  efektivněji a poskytovaly informace vlastníkům webu.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  2. Jak používáme Cookies
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Czech Game Blog používá cookies z následujících důvodů:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Zajištění správného fungování webových stránek</li>
                  <li>Zlepšení uživatelského zážitku</li>
                  <li>Analytické účely - porozumění tomu, jak návštěvníci používají naše stránky</li>
                  <li>Zapamatování vašich preferencí a nastavení</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  3. Typy Cookies, které používáme
                </h2>

                <div className="mt-6 space-y-6">
                  <div className="rounded-lg border border-border/40 bg-card p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      3.1 Nezbytné Cookies
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      Tyto cookies jsou nezbytné pro správné fungování webových stránek. Bez těchto cookies 
                      nebudou některé části webu fungovat správně.
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="border-b border-border/40">
                          <tr>
                            <th className="py-2 pr-4 text-left font-semibold text-foreground">Název</th>
                            <th className="py-2 pr-4 text-left font-semibold text-foreground">Účel</th>
                            <th className="py-2 text-left font-semibold text-foreground">Platnost</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/20">
                            <td className="py-3 pr-4">cookie-consent</td>
                            <td className="py-3 pr-4">Ukládá vaše rozhodnutí ohledně cookies</td>
                            <td className="py-3">1 rok</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/40 bg-card p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      3.2 Analytické Cookies
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      Tyto cookies nám pomáhají pochopit, jak návštěvníci používají naše webové stránky, 
                      což nám umožňuje zlepšovat náš obsah a funkce.
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="border-b border-border/40">
                          <tr>
                            <th className="py-2 pr-4 text-left font-semibold text-foreground">Poskytovatel</th>
                            <th className="py-2 pr-4 text-left font-semibold text-foreground">Účel</th>
                            <th className="py-2 text-left font-semibold text-foreground">Platnost</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/20">
                            <td className="py-3 pr-4">Vercel Analytics</td>
                            <td className="py-3 pr-4">Sledování návštěvnosti a chování uživatelů</td>
                            <td className="py-3">Relace</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/40 bg-card p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      3.3 Funkční Cookies
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      Tyto cookies umožňují webovým stránkám zapamatovat si vaše volby (jako je vaše uživatelské jméno, 
                      jazyk nebo region) a poskytovat vylepšené, více personalizované funkce.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  4. Cookies Třetích Stran
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  V některých případech používáme cookies poskytované důvěryhodnými třetími stranami. Následující sekce 
                  podrobně popisuje, které cookies třetích stran můžete na tomto webu narazit.
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>
                    <strong className="font-semibold text-foreground">Vercel Analytics:</strong> Používáme pro sledování 
                    návštěvnosti a pochopení toho, jak návštěvníci používají naše stránky
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  5. Správa Cookies
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Můžete ovládat a/nebo smazat cookies podle svého uvážení. Můžete smazat všechny cookies, 
                  které jsou již ve vašem počítači, a většinu prohlížečů můžete nastavit tak, aby zabránily jejich ukládání.
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Pokud tak učiníte, budete muset ručně upravit některé předvolby při každé návštěvě webu 
                  a některé služby a funkce nemusí fungovat.
                </p>

                <div className="mt-6 space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Správa cookies v nejběžnějších prohlížečích:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong className="font-semibold text-foreground">Google Chrome:</strong> Nastavení → Soukromí a zabezpečení → Soubory cookie a další data webu
                    </li>
                    <li>
                      <strong className="font-semibold text-foreground">Mozilla Firefox:</strong> Možnosti → Soukromí a zabezpečení → Cookies a data stránek
                    </li>
                    <li>
                      <strong className="font-semibold text-foreground">Safari:</strong> Předvolby → Soukromí → Správa dat webových stránek
                    </li>
                    <li>
                      <strong className="font-semibold text-foreground">Microsoft Edge:</strong> Nastavení → Soukromí, vyhledávání a služby → Soubory cookie a data webu
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  6. Vaše Práva
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Máte právo:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Být informováni o používání cookies</li>
                  <li>Odmítnout nebo přijmout cookies</li>
                  <li>Změnit své nastavení cookies kdykoli</li>
                  <li>Smazat cookies uložené ve vašem zařízení</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  7. Změny této Cookie Policy
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Můžeme tuto Cookie Policy čas od času aktualizovat, abychom odráželi změny v našich postupech 
                  nebo z jiných provozních, právních nebo regulačních důvodů. Doporučujeme pravidelně kontrolovat 
                  tuto stránku, abyste byli informováni o tom, jak používáme cookies.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  8. Další Informace
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Pro více informací o tom, jak zpracováváme vaše osobní údaje, prosím přečtěte si naše{' '}
                  <a href="/privacy-policy" className="text-primary underline-offset-4 hover:underline">
                    Zásady ochrany osobních údajů
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  9. Kontaktujte Nás
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Máte-li jakékoli dotazy ohledně používání cookies na našich webových stránkách, kontaktujte nás 
                  prostřednictvím <a href="/o-nas" className="text-primary underline-offset-4 hover:underline">kontaktního formuláře</a>.
                </p>
                <div className="mt-6 rounded-lg border border-border/40 bg-card p-6">
                  <p className="font-semibold text-foreground">K.C. NTOMATA LIMITED</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Stylianou Lena, 24 Christiana Court, Flat/Office 202
                    <br />
                    Strovolos, 2019 Nicosia, Cyprus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
