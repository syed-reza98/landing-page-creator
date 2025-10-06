import React from "react"

const stats = [
  {
    number: "150",
    label: "Current Clients",
    suffix: "+"
  },
  {
    number: "25k",
    label: "Completed Projects", 
    suffix: "+"
  },
  {
    number: "90",
    label: "Metro Solver Teams",
    suffix: "+"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center stats-card rounded-2xl p-8 border border-border">
              <div className="text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">{stat.number}</span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}