'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Process from '@/components/Process'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Nav />
      <Hero />
      <Products />
      <Process />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
