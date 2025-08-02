"use client"

import { ThemeToggle } from "./theme-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b bg-gradient-header shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-button text-primary-foreground font-bold text-lg">
                J.M
              </AvatarFallback>
            </Avatar>
            <span className="ml-2 text-xl font-bold text-gradient">Joann Michel</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 