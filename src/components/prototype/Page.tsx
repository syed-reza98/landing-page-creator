import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { LogoCloud } from './LogoCloud'
import { Features } from './Features'
import { Process } from './Process'
import { Templates } from './Templates'
import { Testimonials } from './Testimonials'
import { Pricing } from './Pricing'
import { CTA } from './CTA'
import { Footer } from './Footer'

export function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Process />
      <Templates />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
