"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
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
      { icon: Github, url: "https://github.com/ton-username", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/ton-username", label: "LinkedIn" },
      { icon: Mail, url: "mailto:ton@email.com", label: "Email" }
    ]
  },
  {
    id: 2,
    title: "Expert en UI/UX",
    description: "Je conçois des interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    qualities: ["Minutieux", "Innovant", "Collaboratif"],
    strengths: ["Figma", "Adobe XD", "Prototypage"],
    links: [
      { icon: Github, url: "https://github.com/ton-username", label: "Portfolio" },
      { icon: Linkedin, url: "https://linkedin.com/in/ton-username", label: "LinkedIn" },
      { icon: Mail, url: "mailto:ton@email.com", label: "Email" }
    ]
  },
  {
    id: 3,
    title: "Architecte Solutions",
    description: "Je conçois et implémente des architectures robustes et évolutives pour répondre aux besoins complexes.",
    qualities: ["Analytique", "Stratégique", "Leader"],
    strengths: ["Architecture Cloud", "Microservices", "DevOps"],
    links: [
      { icon: Github, url: "https://github.com/ton-username", label: "GitHub" },
      { icon: Linkedin, url: "https://linkedin.com/in/ton-username", label: "LinkedIn" },
      { icon: Mail, url: "mailto:ton@email.com", label: "Email" }
    ]
  }
]

export function HeaderCarousel() {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center min-h-[400px] py-8 gap-8">
      {/* Colonne gauche : Carousel de profil */}
      <div className="flex-1 flex items-center justify-center w-full">
        <Carousel 
          className="w-full max-w-xl" 
          style={{ position: "static !important" }}
          opts={{
            loop: true,
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps",
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
          }}
        >
          <CarouselContent>
            {profileInfo.map((item) => (
              <CarouselItem key={item.id} className="flex flex-col items-center justify-center min-h-[400px] gap-4 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground text-center max-w-md">
                  {item.description}
                </p>
                
                {/* Qualités */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.qualities.map((quality, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {quality}
                    </span>
                  ))}
                </div>

                {/* Points forts */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.strengths.map((strength, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {strength}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex flex-wrap gap-3 mt-2 justify-center">
                  {item.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute w-full flex justify-between px-4">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
      {/* Colonne droite : Photo fixe */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto">
        <div className="relative overflow-hidden shadow-lg border-4 border-background bg-background">
          <img
            src="/img/pexels-moh-adbelghaffar-771742.jpg"
            alt="Ma photo"
            style={{ width: "275px", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
} 