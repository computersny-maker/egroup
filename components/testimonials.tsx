import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
            Testimonios
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Historias de nuestra comunidad
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 90}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(18,59,102,0.4)]"
            >
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.borough}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
