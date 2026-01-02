
"use client";

import {
  Paper,
  IconButton,
  InputBase,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Send } from "@mui/icons-material";

export default function PromptInput() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "8px 16px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 700,
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        transition: "border 0.2s",
        "&:focus-within": {
          border: "1px solid rgba(255,255,255,0.3)",
        },
      }}
    >
      <IconButton sx={{ p: "10px", color: "rgba(255,255,255,0.5)" }}>
        <AddIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: "1.1rem" }}
        placeholder="Ask Code2Checkmate..."
        inputProps={{ "aria-label": "ask code2checkmate" }}
      />

      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton sx={{ p: "10px", color: "rgba(255,255,255,0.5)" }}>
          <Send />
        </IconButton>
      </Stack>
    </Paper>
  );
}
