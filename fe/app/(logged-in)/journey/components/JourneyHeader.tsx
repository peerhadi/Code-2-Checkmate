
'use client';

import { Box, Typography } from "@mui/material";
import { Unit } from "./journeyData";

export default function JourneyHeader({ unit }: { unit: Unit }) {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)",
        width: 600,
        maxWidth: "80vw",
        borderRadius: 4,
        p: 3,
        textAlign: "center",
        position: "sticky",
        top: 40,
        zIndex: 20,
      }}
    >
      <Typography fontWeight={600}>
        {unit.section} · {unit.unit}
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        {unit.title}
      </Typography>
    </Box>
  );
}
