import { FileText, ListChecks, BookOpenCheck, PencilRuler, Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { progressSteps } from '@/lib/site-data'

const stepIcons = [FileText, ListChecks, BookOpenCheck, PencilRuler, Trophy]

export function ProgressSteps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Un camino claro hacia tu meta
          </h2>
        </Reveal>

        <div className="mt-16">
          {/* connecting line - desktop */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-accent/50 lg:block"
            />
            <ol className="grid gap-10 lg:grid-cols-5 lg:gap-4">
              {progressSteps.map((step, i) => {
                const Icon = stepIcons[i] ?? FileText
                return (
                  <Reveal
                    as="li"
                    key={step.number}
                    delay={i * 110}
                    className="relative flex items-center gap-5 lg:flex-col lg:text-center"
                  >
                    {/* vertical connector on mobile */}
                    {i < progressSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-7 top-14 h-[calc(100%-1rem)] w-0.5 bg-border lg:hidden"
                      />
                    )}
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-4">
                      <span className="font-display text-sm font-bold text-secondary">
                        Paso {step.number}
                      </span>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {step.title}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
