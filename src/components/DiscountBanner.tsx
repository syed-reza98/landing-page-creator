import React from "react"
import { Button } from "@/components/ui/button"
import { X } from "@phosphor-icons/react"

export function DiscountBanner() {
  return (
    <div className="bg-card border border-border rounded-lg mx-4 my-8 p-4 max-w-sm">
      <div className="flex items-center justify-between">
        <span className="text-foreground font-medium">Get My 15% OFF</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <X size={14} />
        </Button>
      </div>
    </div>
  )
}