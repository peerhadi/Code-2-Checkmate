
// app/about/page.tsx
import AboutHero from "./components//AboutHero"
import AboutTeam from "./components/AboutTeam"
import { section } from "./styles"

export default function AboutPage() {
  return (
    <section style={section}>
      <AboutHero />
      <AboutTeam />
    </section>
  )
}

