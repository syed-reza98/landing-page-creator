import React from "react"
import { TopBar } from "@/components/TopBar"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { BrandLogos } from "@/components/BrandLogos"
import { DiscountBanner } from "@/components/DiscountBanner"
import { ServicesSection } from "@/components/ServicesSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { ProcessSection } from "@/components/ProcessSection"
import { StatsSection } from "@/components/StatsSection"
import { WhyChooseSection } from "@/components/WhyChooseSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { BlogSection } from "@/components/BlogSection"
import { PodcastSection } from "@/components/PodcastSection"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <DiscountBanner />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <StatsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BlogSection />
      <PodcastSection />
      <Footer />
    </div>
  )
}

export default App

