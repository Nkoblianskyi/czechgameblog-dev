'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


export default function AboutPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormState({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setSubmitStatus('idle')
    }, 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              O Czech Game Blog
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Jsme nadšenci deskových her, kteří chtějí sdílet krásu a historii tradičních českých her s celým světem.
            </p>
          </div>
        </div>
      </section>

      {/* Mission - Immersive Split Design */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-background via-card/30 to-background py-20 lg:py-32">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header with gradient underline */}
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Naše Mise
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
            </div>
            <p className="mt-8 text-pretty text-center text-xl leading-relaxed text-muted-foreground">
              Věříme, že deskové hry jsou víc než jen zábava. Spojují generace, učí strategickému myšlení a vytvářejí nezapomenutelné vzpomínky. Naším cílem je zachovat českou herní tradici a inspirovat nové generace hráčů.
            </p>
          </div>

          {/* Values Grid - Asymmetric with Numbers */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-6xl font-bold text-primary/20">01</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Láska k Hrám
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Každá hra má svůj příběh a my chceme tyto příběhy sdílet s vámi.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition-all duration-300 hover:border-secondary/50 hover:shadow-xl lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-secondary/10 blur-2xl transition-all group-hover:bg-secondary/20" />
              <div className="relative">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-6xl font-bold text-secondary/20">02</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Vzdělávání
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Poskytujeme podrobné průvodce, pravidla a strategie pro každou hru.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-xl lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition-all group-hover:bg-accent/20" />
              <div className="relative">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-6xl font-bold text-accent/20">03</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Komunita
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Spojujeme hráče napříč generacemi a kulturami.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-serif text-6xl font-bold text-primary/20">04</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Otevřenost
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Vítáme zpětnou vazbu a nové nápady od naší komunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border/40 bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-1 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Náš Příběh
              </h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Czech Game Blog vznikl z lásky k tradičním českým hrám a touhy sdílet jejich krásu s celým světem. Založili jsme ho s vizí vytvořit nejkompletnější zdroj informací o českých deskových hrách.
                </p>
                <p>
                  Každá hra v naší kultuře vypráví příběh. Od Mariáše hraného v hospodách až po Člověče, nezlob se! na rodinných večerech - tyto hry jsou součástí naší identity.
                </p>
                <p>
                  Náš tým tvoří nadšenci, historici a zkušení hráči, kteří věnují svůj čas výzkumu, dokumentaci a sdílení znalostí o těchto úžasných hrách.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Kontaktujte Nás
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Máte otázku, nápad nebo zpětnou vazbu? Rádi od vás uslyšíme! Vyplňte formulář níže a ozveme se vám co nejdříve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12">
              <div className="space-y-6">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Jméno</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Vaše jméno"
                      required
                      className="mt-2"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="vas@email.cz"
                      required
                      className="mt-2"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="message">Zpráva</FieldLabel>
                    <Textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Napište nám vaši zprávu..."
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </Field>
                </FieldGroup>

                {submitStatus === 'success' && (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
                    Děkujeme za vaši zprávu! Ozveme se vám co nejdříve.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                    Něco se pokazilo. Zkuste to prosím znovu.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Odesílání...' : 'Odeslat Zprávu'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="border-t border-border/40 bg-card py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              K.C. NTOMATA LIMITED
            </h3>
            <p className="mt-3 text-balance text-sm leading-relaxed text-muted-foreground">
              Stylianou Lena, 24 Christiana Court, Flat/Office 202
              <br />
              Strovolos, 2019 Nicosia, Cyprus
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
