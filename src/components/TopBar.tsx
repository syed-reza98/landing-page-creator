import React from "react"

export function TopBar() {
  return (
    <div className="bg-muted/50 border-b border-border text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <span>Budget friendly</span>
              <span>✓</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>No. 1 in Europe</span>
              <span>✓</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>On your first order</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium ml-2">30% OFF</span>
            </div>
            <span>For all products buy now get the offer</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>User Friendly</span>
            <span>24/7 Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}