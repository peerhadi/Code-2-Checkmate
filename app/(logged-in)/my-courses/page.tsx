
'use client';

import {
  Box,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import CoursesGrid from "./components/CoursesGrid";
import { usePreloadImages } from "./components/usePreloadImages";

export default function MyCoursesPage() {
  const loading = usePreloadImages();

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 4, }}>
      <Container sx={{width: '100%', padding: '0px !important', m: 0}}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 4, color: '#fff', textAlign: 'center' }}
        >
          My Courses
        </Typography>

        <CoursesGrid />
      </Container>
    </Box>
  );
}
