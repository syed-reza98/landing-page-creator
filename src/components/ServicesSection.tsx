import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  PaintBrush, 
  Code, 
  VideoCamera, 
  TrendUp, 
  Lightbulb, 
  MagnifyingGlass,
  Cube,
  ShoppingCart,
  CurrencyDollar,
  Palette,
  Globe,
  GraduationCap
} from "@phosphor-icons/react"

const services = [
  {
    id: 1,
    title: "Graphic Design",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: PaintBrush,
    featured: false
  },
  {
    id: 2, 
    title: "Web & Software Development",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: Code,
    featured: true
  },
  {
    id: 3,
    title: "Multimedia & Video Editing", 
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: VideoCamera,
    featured: false
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: TrendUp,
    featured: false
  },
  {
    id: 5,
    title: "Creative Writing Solution",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: Lightbulb,
    featured: false
  },
  {
    id: 6,
    title: "SEO",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: MagnifyingGlass,
    featured: false
  },
  {
    id: 7,
    title: "3D Animation & Visualisation",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: Cube,
    featured: false
  },
  {
    id: 8,
    title: "E-Commerce Solution",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: ShoppingCart,
    featured: false
  },
  {
    id: 9,
    title: "Accounting",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: CurrencyDollar,
    featured: false
  },
  {
    id: 10,
    title: "Special Combo",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: Palette,
    featured: false
  },
  {
    id: 11,
    title: "Premium Website",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: Globe,
    featured: false
  },
  {
    id: 12,
    title: "Premium Domains",
    description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
    icon: GraduationCap,
    featured: false
  }
]

const additionalServices = [
  { title: "Proxy", icon: Globe },
  { title: "Merchandise", icon: Palette }, 
  { title: "Academy", icon: GraduationCap }
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your personal real estate sanctuary, where finding the ideal 
            home is effortless and comfortable with our assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.id} 
                className={`group hover:border-primary/50 transition-all duration-300 ${
                  service.featured ? 'bg-primary/10 border-primary/30' : 'bg-card'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${service.featured ? 'bg-primary/20' : 'bg-muted'}`}>
                      <IconComponent size={24} className={service.featured ? 'text-primary' : 'text-muted-foreground'} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button variant="link" className="text-primary p-0 h-auto font-medium">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <IconComponent size={24} className="text-muted-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    We are constantly growing or learning and improving. Enter your 
                    personal real estate sanctuary, where finding the ideal home is
                  </p>
                  
                  <Button variant="link" className="text-primary p-0 h-auto font-medium">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}