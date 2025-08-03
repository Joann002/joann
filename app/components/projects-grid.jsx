"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "../data/projects"
import Image from "next/image"

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover-glow">
          <CardHeader>
            <CardTitle className="text-gradient">{project.title}</CardTitle>
            <CardDescription>{project.category} • {project.year}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-2 py-1 bg-gradient-accent text-secondary-foreground rounded-md text-xs font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gradient hover:underline font-medium"
            >
              Voir le projet →
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 