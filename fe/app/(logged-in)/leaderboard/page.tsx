
'use client';

import { Box, Typography } from "@mui/material";
import LeaderboardTable from "./components/LeaderboardTable";

export default function LeaderboardPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: 600, letterSpacing: 1 }}
      >
        Leaderboard 
      </Typography>

      <LeaderboardTable />
    </Box>
  );
}

