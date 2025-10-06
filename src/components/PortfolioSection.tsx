import React from "react"
import Frame1 from "@/assets/images/Frame.gif"
import Frame2 from "@/assets/images/Frame_1.gif"
import Frame3 from "@/assets/images/Frame_3.gif"
import Frame4 from "@/assets/images/Frame_1229.gif"
import Comp from "@/assets/images/Comp_1_4.gif"

const portfolioItems = [
  { id: 1, image: Frame1, title: "Build Your Own Pack", category: "Branding" },
  { id: 2, image: Frame2, title: "Leading Brand Alliance", category: "Web Design" },
  { id: 3, image: Frame3, title: "Cloud First Partner", category: "Development" },
  { id: 4, image: Frame4, title: "The First Time", category: "Marketing" },
  { id: 5, image: Comp, title: "Agency Dashboard", category: "UI/UX" },
  { id: 6, image: Frame1, title: "Digital Art NFTs", category: "Blockchain" },
  { id: 7, image: Frame2, title: "UI/UX Design", category: "Design System" },
  { id: 8, image: Frame3, title: "Hot Trending", category: "Social Media" },
  { id: 9, image: Frame4, title: "Crypto Platform", category: "Fintech" },
  { id: 10, image: Comp, title: "Healthcare App", category: "Mobile" },
  { id: 11, image: Frame1, title: "Media Agency", category: "Entertainment" },
  { id: 12, image: Frame2, title: "Basketball League", category: "Sports" },
]

export function PortfolioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Latest Works</h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Based on the description of Metro Solver and the image provided, here is a 
              6-step process that Metro Solver uses to scale a customer's business
            </p>
          </div>
        </div>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-primary font-medium mb-1">{item.category}</div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}