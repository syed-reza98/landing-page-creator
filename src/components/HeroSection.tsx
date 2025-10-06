import React from "react"
import { Button } from "@/components/ui/button"
import { Sparkle } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 purple-gradient opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert to <br />
              Digitalise Your <br />
              <span className="text-primary">Growth</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are constantly growing or learning and improving. Enter your the 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
              <Sparkle size={20} className="mr-2" />
              Explore Now
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-6" />
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted/70 rounded w-full" />
                  <div className="h-3 bg-muted/70 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8">
        <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16">
          <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-xs">▶</span>
          </div>
        </Button>
      </div>
    </section>
  )
}