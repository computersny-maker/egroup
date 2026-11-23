import Image from 'next/image'
import { Heart, Users, HandHeart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { contact } from '@/lib/site-data'

const values = [
  {
    icon: Heart,
    title: 'Compromiso con la comunidad',
    text: 'Educación al servicio de las familias hispanas.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    text: 'Grupos pequeños y acompañamiento cercano.',
  },
  {
    icon: HandHeart,
    title: 'Instructores con paciencia',
    text: 'Enseñanza con conocimiento y dedicación.',
  },
]

export function About() {
  const years = new Date().getFullYear() - contact.foundedYear

  return (
    <section id="nosotros" className="scroll-mt-20 bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(18,59,102,0.4)]">
            <Image
              src="/images/about-community.png"
              alt="Instructor hispano ayudando a estudiantes adultos durante una clase"
              width={680}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl sm:-right-6">
            <p className="font-display text-3xl font-extrabold text-primary">
              +{years} años
            </p>
            <p className="text-sm text-muted-foreground">sirviendo a la comunidad</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
              Sobre nosotros
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Educación cercana, humana y en tu idioma
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              E-Group Tech Services, Inc. nació en {contact.foundedYear} con la
              misión de acompañar a la comunidad hispana en su camino educativo.
              Creemos que nunca es tarde para continuar aprendiendo y alcanzar
              nuevas metas.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 100}
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
