import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CaretLeft, CaretRight, Play, Calendar } from "@phosphor-icons/react"

const podcasts = [
  {
    id: 1,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    duration: "30 Minute",
    date: "Mar 11, 2023",
    thumbnail: "podcast1"
  },
  {
    id: 2,
    title: "How Brands Can Prepare for Black Friday & Christmas", 
    duration: "30 Minute",
    date: "Mar 11, 2023",
    thumbnail: "podcast2"
  }
]

const features = [
  {
    title: "Cancel Anytime",
    description: "24/7 Customer Service"
  },
  {
    title: "Refers & Earn", 
    description: "Money Back Guarantee"
  }
]

export function PodcastSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Did You Hear about <br />
              Our Podcast?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Based on the description of Metro Solver and the image provided, here is a 
              6-step process that Metro Solver uses to scale a customer's business
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {podcasts.map((podcast) => (
              <Card key={podcast.id} className="group hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="aspect-video w-48 bg-gradient-to-br from-primary/20 to-muted relative flex items-center justify-center">
                      <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                        <Play size={20} />
                      </Button>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                        <span className="flex items-center">
                          <Play size={14} className="mr-1" />
                          {podcast.duration}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {podcast.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-snug">{podcast.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-card border border-border"
              >
                <CaretLeft size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-card border border-border"
              >
                <CaretRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}