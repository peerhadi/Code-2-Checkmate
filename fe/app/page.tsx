'use client'
import { Tabs, Tab } from "@mui/material"
import * as React from 'react'
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined"
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const isActive = value === index;

  return (
    <Box
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      aria-hidden={!isActive}
      {...other}
      sx={{
        position: isActive ? 'relative' : 'absolute',
        inset: 0,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

function TabLabel({
  icon,
  title,
  subtitle,
  active,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  active: boolean
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          color: active ? "primary.main" : "text.secondary",
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: active ? "primary.main" : "text.primary",
            textTransform: 'none'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: "text.secondary",
            textTransform: 'none'
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function FeatureTabs() {
  const [value, setValue] = React.useState(1)

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        centered
        TabIndicatorProps={{
          sx: {
            height: 3,
            borderRadius: 2,
          },
        }}
        sx={{
          minHeight: 72,
        }}
      >
        <Tab
          disableRipple
          label={
            <TabLabel
              icon={<SchoolOutlinedIcon />}
              title="Courses"
              subtitle="Comprehensive coding courses"
              active={value === 0}
              {...a11yProps(0)}
            />
          }
        />

        <Tab
          disableRipple
          label={
            <TabLabel
              icon={<BuildOutlinedIcon />}
              title="Problems"
              subtitle="Difficulty-based coding problems"
              active={value === 1}
              {...a11yProps(1)}
            />
          }
        />

        <Tab
          disableRipple
          label={
            <TabLabel
              icon={<MapOutlinedIcon />}
              title="Roadmaps"
              subtitle="Step-by-step learning paths"
              active={value === 2}
              {...a11yProps(2)}
            />
          }
        />

        <Tab
          disableRipple
          label={
            <TabLabel
              icon={<AnalyticsOutlinedIcon />}
              title="Gamification"
              subtitle="Changing boredom to enjoyment"
              active={value === 3}
              {...a11yProps(3)}
            />
          }
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className="w-full flex justify-center">
          <Image src='/X1.png?=' width={1000} height={576} alt={'Something'} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

        <div className="w-full flex justify-center">
          <Image src='/X4.png?=' width={1000} height={576} alt={'Something'} />
        </div>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="w-full flex justify-center">
          <Image src='/X3.png?=' width={1000} height={576} alt={'Something'} />
        </div>
      </CustomTabPanel>     <CustomTabPanel value={value} index={3}>
        <div className="w-full flex justify-center">
          <Image src='/X2.png?=1297' width={1000} height={576} alt={'Something'} />
        </div>      </CustomTabPanel>
    </Box>
  )
}
export default function App() {
  const router = useRouter();
  return (
    <Box sx={{ pb: 5 }}>

      <Box sx={{ mt: 10, display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Typography
          variant='h3'
          sx={{ fontWeight: 'bold' }}>
          Code Your Way to
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Checkmate
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          variant='body1'
          textAlign={'center'}
          sx={{ mt: 4, width: '560px', }}>
          Master <b>data structures</b> and <b>algorithms</b> through <b>chess-inspired</b> challenges.
          Solve problems, win matches, and sharpen your <b>logic—one</b> move at a time.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button sx={{
            background: 'linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)',
            color: 'white',
            p: 1.5,
            borderRadius: 2,
            width: '200px'
          }} onClick={() => router.push('/sign-up')}>
            Get Started
          </Button>
          <Button variant='outlined'
            sx={{
              p: 1.5,
              border: '1px solid white',
              borderRadius: 2,
              width: '275px'
            }} onClick={() => router.push('/sign-in')}>
            I already have an account
          </Button>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, flexDirection: 'column' }}>

        <FeatureTabs />
        <Chip label='Features' variant='outlined' sx={{ color: 'dodgerblue', width: '100px', borderColor: 'dodgerblue' }} />
        <Typography variant='h6' sx={{ mt: 4, fontWeight: 'bold' }}>Powerful Ways to Enhance Your Learning Experience</Typography>
        <Typography variant='body1' sx={{ mt: 2, maxWidth: '350px', textAlign: 'center' }}>Explore the tools that are designed to help you learn faster and achieve your goals.</Typography>
        <FeaturesGrid />
      </Box>
    </Box>
  );
}

import { Grid, Card, CardMedia, CardContent, Box, Typography, Button, Chip, } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "next/navigation"

const features = [
  {
    title: 'Code to Move Pieces',
    description:
      'Solve algorithmic challenges to unlock chess moves. Every correct solution brings you closer to checkmate.',
    image:
      '/Card1.png',
  },
  {
    title: 'LeetCode-Style Problems',
    description:
      'Practice real interview-level problems covering arrays, graphs, dynamic programming, and more.',
    image:
      '/Card2.png',
  },
  {
    title: 'Rank Up Your Chess Board',
    description:
      'Progress from Pawn to Grandmaster as your coding and strategic thinking improve.',
    image:
      '/Card3.png',
  },
  {
    title: 'Battle Friends & AI',
    description:
      'Challenge friends or AI opponents where logic, not luck, decides the winner.',
    image:
      '/Card4.png',
  },
];

function FeaturesGrid() {
  return (
    <Grid container spacing={4} width={'1200px'} display={'flex'} justifyContent={'center'} mt={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ height: '100%', maxWidth: '500px' }}>
            <CardMedia>
              <Image src={feature.image + '?=1297'} height={180} width={500} alt={`Card${index}`} />
            </CardMedia>
            <CardContent sx={{background: 'rgb(30,30,30)'}}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

