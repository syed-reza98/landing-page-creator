import React from "react"
import { Badge } from "@/components/ui/badge"

const announcements = [
  "Budget friendly",
  "No. 1 in Europe", 
  "On your first order",
  "30% OFF",
  "For all products buy now get the offer",
  "User Friendly",
  "24/7 Service"
]

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-b border-border/50 overflow-hidden py-3">
      <div className="announcement-scroll flex items-center gap-6 whitespace-nowrap">
        {[...announcements, ...announcements].map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            {text === "30% OFF" ? (
              <Badge className="bg-accent hover:bg-accent text-accent-foreground font-bold px-4 py-1.5 rounded-full text-sm">
                {text}
              </Badge>
            ) : (
              <>
                <span className="text-foreground/90 font-medium text-sm">{text}</span>
                <span className="text-foreground/40 text-xs">•</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}