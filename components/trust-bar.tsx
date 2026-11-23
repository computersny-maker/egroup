import { CalendarClock, Monitor, Users, Languages } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  { icon: CalendarClock, label: 'Desde 2008' },
  { icon: Monitor, label: 'Clases Virtuales' },
  { icon: Users, label: 'Hasta 12 estudiantes' },
  { icon: Languages, label: 'Atención en Español' },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 80}
            className="flex items-center justify-center gap-3 py-6 text-center"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-foreground sm:text-base">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
