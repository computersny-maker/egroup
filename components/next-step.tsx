import { ArrowRight, Briefcase, Target, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Briefcase,
    title: 'Nuevas oportunidades',
    text: 'Prepárate para avanzar hacia nuevas oportunidades laborales y educativas.',
  },
  {
    icon: Target,
    title: 'Una meta personal',
    text: 'Completar tus estudios puede ser una de las decisiones más importantes para tu futuro.',
  },
  {
    icon: Clock,
    title: 'A tu ritmo',
    text: 'Estudia desde donde estés con clases virtuales y el apoyo de nuestros instructores.',
  },
]

export function NextStep() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Quizás dejaste la escuela. Pero tu historia no termina ahí.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Obtener tu GED puede ser el siguiente paso para alcanzar nuevas metas
            educativas, profesionales y personales.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 100}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(18,59,102,0.4)]"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <card.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {card.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contacto">
              Quiero comenzar
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
