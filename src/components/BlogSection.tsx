import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const blogCategories = ["Success Stories", "Case Studies", "Blog and News"]

const blogPosts = [
  {
    id: 1,
    title: "The Future of Metro Systems by Company",
    description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
    metrics: {
      views: "50M+ Views",
      cpa: "39% Lower CPA",
      sales: "$2M+ Sales Generated"
    },
    image: "blog1"
  },
  {
    id: 2,
    title: "The Future of Metro Systems by Company", 
    description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
    metrics: {
      views: "50M+ Views",
      cpa: "39% Lower CPA", 
      sales: "$2M+ Sales Generated"
    },
    image: "blog2"
  },
  {
    id: 3,
    title: "The Future of Metro Systems by Company",
    description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise", 
    metrics: {
      views: "50M+ Views",
      cpa: "39% Lower CPA",
      sales: "$2M+ Sales Generated"
    },
    image: "blog3"
  }
]

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("Success Stories")
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The Success Stories, <br />
            Case Studies & Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex bg-card rounded-lg p-1">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`px-6 py-2 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-muted" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{post.metrics.views}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{post.metrics.cpa}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{post.metrics.sales}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}