import React from "react"
import { Button } from "@/components/ui/button"
import { Sparkle, ChatCircle } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden hero-background">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 border-2 border-primary/30 rounded-2xl transform rotate-45" />
        <div className="absolute top-40 right-32 w-60 h-60 border-2 border-primary/20 rounded-3xl transform rotate-12" />
        <div className="absolute top-60 right-20 w-80 h-80 border-2 border-primary/10 rounded-3xl transform -rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert to <br />
              Digitalise Your <br />
              <span className="text-primary">Growth</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              We are constantly growing or learning and improving. Enter your the 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base rounded-full">
              <Sparkle size={20} className="mr-2" />
              Explore Now
            </Button>
          </div>
          
          <div className="relative lg:block hidden">
            {/* This space matches the geometric elements in the background */}
          </div>
        </div>
      </div>
      
      {/* Floating help button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-14 h-14 shadow-lg">
          <ChatCircle size={24} />
        </Button>
      </div>
    </section>
  )
}