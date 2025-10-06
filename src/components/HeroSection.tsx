import React from "react"
import { Button } from "@/components/ui/button"
import { Sparkle } from "@phosphor-icons/react"
import Lottie from "lottie-react"
import logoAnimation from "../../Materiel/Lottie Files/Logo.json"
import textAnimation from "../../Materiel/Lottie Files/Text.json"
import botAnimation from "../../Materiel/Lottie Files/Bot.json"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden hero-background">
      {/* Animated background logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <Lottie animationData={logoAnimation} loop={true} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Expert to<br />
              Digitalise Your<br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Growth</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed">
              We are constantly growing or learning and improving. Enter your the 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/50">
              <Sparkle size={24} className="mr-3" />
              Explore Now
            </Button>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="w-full h-[500px]">
              <Lottie animationData={textAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating help button with Bot animation */}
      <div className="fixed bottom-10 right-10 z-50">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_20px_60px_rgba(139,92,246,0.5)] transition-all cursor-pointer">
          <div className="w-14 h-14">
            <Lottie animationData={botAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  )
}