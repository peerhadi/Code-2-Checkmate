
// app/about/styles.ts

export const section = {
  padding: "96px 24px",
  color: "#eafff8",
}

export const neonChip = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "10px 20px",
  borderRadius: 999,
  background: "transparent", // lighter cyan for neon feel
  color: "#0ff", // bright cyan text
  fontWeight: 600,
  boxShadow: "0 0 5px rgba(0,255,255,0.6), 0 0 15px rgba(255,0,255,0.3)", // cyan + subtle pink glow
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 0 25px rgba(0,255,255,0.8), 0 0 40px rgba(255,0,255,0.5)", // glow intensifies on hover
    transform: "scale(1.05)",
  },
}

export const heading = {
  textAlign: "center" as const,
  fontSize: 44,
  fontWeight: 800,
  marginBottom: 16,
  color: "#0ff", // bright neon cyan
  textShadow: `
    0 0 1px #0ff, 
    0 0 2px #0ff, 
    0 0 4px #ff00ff, 
    0 0 6px #ff00ff
  `, // layered cyan + subtle pink glow
  transition: "all 0.3s ease-in-out",
}
export const description = {
  textAlign: "center" as const,
  maxWidth: 720,
  margin: "0 auto",
  color: "#9fffe5",
  fontSize: 16,
  lineHeight: 1.7,
}

export const card = {
  background: "#081311",
  borderRadius: 24,
  padding: "40px 28px",
  textAlign: "center" as const,
  cursor: "pointer",
  border: "1px solid rgba(0,255,170,0.25)",
  transition: "all 0.3s ease",
}
