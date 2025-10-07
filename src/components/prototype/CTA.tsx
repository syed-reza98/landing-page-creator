import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Join thousands of businesses already using our platform to create amazing landing pages
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shrink-0"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="mt-4 text-sm text-purple-100">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
