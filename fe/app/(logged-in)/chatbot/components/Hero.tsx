
"use client";

import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ textAlign: "center", mb: 8 }}>
      <Typography
        variant="h3"
        fontWeight="500"
        sx={{ letterSpacing: "-0.02em", mb: 1 }}
      >
        Code2Checkmate,
      </Typography>

      <Typography
        variant="h3"
        fontWeight="500"
        sx={{
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "-0.02em",
        }}
      >
        Your personal AI assistant
      </Typography>
    </Box>
  );
}
