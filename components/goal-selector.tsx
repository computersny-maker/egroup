'use client'

import { useState } from 'react'
import { GraduationCap, TrendingUp, BookMarked, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const goals = [
  { id: 'ged', label: 'Obtener mi GED', icon: GraduationCap },
  { id: 'oportunidades', label: 'Mejorar mis oportunidades', icon: TrendingUp },
  { id: 'estudios', label: 'Continuar mis estudios', icon: BookMarked },
]

export function GoalSelector() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-border bg-card p-8 text-center shadow-[0_20px_50px_-30px_rgba(18,59,102,0.4)] sm:p-12">
          <h2 className="text-balance font-display text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            ¿Qué quieres lograr?
          </h2>

          <div
            role="group"
            aria-label="Selecciona tu meta"
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {goals.map((goal) => {
              const active = selected === goal.id
              return (
                <button
                  key={goal.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(goal.id)}
                  className={cn(
                    'flex flex-col items-center gap-3 rounded-2xl border-2 p-6 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    active
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border bg-background hover:border-secondary/40 hover:bg-muted',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center rounded-xl transition-colors',
                      active
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary/5 text-primary',
                    )}
                  >
                    <goal.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {goal.label}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            aria-live="polite"
            className={cn(
              'overflow-hidden transition-all duration-500',
              selected ? 'mt-8 max-h-60 opacity-100' : 'mt-0 max-h-0 opacity-0',
            )}
          >
            <p className="text-pretty text-lg text-muted-foreground">
              El primer paso es solicitar información sobre nuestras clases.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 h-12 bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contacto">
                <MessageCircle className="size-4" aria-hidden="true" />
                Hablar con E-Group
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
