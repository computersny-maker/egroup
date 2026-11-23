import { HeartPulse, Laptop, Languages } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: HeartPulse,
    title: 'Certificación CPR',
    text: 'Capacitación en primeros auxilios y reanimación cardiopulmonar.',
  },
  {
    icon: Laptop,
    title: 'Alfabetización digital',
    text: 'Cursos básicos de tecnología y computación para la vida diaria.',
  },
  {
    icon: Languages,
    title: 'Apoyo en español',
    text: 'Acompañamiento en tu idioma en cada uno de nuestros programas.',
  },
]

export function OtherServices() {
  return (
    <section className="bg-muted/50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Más que clases de GED
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            E-Group ofrece programas adicionales para el desarrollo de nuestra
            comunidad.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
