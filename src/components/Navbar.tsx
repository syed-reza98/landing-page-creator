import React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "@phosphor-icons/react"

export function Navbar() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-bold text-primary">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span>Metro</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Home
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                About us
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex items-center space-x-1">
                <span>Services</span>
                <span className="text-xs">▼</span>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                White label
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Contact us
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <ShoppingCart size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}