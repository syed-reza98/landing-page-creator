import React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, CaretDown } from "@phosphor-icons/react"
import Lottie from "lottie-react"
import logoAnimation from "../../Materiel/Lottie Files/Logo.json"

export function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            {/* Logo with Lottie Animation */}
            <div className="flex items-center">
              <div className="w-14 h-14 flex items-center justify-center">
                <Lottie animationData={logoAnimation} loop={true} style={{ width: 56, height: 56 }} />
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              <Button variant="ghost" className="text-foreground hover:text-primary bg-primary/10 rounded-full px-6 py-2 font-medium">
                Home
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4 font-medium">
                About us
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex items-center gap-2 px-4 font-medium">
                <span>Services</span>
                <CaretDown size={14} />
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4 font-medium">
                White label
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4 font-medium">
                Contact us
              </Button>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center gap-5">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative rounded-full w-12 h-12">
              <ShoppingCart size={22} />
            </Button>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
              <User size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}