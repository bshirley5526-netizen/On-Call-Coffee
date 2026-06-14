'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import WhatToExpect from '@/components/WhatToExpect'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Pricing />
      <WhatToExpect />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  )
}
