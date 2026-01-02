
'use client';

import { Box } from "@mui/material";
import JourneyHeader from "./components/JourneyHeader";
import JourneySteps from "./components/JourneySteps";
import { useActiveUnit } from "./components/useActiveUnit";

export default function JourneyPage() {
  const activeUnit = useActiveUnit();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Box sx={{ width: 600, maxWidth: "80vw", minHeight: "100vh" }}>
          <Box
            sx={{
              width: 500,
              height: 40,
              position: "fixed",
              top: 0,
              zIndex: 50,
              background: "rgb(30,30,30)",
            }}
          />
          <JourneyHeader unit={activeUnit} />
          <JourneySteps />
        </Box>
      </Box>
    </Box>
  );
}

