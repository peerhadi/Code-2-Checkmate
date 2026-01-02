
'use client'

// app/about/AboutHero.tsx
import { heading, description, neonChip } from "../styles"

export default function AboutHero() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <div style={{ ...neonChip, height: 50 }}>
          <img src="/logo.png" alt="logo" width={150} height={50} />
        </div>
      </div>

      <h1 style={heading}>
        Platform for Learning Through Gamification
      </h1>

      <p style={description}>
        Built by a bunch of passionate dummy engineers who love breaking things,
        fixing them again, and turning complex learning problems into addictive,
        game-like experiences powered by curiosity, experimentation, and neon energy.
      </p>
    </>
  )
}
