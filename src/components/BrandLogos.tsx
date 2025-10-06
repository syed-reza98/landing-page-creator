import React from "react"

export function BrandLogos() {
  const logos = [
    "luminus", "brembo", "motorola", "luminus", "brembo",
    "luminus", "brembo", "motorola", "luminus", "brembo"
  ]

  return (
    <section className="py-8 border-b border-border overflow-hidden">
      <div className="relative">
        <div className="flex space-x-12 brand-logos">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center h-12 min-w-[120px]">
              <span className="text-muted-foreground font-medium text-lg">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}