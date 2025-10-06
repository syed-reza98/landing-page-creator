import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Truck, 
  Phone, 
  ShieldCheck, 
  ChartBar, 
  Gear, 
  Headset 
} from "@phosphor-icons/react"

const steps = [
  { id: "01", title: "Delivery and Support", icon: Truck },
  { id: "02", title: "Book a Call", icon: Phone },
  { id: "03", title: "Quality Assurance", icon: ShieldCheck },
  { id: "04", title: "Requirement Analysis", icon: ChartBar },
  { id: "05", title: "Implement & Develop", icon: Gear },
  { id: "06", title: "Service Customisation", icon: Headset }
]

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-primary-foreground text-2xl font-bold">▶</span>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <br />
              to Works?
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={step.id} className="group hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div className="text-primary text-sm font-medium mb-2">{step.id}</div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}