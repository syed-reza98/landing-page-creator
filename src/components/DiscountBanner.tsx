import React from "react"
import { Button } from "@/components/ui/button"
import { X } from "@phosphor-icons/react"

export function DiscountBanner() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 transform -translate-y-1/2 z-10">
        <div className="bg-card border border-border rounded-lg p-4 max-w-sm shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium">Get My 15% OFF</span>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
              <X size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}