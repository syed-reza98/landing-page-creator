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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">
                <span>{stat.number}</span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}