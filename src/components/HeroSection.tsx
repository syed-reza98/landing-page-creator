import { Button } from "@/components/ui/button"
import { Sparkle, DiscordLogo } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <main className="relative px-8 py-16 flex items-center min-h-[70vh]">
      {/* Background number */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <div className="number-outline rounded-3xl p-8">
          <span className="text-[300px] font-bold text-transparent bg-gradient-to-b from-primary/30 to-primary/10 bg-clip-text leading-none">
            73
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-foreground">Expert to</span>
            <br />
            <span className="text-foreground">Digitalise Your</span>
            <br />
            <span className="gradient-text">Growth</span>
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
            We are constantly growing or learning and improving. Enter your the 
            personal real estate sanctf uary, where finding the ideal home is
          </p>
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-foreground font-semibold px-8 py-6 rounded-full flex items-center gap-2 text-lg transition-all duration-300 hover:scale-105"
        >
          <Sparkle size={20} weight="fill" />
          Explore Now
        </Button>
      </div>

      {/* Floating chat widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          size="icon" 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <DiscordLogo size={28} weight="fill" className="text-foreground" />
        </Button>
      </div>
    </main>
  )
}