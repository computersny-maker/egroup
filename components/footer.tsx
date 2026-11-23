import { GraduationCap, Phone } from 'lucide-react'
import { contact, navLinks } from '@/lib/site-data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-tight">
                  E-GROUP
                </span>
                <span className="text-[10px] font-semibold tracking-[0.18em] text-background/60">
                  TECH SERVICES, INC.
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-background/70">
              Clases de preparación para el GED en español, al servicio de la
              comunidad hispana desde {contact.foundedYear}.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Navegación
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-background/60">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-2 text-background/80 transition-colors hover:text-secondary"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-sm text-background/60">
          <p>
            &copy; {year} E-Group Tech Services, Inc. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
