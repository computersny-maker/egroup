import { CalendarDays, Clock, Monitor, ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { upcomingClasses } from '@/lib/site-data'

export function ClassSchedule() {
  return (
    <section id="cursos" className="scroll-mt-20 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Próximas clases
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Encuentra el horario que mejor se adapte a ti.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {upcomingClasses.map((cls, i) => (
            <Reveal
              key={cls.id}
              delay={i * 110}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur transition-colors hover:bg-white/[0.1]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-balance font-display text-xl font-bold">
                  {cls.subject}
                </h3>
                <span className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary-foreground ring-1 ring-inset ring-secondary/40">
                  {cls.status}
                </span>
              </div>

              <dl className="mt-6 space-y-3 text-primary-foreground/85">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <dt className="sr-only">Días</dt>
                  <dd>{cls.days}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <dt className="sr-only">Horario</dt>
                  <dd>{cls.time}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <dt className="sr-only">Modalidad</dt>
                  <dd>{cls.modality}</dd>
                </div>
              </dl>

              <Button
                asChild
                className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#contacto">
                  Solicitar información
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm text-primary-foreground/70">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <p>
            Los horarios y cursos disponibles pueden cambiar. Comunícate con
            nosotros para confirmar la programación actual.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
