
'use client'
import * as React from 'react';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import LoginIcon from '@mui/icons-material/Login';
import ListIcon from '@mui/icons-material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Cancel, Chat, Face, Home, Info, LibraryBooks, People, Settings, SportsEsports } from '@mui/icons-material';

import { useRouter, usePathname } from 'next/navigation';

const drawerWidth = 260;

const pages = [
  { name: 'Current Course', link: '/journey', icon: <Home /> },      // Primary learning path
  { name: 'My Courses', link: '/my-courses', icon: <LibraryBooks /> },  // Personal progress
  { name: 'Problems', link: '/problems', icon: <ListIcon /> },       // Practice / problem solving
  { name: 'Arena', link: '/arena', icon: <People /> },               // Competitive play / multiplayer
  { name: 'Leaderboard', link: '/leaderboard', icon: <EmojiEventsIcon /> }, // Rankings & achievements
  { name: 'Chessboard', link: '/chessboard', icon: <SportsEsports /> },     // AI chess integration
  { name: 'Chat Bot', link: '/chatbot', icon: <Chat /> },            // Help / AI assistant
  { name: 'Profile', link: '/profile', icon: <Face /> },             // User info
  { name: 'Settings', link: '/settings', icon: <Settings /> },       // Preferences
  { name: 'About Us', link: '/about-us', icon: <Info /> },           // Info / company
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  // Split pages: first 4 visible, rest in "More"
  const visiblePages = pages.slice(0, 6);
  const morePages = pages.slice(6);

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '245px',
        background: 'rgb(30,30,30)',
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <Toolbar sx={{ justifyContent: 'space-between', py: 3, px: 2 }}>
        <Box
          component="img"
          src="./logo.png"
          sx={{ width: '160px', cursor: 'pointer' }}
          onClick={() => router.push('/')}
        />
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 2, mt: 0.5 }}>
            <Cancel />
          </IconButton>
        )}
      </Toolbar>

      <Divider sx={{ mb: 2 }} />

      <List sx={{ flexGrow: 1, px: 2 }}>
        {visiblePages.map((page) => {
          const isActive = pathname === page.link;
          return (
            <ListItem key={page.name} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => {
                  router.push(page.link);
                  if (isMobile) setMobileOpen(false);
                }}
                sx={{
                  borderRadius: '10px',
                  backgroundColor: isActive ? 'primary.dark' : 'transparent',
                  color: isActive ? 'primary.main' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: isActive ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'inherit', minWidth: '40px' }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.name} primaryTypographyProps={{ fontWeight: isActive ? 600 : 400 }} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/* More Menu */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton onClick={handleMoreClick} sx={{ borderRadius: '10px', color: 'text.secondary' }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <MoreHorizIcon />
            </ListItemIcon>
            <ListItemText primary="More" primaryTypographyProps={{ fontWeight: 400 }} />
          </ListItemButton>
          <Menu anchorEl={moreAnchorEl} open={Boolean(moreAnchorEl)} onClose={handleMoreClose}>
            {morePages.map((page) => (
              <MenuItem
                key={page.name}
                sx={{p: 2, width: '200px'}}
                onClick={() => {
                  router.push(page.link);
                  handleMoreClose();
                  if (isMobile) setMobileOpen(false);
                }}
              >
                <ListItemIcon sx={{ minWidth: 30 }}>{page.icon}</ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </ListItem>
      </List>

      {/* Footer / Auth */}
      <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button variant="outlined" fullWidth startIcon={<LoginIcon />} sx={{ textTransform: 'none', borderRadius: '8px' }} onClick={() => router.push('/sign-in')}>
            Sign In
          </Button>
          <Button variant="contained" fullWidth startIcon={<PersonAddIcon />} sx={{ textTransform: 'none', borderRadius: '8px', boxShadow: 'none' }}  onClick={() => router.push('/sign-up')}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', maxWidth: '245px', padding: 0, position: 'fixed' }}>
      {/* Mobile AppBar */}
      {isMobile && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, p: 2, zIndex: -1 }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} sx={{ boxShadow: 1 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: -1,
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: 'rgb(30,30,30)',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

    </Box>
  );
}

