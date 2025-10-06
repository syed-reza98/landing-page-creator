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
import videoSrc from "@/assets/video/v.mp4"

const steps = [
  { id: "01", title: "Delivery and Support", icon: Truck, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { id: "02", title: "Book a Call", icon: Phone, position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { id: "03", title: "Quality Assurance", icon: ShieldCheck, position: "bottom-0 right-0 translate-x-1/2 translate-y-1/2" },
  { id: "04", title: "Requirement Analysis", icon: ChartBar, position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { id: "05", title: "Implement & Develop", icon: Gear, position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
  { id: "06", title: "Service Customisation", icon: Headset, position: "bottom-0 right-1/3 translate-y-1/2" }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Video Section */}
        <div className="text-center mb-20">
          <div className="relative max-w-2xl mx-auto">
            <div className="aspect-video bg-card rounded-3xl overflow-hidden border border-border">
              <video 
                className="w-full h-full object-cover"
                poster="/src/assets/images/Screenshot_2025-10-05_221412.png"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 shadow-lg">
                  <Play size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How <br />
              to Works?
            </h2>
          </div>
          
          {/* Circular Process Diagram */}
          <div className="relative">
            {/* Center circle */}
            <div className="w-48 h-48 mx-auto bg-card border-2 border-primary rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">How</div>
                <div className="text-lg font-semibold">to Works?</div>
              </div>
            </div>
            
            {/* Process Steps arranged in circle */}
            <div className="absolute inset-0">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const angle = (index * 60) - 90 // 60 degrees apart, starting from top
                const radius = 200
                const x = Math.cos(angle * Math.PI / 180) * radius
                const y = Math.sin(angle * Math.PI / 180) * radius
                
                return (
                  <div 
                    key={step.id}
                    className="absolute process-step rounded-2xl p-4 w-48 h-24 flex items-center space-x-3"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x - 96}px, ${y - 48}px)`
                    }}
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-primary font-bold">{step.id}</div>
                      <div className="text-sm font-semibold text-foreground leading-tight">
                        {step.title}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Connecting lines/dots */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <circle 
                  cx="200" 
                  cy="200" 
                  r="200" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="text-border"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}