import React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, CaretDown } from "@phosphor-icons/react"
import Lottie from "lottie-react"
import logoAnimation from "../../Materiel/Lottie Files/Logo.json"

export function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo with Lottie Animation */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <Lottie animationData={logoAnimation} loop={true} style={{ width: 48, height: 48 }} />
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" className="text-foreground hover:text-primary bg-primary/10 rounded-full px-6 py-2">
                Home
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4">
                About us
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex items-center space-x-1 px-4">
                <span>Services</span>
                <CaretDown size={12} />
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4">
                White label
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary px-4">
                Contact us
              </Button>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative rounded-full w-10 h-10">
              <ShoppingCart size={20} />
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
              <User size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}