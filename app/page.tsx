import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { NextStep } from '@/components/next-step'
import { GedSubjects } from '@/components/ged-subjects'
import { ProgressSteps } from '@/components/progress-steps'
import { ClassSchedule } from '@/components/class-schedule'
import { GoalSelector } from '@/components/goal-selector'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { OtherServices } from '@/components/other-services'
import { Faq } from '@/components/faq'
import { Registration } from '@/components/registration'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <NextStep />
        <GedSubjects />
        <ProgressSteps />
        <ClassSchedule />
        <GoalSelector />
        <About />
        <Testimonials />
        <OtherServices />
        <Faq />
        <Registration />
      </main>
      <Footer />
    </>
  )
}
