import React from "react"
import { AnnouncementBar } from "@/components/AnnouncementBar"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"

function App() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <AnnouncementBar />
        <Header />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
