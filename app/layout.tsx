import "./globals.css";
import Navbar from "../components/Navbar";
import { CssBaseline, Container } from "@mui/material";

export const metadata = {
  title: "Code2Checkmate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
