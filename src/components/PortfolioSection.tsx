import React from "react"

// Portfolio data matching the screenshot layout
const portfolioItems = [
  { id: 1, title: "Build Your Own Pack", category: "Branding", color: "bg-gradient-to-br from-red-500 to-orange-500" },
  { id: 2, title: "Leading Brand Alliance", category: "Web Design", color: "bg-gradient-to-br from-orange-500 to-red-600" },
  { id: 3, title: "Cloud First Partner", category: "Development", color: "bg-gradient-to-br from-blue-600 to-indigo-700" },
  { id: 4, title: "The First Time", category: "Marketing", color: "bg-gradient-to-br from-gray-100 to-gray-300" },
  { id: 5, title: "CyberPunk", category: "Gaming", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
  { id: 6, title: "Digital Art NFTs", category: "Blockchain", color: "bg-gradient-to-br from-green-500 to-teal-600" },
  { id: 7, title: "Agency Dashboard", category: "UI/UX", color: "bg-gradient-to-br from-purple-500 to-indigo-600" },
  { id: 8, title: "Hot Trending", category: "Social Media", color: "bg-gradient-to-br from-gray-800 to-gray-900" },
  { id: 9, title: "Crypto Platform", category: "Fintech", color: "bg-gradient-to-br from-green-400 to-green-600" },
  { id: 10, title: "Healthcare Info", category: "Healthcare", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
  { id: 11, title: "Finance Tech Experts", category: "Fintech", color: "bg-gradient-to-br from-yellow-500 to-orange-500" },
  { id: 12, title: "Basketball League", category: "Sports", color: "bg-gradient-to-br from-red-600 to-pink-600" },
  { id: 13, title: "Evolution Mind", category: "Psychology", color: "bg-gradient-to-br from-gray-700 to-gray-900" }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500"
            >
              <div className={`aspect-[4/3] ${item.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="relative z-10 text-center text-white p-4">
                  <div className="text-xs opacity-80 mb-1">{item.category}</div>
                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}