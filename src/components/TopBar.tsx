import React from "react"

export function TopBar() {
  return (
    <div className="bg-background py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center space-x-8">
          <div>Budget Friendly</div>
          <div>No. 1 in Europe</div>
          <div>On your first order</div>
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            30% OFF
          </div>
          <div>For all products buy now get the offer</div>
        </div>
        <div className="flex items-center space-x-6">
          <div>User Friendly</div>
          <div>24/7 Service</div>
        </div>
      </div>
    </div>
  )
}