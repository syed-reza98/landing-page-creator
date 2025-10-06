import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import blogImage from "@/assets/images/Screenshot_2025-10-05_221412.png"

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
    image: blogImage,
    featured: true
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
    image: blogImage
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
    image: blogImage
  }
]

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("Success Stories")
  
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Success Stories, <br />
            Case Studies & Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex bg-card rounded-2xl p-2 border border-border">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 overflow-hidden ${
                post.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {post.description}
                </p>
                
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-muted-foreground">Views:</span>
                    <span className="font-semibold text-primary">{post.metrics.views}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-muted-foreground">CPA:</span>
                    <span className="font-semibold text-primary">{post.metrics.cpa}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-muted-foreground">Sales:</span>
                    <span className="font-semibold text-primary">{post.metrics.sales}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}