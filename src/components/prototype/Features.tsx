import React from 'react'
import { features } from '@/lib/data'
import { Zap, Smartphone, Rocket, TrendingUp } from 'lucide-react'

const iconMap = {
  zap: Zap,
  smartphone: Smartphone,
  rocket: Rocket,
  trending: TrendingUp,
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to help you build and launch high-converting landing pages
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const icons = [Zap, Smartphone, Rocket, TrendingUp]
            const Icon = icons[index % icons.length]
            return (
              <div key={feature.id} className="group relative rounded-2xl border bg-card p-6 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
