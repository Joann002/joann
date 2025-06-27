"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "../data/projects"
import Image from "next/image"

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="h-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.category} • {project.year}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
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
              className="text-sm text-primary hover:underline"
            >
              Voir le projet →
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 