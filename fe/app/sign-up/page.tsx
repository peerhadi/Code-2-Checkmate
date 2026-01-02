'use client'
import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Code,
  DataObject,
  Terminal,
  Memory,
  Functions,
  Storage,
} from "@mui/icons-material";
import CustomCourseOnboarding from "./component";

const languages = [
  {
    name: "JavaScript",
    learners: "55M learners",
    icon: <Code sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Python",
    learners: "48M learners",
    icon: <DataObject sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Java",
    learners: "32M learners",
    icon: <Memory sx={{ fontSize: '50px' }} />,
  },
  {
    name: "C++",
    learners: "26M learners",
    icon: <Terminal sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Ruby",
    learners: "26M learners",
    icon: <Code sx={{ fontSize: '50px' }} />,
  },
  {
    name: "C",
    learners: "26M learners",
    icon: <Memory sx={{ fontSize: '50px' }} />,
  },
  {
    name: "TypeScript",
    learners: "21M learners",
    icon: <Functions sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Go",
    learners: "18M learners",
    icon: <Storage sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Rust",
    learners: "14M learners",
    icon: <Terminal sx={{ fontSize: '50px' }} />,
  },
  {
    name: "Kotlin",
    learners: "12M learners",
    icon: <Code sx={{ fontSize: '50px' }} />,
  },
];

export default function LearningLanguages() {
  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <Box sx={{ width: '100%', background: 'rgb(30,30,30)' }}>
      <Box sx={{ maxWidth: 900, mx: "auto", p: 4 }}>
        {selectedLanguage ? (
          <CustomCourseOnboarding language={selectedLanguage} />
        ) : (
<>
          <Typography
            variant="h3"
            align="center"
            sx={{ mt: 15 }}
            fontWeight={600}
            mb={4}
          >
            I want to learn…
          </Typography>

        {/* If a language is selected, render the onboarding component */}
        <Grid container spacing={3} sx={{ mt: 18 }}>
          {languages.map((lang,i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                  cursor: "pointer",
                  minWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '217px',
                  transition: "0.2s",
                  background: 'transparent',
                  "&:hover": {
                    boxShadow: 4,
                    background: 'rgb(25,25,25)',
                    transform: "translateY(-4px)",
                  },
                }}
                onClick={() => handleLanguageClick(lang)}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 1.5,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {lang.icon}
                  </Box>

                  <Typography fontWeight={600} variant="h6">
                    {lang.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {lang.learners}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </>
        )}
      </Box>
    </Box>
  );
}

