
'use client';

import { Box, Divider, Typography } from "@mui/material";

export default function JourneyDivider({ text }: { text: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 4,
        opacity: 0.6,
      }}
    >
      <Divider sx={{ borderColor: "rgb(53,67,76)", width: 200 }} />
      <Typography sx={{ mx: 2, fontSize: 14 }}>{text}</Typography>
      <Divider sx={{ borderColor: "rgb(53,67,76)", width: 200 }} />
    </Box>
  );
}
