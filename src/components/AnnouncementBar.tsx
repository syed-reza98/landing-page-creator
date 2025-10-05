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
    <div className="bg-gradient-to-r from-primary/90 to-secondary/90 overflow-hidden py-2">
      <div className="announcement-scroll flex items-center gap-8 whitespace-nowrap">
        {announcements.map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            {text === "30% OFF" ? (
              <Badge className="bg-accent text-accent-foreground font-semibold px-3 py-1">
                {text}
              </Badge>
            ) : (
              <>
                <span className="text-foreground font-medium">{text}</span>
                <span className="text-foreground/60">•</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}