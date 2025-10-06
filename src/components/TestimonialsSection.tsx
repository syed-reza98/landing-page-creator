import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react"

const testimonials = [
  {
    id: 1,
    name: "Katie Johnson",
    role: "Founder of Strava",
    content: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    rating: 5,
    platform: "Google",
    avatar: "KJ"
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Founder of Strava", 
    content: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    rating: 5,
    platform: "Trustpilot",
    avatar: "WW",
    featured: true
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Founder of Strava",
    content: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    rating: 5,
    platform: "Google",
    avatar: "JW"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`${
                  testimonial.featured ? 'bg-primary/10 border-primary/30 scale-105' : 'bg-card'
                } transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-medium">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2">⭐</span>
                    <span>{testimonial.platform}</span>
                    <span className="ml-2">Review by {testimonial.platform.toLowerCase()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full bg-card border border-border"
            >
              <CaretLeft size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full bg-card border border-border"
            >
              <CaretRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}