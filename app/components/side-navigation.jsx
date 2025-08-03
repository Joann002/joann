"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Home, User, Code, FolderOpen } from "lucide-react"

const navigationItems = [
  {
    id: "accueil",
    label: "Accueil",
    icon: Home,
    description: "Page d'accueil"
  },
  {
    id: "presentation",
    label: "Présentation",
    icon: User,
    description: "À propos de moi"
  },
  {
    id: "technologies",
    label: "Technologies",
    icon: Code,
    description: "Mes compétences"
  },
  {
    id: "projets",
    label: "Projets",
    icon: FolderOpen,
    description: "Mes réalisations"
  }
]

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("accueil")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Détecter quelle section est au centre de l'écran
      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const item = navigationItems[i]
        const element = document.getElementById(item.id)
        
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(item.id)
            break
          }
        }
      }

      // Si on est tout en haut, c'est l'accueil
      if (window.scrollY < 200) {
        setActiveSection("accueil")
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Vérifier au chargement initial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId)
    const element = document.getElementById(sectionId)
    console.log('Element found:', element)
    
    if (element) {
      // Forcer la section active immédiatement
      setActiveSection(sectionId)
      
      if (sectionId === "accueil") {
        // Pour la section accueil, aller au tout début de la page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else if (sectionId === "technologies" || sectionId === "presentation") {
        // Pour les sections technologies et presentation, centrer au milieu de la page
        const windowHeight = window.innerHeight
        const elementTop = element.offsetTop
        const elementHeight = element.offsetHeight
        const targetScroll = elementTop - (windowHeight / 2) + (elementHeight / 2)
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        })
      } else {
        // Pour les autres sections, comportement normal
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      console.error('Element not found for section:', sectionId)
    }
  }

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 block">
      <div className="flex flex-col gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className={`h-12 w-12 p-0 relative group transition-all duration-200 ${
                isActive ? "bg-gradient-button text-primary-foreground shadow-md" : "hover:bg-gradient-accent"
              }`}
              onClick={() => scrollToSection(item.id)}
              title={item.description}
            >
              <Icon className="h-5 w-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </Button>
          )
        })}
      </div>
    </nav>
  )
} 