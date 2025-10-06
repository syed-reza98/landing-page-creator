import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkle } from "@phosphor-icons/react"

const features = [
  {
    title: "Cancel Anytime",
    description: "Flexible subscription with no long-term commitments"
  },
  {
    title: "24/7 Customer Service", 
    description: "Round-the-clock support for all your needs"
  },
  {
    title: "Refers & Earn",
    description: "Get rewarded for bringing new clients"
  },
  {
    title: "Money Back Guarantee",
    description: "100% satisfaction guarantee on all services"
  }
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why You <br />
              Choose Metro <br />
              Solver?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We are constantly growing or learning and improving. Enter your 
              personal real estate sanctuary, where finding the ideal home is 
              effortless and comfortable with our assistance.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
              <Sparkle size={20} className="mr-2" />
              Book Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-lg" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}