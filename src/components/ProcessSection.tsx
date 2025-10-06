import React from "react"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  Phone, 
  ShieldCheck, 
  ChartBar, 
  Gear, 
  Headset,
  Play
} from "@phosphor-icons/react"

const steps = [
  { id: "06", title: "Delivery and Support", icon: Truck },
  { id: "01", title: "Book a Call", icon: Phone },
  { id: "02", title: "Requirement Analysis", icon: ChartBar },
  { id: "03", title: "Service Customisation", icon: Headset },
  { id: "04", title: "Implement & Develop", icon: Gear },
  { id: "05", title: "Quality Assurance", icon: ShieldCheck }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Video Section */}
        <div className="text-center mb-20">
          <div className="relative max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                  <p className="text-gray-600 text-sm">Business Meeting Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Process Steps in circular layout */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Center circle */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-48 h-48 bg-card border-4 border-primary/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">How</div>
                  <div className="text-lg font-semibold">to Works?</div>
                </div>
              </div>
            </div>
            
            {/* Circular dotted border */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-2 border-dashed border-primary/30"></div>
            </div>
            
            {/* Process Steps positioned around the circle */}
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const angle = (index * 60) - 90 // 60 degrees apart, starting from top
              const radius = 180
              const x = Math.cos(angle * Math.PI / 180) * radius
              const y = Math.sin(angle * Math.PI / 180) * radius
              
              return (
                <div 
                  key={step.id}
                  className="absolute bg-card border border-border rounded-2xl p-4 w-52 h-20 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-bold mb-1">{step.id}</div>
                    <div className="text-sm font-semibold text-foreground leading-tight">
                      {step.title}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}