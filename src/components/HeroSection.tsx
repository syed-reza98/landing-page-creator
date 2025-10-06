import React from "react"
import { Button } from "@/components/ui/button"
import { Sparkle, DiscordLogo } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <main className="relative px-8 py-20 flex items-center min-h-[80vh] overflow-hidden">
      {/* Background number - positioned like in prototype */}
      <div className="hero-number">
        73
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-10 relative z-10">
        <div className="space-y-6">
          <h1 className="text-7xl font-black leading-[0.9] tracking-tight">
            <span className="text-foreground">Expert to</span>
            <br />
            <span className="text-foreground">Digitalise Your</span>
            <br />
            <span className="gradient-text">Growth</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-xl leading-relaxed font-medium">
            We are constantly growing or learning and improving. Enter your the 
            personal real estate sanctf uary, where finding the ideal home is
          </p>
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-foreground font-bold px-10 py-7 rounded-full flex items-center gap-3 text-xl transition-all duration-300 hover:scale-105 hover-glow shadow-2xl"
        >
          <Sparkle size={24} weight="fill" />
          Explore Now
        </Button>
      </div>

      {/* Floating chat widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          size="icon" 
          className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover-glow"
        >
          <DiscordLogo size={32} weight="fill" className="text-foreground" />
        </Button>
      </div>
    </main>
  )
}