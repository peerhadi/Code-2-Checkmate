
'use client'

// app/about/AboutTeam.tsx
import { People } from "@mui/icons-material"
import TeamCard from "./TeamCard"
import { team } from "../teamData"
import { neonChip } from "../styles"

export default function AboutTeam() {
  return (
    <>
      <div style={{ height: 96 }} />

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
        <div style={neonChip}>
          <People /> Founded By Engineers
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 48,
        }}
      >
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </>
  )
}
