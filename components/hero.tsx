import Image from 'next/image'
import { ArrowRight, Sparkles, Users, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-primary/[0.06] via-background to-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 hidden size-96 rounded-full bg-secondary/10 blur-3xl lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            <Sparkles className="size-4" aria-hidden="true" />
            Educación para nuestra comunidad desde 2008
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Tu GED. Tu oportunidad.{' '}
            <span className="text-secondary">Tu futuro.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Prepárate para alcanzar tu diploma de equivalencia de secundaria con
            clases GED en español, grupos pequeños y apoyo personalizado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contacto">
                Regístrate Ahora
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary/20 px-7 text-base font-semibold text-primary hover:bg-primary/5"
            >
              <a href="#ged">Conoce el programa</a>
            </Button>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            Clases virtuales <span className="text-secondary">•</span> Atención en
            español <span className="text-secondary">•</span> Grupos pequeños
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_60px_-25px_rgba(18,59,102,0.45)]">
            <Image
              src="/images/hero-students.png"
              alt="Estudiantes adultos hispanos estudiando juntos con laptops en un aula moderna"
              width={720}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating card - top left */}
          <div className="absolute -left-3 top-6 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Wifi className="size-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">Clases en español</p>
              <p className="text-xs text-muted-foreground">100% online</p>
            </div>
          </div>

          {/* Floating card - bottom right */}
          <div className="absolute -right-3 bottom-6 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">Grupos pequeños</p>
              <p className="text-xs text-muted-foreground">Hasta 12 estudiantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
