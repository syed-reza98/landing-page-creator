import React from 'react'
import { templates } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function Templates() {
  return (
    <section id="templates" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Beautiful{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Templates
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our collection of professionally designed templates
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <div key={template.id} className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex h-full items-center justify-center p-8 text-center">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">{template.category}</div>
                    <div className="text-xl font-semibold">{template.name}</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <Button variant="outline" size="sm" className="w-full">
                  Preview
                </Button>
              </div>
              {template.featured && (
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
