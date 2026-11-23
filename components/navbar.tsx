'use client'

import { useEffect, useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 shadow-[0_1px_20px_-8px_rgba(15,23,42,0.25)] backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8',
          scrolled ? 'h-16' : 'h-20',
        )}
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="E-Group Tech Services, inicio">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary">
              E-GROUP
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
              TECH SERVICES, INC.
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contacto">Regístrate</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden border-b border-border bg-background transition-[max-height] duration-300',
          open ? 'max-h-[28rem]' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contacto" onClick={() => setOpen(false)}>
                Regístrate
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
