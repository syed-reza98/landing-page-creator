import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ShoppingCart, CaretDown } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <div className="text-white font-bold text-xl transform -rotate-12">M</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Button variant="outline" className="bg-primary/20 border-primary/40 text-foreground hover:bg-primary/30 rounded-full px-6">
            Home
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-full px-4">
            About us
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-full px-4 flex items-center gap-1">
            Services
            <CaretDown size={16} />
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-full px-4">
            White label
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-full px-4">
            Contact us
          </Button>
        </nav>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-primary/10 rounded-full">
            <ShoppingCart size={20} />
          </Button>
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
            7
          </Badge>
        </div>

        {/* User Avatar */}
        <Avatar className="w-10 h-10">
          <AvatarImage src="/api/placeholder/40/40" alt="User" />
          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white font-semibold">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}