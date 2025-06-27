"use client"

import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png" // Remplace par ton logo
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 text-xl font-bold">Ton Nom</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 