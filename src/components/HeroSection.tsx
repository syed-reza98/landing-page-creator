import React from "react"
import { Button } from "@/components/ui/button"
import { Sparkle } from "@phosphor-icons/react"
import Lottie from "lottie-react"
import logoAnimation from "../../Materiel/Lottie Files/Logo.json"
import textAnimation from "../../Materiel/Lottie Files/Text.json"
import botAnimation from "../../Materiel/Lottie Files/Bot.json"

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden hero-background">
      {/* Animated background logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <Lottie animationData={logoAnimation} loop={true} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert to<br />
              Digitalise Your<br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Growth</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We are constantly growing or learning and improving. Enter your the 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/50">
              <Sparkle size={20} className="mr-2" />
              Explore Now
            </Button>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="w-full h-96">
              <Lottie animationData={textAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating help button with Bot animation */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all cursor-pointer">
          <div className="w-12 h-12">
            <Lottie animationData={botAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  )
}