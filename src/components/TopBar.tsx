import React from "react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>Expert Team</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>24/7 Service</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>📞 +1 (555) 123-4567</span>
          <span>✉️ info@metrosolver.com</span>
        </div>
      </div>
    </div>
  )
}