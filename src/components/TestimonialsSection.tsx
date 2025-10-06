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
    avatar: "/src/assets/images/IMG_3134.jpg"
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Founder of Strava", 
    content: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    rating: 5,
    platform: "Trustpilot",
    avatar: "/src/assets/images/IMG_3134.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Founder of Strava",
    content: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    rating: 5,
    platform: "Google",
    avatar: "/src/assets/images/IMG_3134.jpg"
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`${
                  testimonial.featured 
                    ? 'testimonial-card text-primary-foreground scale-105 transform' 
                    : 'bg-card hover:bg-card/80'
                } transition-all duration-500 hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-orange-400 to-pink-400">
                      <div className="w-full h-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1">{testimonial.name}</h4>
                      <p className={`text-sm ${testimonial.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={testimonial.platform === 'Trustpilot' ? 'text-green-500 fill-green-500' : 'text-yellow-500 fill-yellow-500'} 
                      />
                    ))}
                  </div>
                  
                  <p className={`mb-6 leading-relaxed text-sm ${
                    testimonial.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'
                  }`}>
                    "{testimonial.content}"
                  </p>
                  
                  <div className={`flex items-center text-sm ${
                    testimonial.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    <div className="flex items-center">
                      <Star size={14} className={testimonial.platform === 'Trustpilot' ? 'text-green-500 fill-green-500' : 'text-yellow-500 fill-yellow-500'} />
                      <span className="ml-2 font-medium">{testimonial.platform}</span>
                    </div>
                    <span className="ml-4 text-xs">Review by {testimonial.platform.toLowerCase()}</span>
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
              className="rounded-full bg-secondary/50 border border-border hover:bg-secondary/80 w-12 h-12"
            >
              <CaretLeft size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full bg-secondary/50 border border-border hover:bg-secondary/80 w-12 h-12"
            >
              <CaretRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}