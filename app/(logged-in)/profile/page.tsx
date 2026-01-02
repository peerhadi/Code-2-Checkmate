
"use client";

import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    sx: {
      width: '200px',
      mt: 1,
    },
    color: 'secondary',
    variant: 'fullWidth',
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function ProfilePage() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ minHeight: "100vh", py: 3, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ background: 'rgb(25,25,25)', borderRadius: 2, height: '100vh', pb: 2 }}>
        <Box sx={{ background: 'rgb(81,81,81)', borderTopRightRadius: 10, borderTopLeftRadius: 10, width: '1100px', height: '200px', p: 2, display: 'flex', alignItems: 'end' }}>
        </Box>
        <Box sx={{ width: '1000px', display: 'flex', justifyContent: 'start' }}>
          <Avatar sx={{ width: 200, height: 200, mt: '-60px', ml: 5 }}></Avatar>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}> Peer Hadi Taha</Typography>
            <Typography sx={{ fontSize: '17px', mt: 2 }}> The boxed moved. That was a problem. Peter had packed the box three hours before and there was nothing inside that should make it move. The question now was whether or not Peter was going to open it up and look inside to see why it had moved.</Typography>
          </Box>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profile" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: 'flex', gap: '25%' }}>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
                <Typography>Peer Hadi Taha</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Age</Typography>
                <Typography>15 years</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>First name</Typography>
                <Typography>Hadi</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Last name</Typography>
                <Typography>Taha</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Phone Number</Typography>
                <Typography>(+91) 7889783716</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>ELO</Typography>
                <Typography>1500</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Rebirths</Typography>
                <Typography>67</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Problems Solved</Typography>
                <Typography>501</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Main Language</Typography>
                <Typography>Javascript</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Join Date</Typography>
                <Typography>27th Dec 2025</Typography>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
