"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const profileInfo = [
  {
    id: 1,
    title: "Développeur Full Stack",
    description: "Passionné par le développement web et mobile, je crée des applications modernes et performantes.",
    qualities: ["Créatif", "Autonome", "Rigoureux"],
    strengths: ["React", "Node.js", "TypeScript"],
    links: [
      { icon: Github, url: "https://github.com/Joann002", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/Joann-razafinimanana", label: "LinkedIn" },
      { icon: Mail, url: "mailto:joannrazafinimanana159@gmail.com", label: "Email" }
    ]
  },
  {
    id: 2,
    title: "Expert en UI/UX",
    description: "Je conçois des interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    qualities: ["Minutieux", "Innovant", "Collaboratif"],
    strengths: ["Figma", "Adobe XD", "Prototypage"],
    links: [
      { icon: Github, url: "https://github.com/Joann002", label: "Portfolio" },
      { icon: Linkedin, url: "https://linkedin.com/in/Joann-razafinimanana", label: "LinkedIn" },
      { icon: Mail, url: "mailto:joannrazafinimanana159@gmail.com", label: "Email" }
    ]
  },
  {
    id: 3,
    title: "Architecte Solutions",
    description: "Je conçois et implémente des architectures robustes et évolutives pour répondre aux besoins complexes.",
    qualities: ["Analytique", "Stratégique", "Leader"],
    strengths: ["Architecture Cloud", "Microservices", "DevOps"],
    links: [
      { icon: Github, url: "https://github.com/Joann002", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/Joann-razafinimanana", label: "LinkedIn" },
      { icon: Mail, url: "mailto:joannrazafinimanana159@gmail.com", label: "Email" }
    ]
  },
  {
    id: 4,
    title: "Développeur Mobile",
    description: "Spécialisé dans le développement d'applications mobiles natives et cross-platform avec une approche moderne.",
    qualities: ["Adaptatif", "Innovant", "Déterminé"],
    strengths: ["React Native", "Flutter", "Swift"],
    links: [
      { icon: Github, url: "https://github.com/Joann002", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/Joann-razafinimanana", label: "LinkedIn" },
      { icon: Mail, url: "mailto:joannrazafinimanana159@gmail.com", label: "Email" }
    ]
  },
  {
    id: 5,
    title: "Expert DevOps",
    description: "Spécialisé dans l'automatisation, le déploiement continu et l'optimisation des infrastructures cloud.",
    qualities: ["Organisé", "Efficace", "Proactif"],
    strengths: ["Docker", "Kubernetes", "AWS"],
    links: [
      { icon: Github, url: "https://github.com/Joann002", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/Joann-razafinimanana", label: "LinkedIn" },
      { icon: Mail, url: "mailto:joannrazafinimanana159@gmail.com", label: "Email" }
    ]
  }
]

export function HeaderCarousel() {
  return (
    <div className="relative w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {profileInfo.map((item, index) => (
            <article 
              key={item.id} 
              className={`relative bg-gradient-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 hover-glow ${
                index === 0 ? 'md:col-start-1 lg:col-start-1 lg:translate-y-0' : 
                index === 1 ? 'md:col-start-3 lg:col-start-3 lg:translate-y-0' : 
                index === 2 ? 'md:col-start-2 lg:col-start-2 lg:translate-y-8' :
                index === 3 ? 'md:col-start-1 lg:col-start-1 lg:translate-y-16' :
                'md:col-start-3 lg:col-start-3 lg:translate-y-16'
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient text-center">
                  {item.title}
                </h2>
                
                <p className="text-base text-muted-foreground text-center leading-relaxed">
                  {item.description}
                </p>
                
                {/* Qualités */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.qualities.map((quality, qualityIndex) => (
                    <span key={qualityIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {quality}
                    </span>
                  ))}
                </div>

                {/* Points forts */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.strengths.map((strength, strengthIndex) => (
                    <span key={strengthIndex} className="px-3 py-1 bg-gradient-accent text-secondary-foreground rounded-full text-sm font-medium">
                      {strength}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  {item.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-gradient-accent"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 