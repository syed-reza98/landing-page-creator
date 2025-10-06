import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterCTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription:", email)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-primary-foreground font-bold text-2xl">M</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground">
                  Join the 25,000+ clients who trust us for their digital growth
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-3 w-full lg:w-auto lg:min-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/15 rounded-full placeholder:text-white/40 focus:border-primary focus:ring-primary"
                required
              />
              <Button type="submit" className="btn-gradient rounded-full px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
