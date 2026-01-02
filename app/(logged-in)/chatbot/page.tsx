
"use client";

import { Box } from "@mui/material";
import Hero from "./components/Hero";
import PromptInput from "./components/PromptInput";

export default function Code2CheckmateHome() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        px: 2,
      }}
    >
      <Hero />
      <PromptInput />
    </Box>
  );
}

