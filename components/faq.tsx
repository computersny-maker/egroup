'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { faqs } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} className="px-2">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className="text-pretty font-display text-base font-bold text-foreground sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45 bg-secondary text-secondary-foreground',
                      )}
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  className={cn(
                    'grid overflow-hidden transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
