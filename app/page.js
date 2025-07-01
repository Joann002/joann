import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { HeaderCarousel } from "./components/header-carousel"
import { ProjectsGrid } from "./components/projects-grid"
import TechnologyCarousel from './components/TechnologyCarousel'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-7xl mx-auto p-8">
          {/* Titre Principal */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent hover:scale-[1.01] transition-transform duration-300 px-4 break-words">
              Joann Michel RAZAFINIMANANA
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Développeur Full Stack
            </h2>
          </div>

          <HeaderCarousel />
          <TechnologyCarousel />
          <h2 className="text-4xl font-bold mb-8 text-foreground" style={{ textAlign: "center", margin: "40px 0px" }}>Mes Projets</h2>
          <ProjectsGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}