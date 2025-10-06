import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CaretLeft, CaretRight, Play, Calendar, Clock } from "@phosphor-icons/react"
import podcastImage from "@/assets/images/Screenshot_2025-10-05_221526.png"

const podcasts = [
  {
    id: 1,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    duration: "30 Minute",
    date: "Mar 11, 2023",
    thumbnail: podcastImage
  },
  {
    id: 2,
    title: "How Brands Can Prepare for Black Friday & Christmas", 
    duration: "30 Minute",
    date: "Mar 11, 2023",
    thumbnail: podcastImage
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Did You Hear about <br />
              Our Podcast?
            </h2>
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
              Based on the description of Metro Solver and the image provided, here is a 
              6-step process that Metro Solver uses to scale a customer's business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {podcasts.map((podcast) => (
              <Card key={podcast.id} className="group cursor-pointer hover:border-primary/50 transition-all duration-300 overflow-hidden hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="aspect-video w-48 relative overflow-hidden">
                      <img 
                        src={podcast.thumbnail} 
                        alt={podcast.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-12 h-12 shadow-lg">
                          <Play size={20} />
                        </Button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Clock size={12} className="text-white" />
                          <span className="text-white text-xs">{podcast.duration}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Calendar size={12} className="text-white" />
                          <span className="text-white text-xs">{podcast.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 flex items-center">
                      <div>
                        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                          {podcast.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-secondary/50 border border-border hover:bg-secondary/80 w-12 h-12"
              >
                <CaretLeft size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-secondary/50 border border-border hover:bg-secondary/80 w-12 h-12"
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