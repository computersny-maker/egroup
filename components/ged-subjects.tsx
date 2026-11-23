import { ArrowRight, Calculator, BookOpen, FlaskConical, Landmark } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { gedSubjects } from '@/lib/site-data'

const icons: Record<string, React.ElementType> = {
  matematicas: Calculator,
  'artes-lenguaje': BookOpen,
  ciencias: FlaskConical,
  'estudios-sociales': Landmark,
}

export function GedSubjects() {
  return (
    <section id="ged" className="scroll-mt-20 bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
            Programa GED
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Prepárate para el GED en español
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            E-Group ofrece clases virtuales utilizando Zoom, con cursos
            personalizados y grupos de hasta doce estudiantes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {gedSubjects.map((subject, i) => {
            const Icon = icons[subject.id] ?? BookOpen
            return (
              <Reveal
                key={subject.id}
                delay={i * 90}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_20px_40px_-24px_rgba(18,59,102,0.4)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-balance font-display text-xl font-bold text-foreground">
                  {subject.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {subject.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                >
                  Más información
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
