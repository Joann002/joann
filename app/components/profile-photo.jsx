"use client"

import Image from "next/image"

export function ProfilePhoto() {
  return (
    <div className="relative w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative">
            {/* Photo principale */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-background bg-background">
              <Image
                src="/img/profile-photo.jpg"
                alt="Joann Michel Razafinimanana"
                width={400}
                height={500}
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
                priority
              />
            </div>
            
            {/* Effet de glow autour de la photo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 blur-xl -z-10"></div>

          </div>
        </div>
        
        {/* Description sous la photo */}
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Développeur Full Stack passionné par la création d'applications modernes et performantes. 
            Spécialisé dans les technologies web et mobile avec une approche centrée sur l'expérience utilisateur.
          </p>
        </div>
      </div>
    </div>
  )
} 