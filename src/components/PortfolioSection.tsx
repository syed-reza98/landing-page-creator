import React from "react"

export function PortfolioSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Latest Works</h2>
          <p className="text-muted-foreground max-w-2xl">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-square bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-muted to-primary/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/30 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}