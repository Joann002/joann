import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { HeaderCarousel } from "./components/header-carousel"
import { ProjectsGrid } from "./components/projects-grid"
import TechnologyCarousel from './components/TechnologyCarousel'
import { SideNavigation } from "./components/side-navigation"
import { ProfilePhoto } from "./components/profile-photo"

export default function Home() {
  return (
    <>
      <Header />
      <SideNavigation />
      <main className="min-h-screen bg-gradient-background">
        <section className="max-w-7xl mx-auto p-8">
          {/* Titre Principal */}
          <div id="accueil" className="text-center space-y-4">
            <h1 className="text-[clamp(1.5rem,5vw,4.5rem)] font-bold tracking-tight text-gradient hover:scale-[1.01] transition-transform duration-300">
              Joann Michel<br />RAZAFINIMANANA
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Développeur Full Stack
            </h2>
            <ProfilePhoto />
          </div>

          <div id="presentation">
            <HeaderCarousel />
          </div>
          
          <div id="technologies">
            <TechnologyCarousel />
          </div>
          
          <div id="projets">
            <h2 className="text-4xl font-bold mb-8 text-foreground" style={{ textAlign: "center", margin: "40px 0px" }}>Mes Projets</h2>
            <ProjectsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}