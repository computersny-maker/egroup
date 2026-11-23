'use client'

import { useState } from 'react'
import { Phone, CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from '@/components/reveal'
import { contact, gedSubjects } from '@/lib/site-data'

export function Registration() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demostración: en producción, conecta este formulario a tu backend o CRM.
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Info side */}
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            Regístrate
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Solicita información sin compromiso
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Completa el formulario y nuestro equipo se comunicará contigo para
            guiarte en los próximos pasos. También puedes llamarnos directamente.
          </p>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Llámanos
            </p>
            <ul className="mt-4 space-y-3">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-accent"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="size-5 text-accent" aria-hidden="true" />
                    </span>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Form side */}
        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 text-foreground shadow-2xl sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <CheckCircle2 className="size-9" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                  ¡Gracias por registrarte!
                </h3>
                <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                  Hemos recibido tu solicitud. Nuestro equipo se comunicará
                  contigo muy pronto.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                data-lpignore="true"
                data-form-type="other"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input id="nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" data-lpignore="true" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" name="telefono" type="tel" required autoComplete="tel" placeholder="(000) 000-0000" data-lpignore="true" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="tucorreo@ejemplo.com" data-lpignore="true" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="materia">Materia de interés</Label>
                  <Select name="materia">
                    <SelectTrigger id="materia" className="w-full">
                      <SelectValue placeholder="Selecciona una materia" />
                    </SelectTrigger>
                    <SelectContent>
                      {gedSubjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="todas">Todas las materias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntanos cómo podemos ayudarte"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Enviar solicitud
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Al enviar aceptas que E-Group se comunique contigo sobre sus
                  clases.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
