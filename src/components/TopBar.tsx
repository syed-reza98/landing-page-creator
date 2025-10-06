import React from "react"

export function TopBar() {
  return (
    <div className="bg-background py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-6">
          <div className="text-sm">Budget Friendly</div>
          <div className="text-sm">No. 1 in Europe</div>
          <div className="text-sm">On your first order</div>
          <div className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
            30% OFF
          </div>
          <div className="text-sm">For all products buy now get the offer</div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-sm">User Friendly</div>
          <div className="text-sm">24/7 Service</div>
        </div>
      </div>
    </div>
  )
}