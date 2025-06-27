"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:ton@email.com" className="hover:underline">ton@email.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+33600000000" className="hover:underline">+33 6 00 00 00 00</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ville, Pays</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/ton-username" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/ton-username" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ton Nom. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 