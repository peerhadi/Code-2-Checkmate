
'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useRouter } from 'next/navigation';

export default function UnderConstructionPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <ConstructionIcon sx={{ fontSize: 80, mb: 2, color: '#FFA116' }} />
      <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
        Under Construction
      </Typography>
      <Typography variant="body1" sx={{ color: '#B3B3B3', mb: 4 }}>
        Sorry, this page is currently under construction. We're working hard to bring it to you soon!
      </Typography>
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          bgcolor: '#2DB55D',
          '&:hover': { bgcolor: '#239148' },
        }}
        onClick={() => router.push('/')}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
