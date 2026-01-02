'use client'

// app/about/TeamCard.tsx
import { card } from "../styles"

type Props = {
  name: string
  role: string
  icon: string
  bio: string
}

export default function TeamCard({ name, role, icon, bio }: Props) {
  return (
    <div
      style={{
        ...card,
        transition: "all 0.3s ease",
        background: "rgb(28,28,28)", // ✅ lighter dark background
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)"
        e.currentTarget.style.boxShadow =
          "0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(255,0,255,0.4)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0)"
      }}
    >
      {/* Icon Circle */}
      <div
        style={{
          width: 90,
          height: 90,
          margin: "0 auto 24px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          border: "3px solid rgba(0,255,255,0.8)",
          boxShadow: "0 0 15px rgba(0,255,255,0.6), 0 0 30px rgba(255,0,255,0.3)",
        }}
      >
        {icon}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#fff",
          textShadow: "0 0 5px #0ff, 0 0 10px #f0f",
        }}
      >
        {name}
      </h3>

      {/* Role */}
      <p
        style={{
          color: "#0ff",
          marginBottom: 16,
          textShadow: "0 0 4px #0ff, 0 0 8px #f0f",
        }}
      >
        {role}
      </p>

      {/* Bio */}
      <p
        style={{
          fontSize: 14,
          color: "#b9f9ff",
          lineHeight: 1.6,
          textShadow: "0 0 3px #0ff, 0 0 6px #f0f",
        }}
      >
        {bio}
      </p>
    </div>
  )
}
