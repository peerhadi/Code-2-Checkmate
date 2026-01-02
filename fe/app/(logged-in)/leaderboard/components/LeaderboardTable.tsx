
'use client';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { tableData } from "./leaderboardData";

// Medal component
const medalColor = (rank: number) => {
  if (rank === 1) return <img src='/Gold.svg' alt="Gold Medal" />;
  if (rank === 2) return <img src='/Silver.svg' alt="Silver Medal" />;
  if (rank === 3) return <img src='/Bronze.svg' alt="Bronze Medal" />;
  return (
    <Box
      sx={{
        width: 41,
        height: 44,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      {rank}
    </Box>
  );
};

export default function LeaderboardTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        border: "1.5px solid rgba(255,255,255,0.12)",
        backgroundColor: "#181818",
        overflow: "hidden",
      }}
    >
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#202020",
              borderBottom: "1.5px solid rgba(255,255,255,0.12)",
            }}
          >
            <TableCell align="left" sx={{ fontWeight: 700, py: 2 }}>
              Player
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 700, py: 2 }}>
              Problems Solved
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 700, py: 2 }}>
              Rebirths
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 700, py: 2 }}>
              Rating
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                borderBottom:
                  index === tableData.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              {/* Player: Medal + Avatar + Name */}
              <TableCell align="left" sx={{ py: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2, // consistent spacing
                  }}
                >
                  {medalColor(row.rank)}

                  <Avatar sx={{ width: 44, height: 44, bgcolor: "#4da3ff" }}>
                    <PersonIcon sx={{ fontSize: 32, color: "#fff" }} />
                  </Avatar>

                  <Typography fontWeight={600}>{row.name}</Typography>
                </Box>
              </TableCell>

              {/* Stats */}
              <TableCell align="left" sx={{ py: 2, fontSize: 18 }}>
                {row.solved}
              </TableCell>
              <TableCell align="left" sx={{ py: 2, fontSize: 18 }}>
                {row.rebirths}
              </TableCell>
              <TableCell align="left" sx={{ py: 2, fontWeight: 600, fontSize: 18 }}>
                {row.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

