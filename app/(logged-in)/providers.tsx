
"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/layout/Navbar";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
