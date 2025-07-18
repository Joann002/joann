"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      {children}
    </ThemeProvider>
  )
} 