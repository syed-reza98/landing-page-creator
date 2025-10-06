import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ShoppingCart, CaretDown } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 relative z-20">
      <div className="flex items-center gap-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-lg">
              <div className="text-white font-black text-2xl transform rotate-12">M</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="glass-card hover-glow border-primary/40 text-foreground hover:bg-primary/30 rounded-full px-6 py-2.5 font-medium backdrop-blur-xl"
          >
            Home
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-full px-6 py-2.5 font-medium transition-all duration-200"
          >
            About us
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-full px-6 py-2.5 font-medium flex items-center gap-1 transition-all duration-200"
          >
            Services
            <CaretDown size={16} />
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-full px-6 py-2.5 font-medium transition-all duration-200"
          >
            White label
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-full px-6 py-2.5 font-medium transition-all duration-200"
          >
            Contact us
          </Button>
        </nav>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/80 hover:text-foreground hover:bg-primary/20 rounded-full w-12 h-12 transition-all duration-200"
          >
            <ShoppingCart size={22} />
          </Button>
          <Badge className="absolute -top-1 -right-1 w-6 h-6 p-0 flex items-center justify-center text-xs bg-accent hover:bg-accent text-accent-foreground font-bold">
            7
          </Badge>
        </div>

        {/* User Avatar */}
        <Avatar className="w-12 h-12 border-2 border-primary/30">
          <AvatarImage src="/api/placeholder/48/48" alt="User" />
          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white font-bold text-sm">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}