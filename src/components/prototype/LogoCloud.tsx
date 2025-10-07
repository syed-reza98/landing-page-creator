import React from 'react'
import { logos } from '@/lib/data'

export function LogoCloud() {
  return (
    <section className="border-y bg-muted/50 py-12">
      <div className="container px-4">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="h-12 w-32 flex items-center justify-center text-lg font-semibold text-muted-foreground">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
