import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import React from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      © {new Date().getFullYear()} Code2Checkmate. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider sx={{ mt: 5 }} />
      <Container
        sx={{
          py: { xs: 6, sm: 8 },
          width: 'calc(100% - 260px)',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '260px',
          gap: 6,
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Brand + Newsletter */}
          <Box sx={{ maxWidth: 420 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src="/favicon.ico" width="40" alt="Code2Checkmate logo" />
              <Typography variant="h6" fontWeight="bold">
                Code2Checkmate
              </Typography>
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              A chess-powered platform to master data structures and algorithms
              through strategy-based coding challenges.
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontWeight: 600, mt: 3, mb: 1 }}
            >
              Join the newsletter
            </Typography>

            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <TextField
                id="email-newsletter"
                size="small"
                placeholder="you@example.com"
                fullWidth
              />
              <Button variant="contained" size="large" sx={{ textTransform: 'none' }}>
                Subscribe
              </Button>
            </Stack>
          </Box>

          {/* Links */}
          <Box sx={{ display: 'flex', gap: 6 }}>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                Platform
              </Typography>
              <Link href="#" variant="body2" color="text.secondary">
                Features
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Problems
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Leaderboard
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Battle Mode
              </Link>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium">
                Resources
              </Typography>
              <Link href="#" variant="body2" color="text.secondary">
                Docs
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Blog
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                FAQs
              </Link>
            </Box>

            <Box>
              <Typography variant="body2" fontWeight="medium">
                Legal
              </Typography>
              <Link href="#" variant="body2" color="text.secondary">
                Privacy Policy
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Terms of Service
              </Link>
              <br />
              <Link href="#" variant="body2" color="text.secondary">
                Contact
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 3,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Copyright />

          <Stack direction="row" spacing={1}>
            <IconButton size="small" href="#" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton size="small" href="#" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
