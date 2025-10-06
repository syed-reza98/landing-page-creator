import React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, CaretDown } from "@phosphor-icons/react"

export function Navbar() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="text-2xl font-bold text-primary">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="currentColor"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Metro Solver</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" className="text-foreground hover:text-primary bg-secondary/50 rounded-full px-6">
                Home
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                About us
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex items-center space-x-1">
                <span>Services</span>
                <CaretDown size={12} />
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                White label
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Contact us
              </Button>
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
              <ShoppingCart size={20} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground">0</span>
              </div>
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}