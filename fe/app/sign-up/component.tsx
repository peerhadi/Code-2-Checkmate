
import * as React from "react";
import {
  IconButton,
  LinearProgress,
  TextField,
} from "@mui/material";

// ICONS
import WorkIcon from "@mui/icons-material/Work";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ExploreIcon from "@mui/icons-material/Explore";

import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import ExtensionIcon from "@mui/icons-material/Extension";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EngineeringIcon from "@mui/icons-material/Engineering";
import StarIcon from "@mui/icons-material/Star";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import ApiIcon from "@mui/icons-material/Api";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import ConstructionIcon from "@mui/icons-material/Construction";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BugReportIcon from "@mui/icons-material/BugReport";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import ScheduleIcon from "@mui/icons-material/Schedule";
import SpeedIcon from "@mui/icons-material/Speed";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MemoryIcon from "@mui/icons-material/Memory";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FolderIcon from "@mui/icons-material/Folder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import ElderlyIcon from "@mui/icons-material/Elderly";
const QUESTIONS = [
  {
    text: "What is your main goal for learning to code?",
    options: [
      { label: "Get my first coding job", icon: <WorkIcon sx={{ fontSize: '40px' }} /> },
      { label: "Switch careers into tech", icon: <SwapHorizIcon sx={{ fontSize: '40px' }} /> },
      { label: "Improve performance at work", icon: <TrendingUpIcon sx={{ fontSize: '40px' }} /> },
      { label: "Build my own product or startup", icon: <RocketLaunchIcon sx={{ fontSize: '40px' }} /> },
      { label: "Automate tasks", icon: <AutoFixHighIcon sx={{ fontSize: '40px' }} /> },
      { label: "Pass an exam or interview", icon: <SchoolIcon sx={{ fontSize: '40px' }} /> },
      { label: "Learn coding as a hobby", icon: <SportsEsportsIcon sx={{ fontSize: '40px' }} /> },
      { label: "Explore before committing", icon: <ExploreIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "How would you describe your current coding level?",
    options: [
      { label: "Never coded before", icon: <HelpOutlineIcon sx={{ fontSize: '40px' }} /> },
      { label: "Tried once, didn’t continue", icon: <ShuffleIcon sx={{ fontSize: '40px' }} /> },
      { label: "Know basic syntax", icon: <CodeIcon sx={{ fontSize: '40px' }} /> },
      { label: "Comfortable with fundamentals", icon: <TerminalIcon sx={{ fontSize: '40px' }} /> },
      { label: "Can build small projects", icon: <BuildIcon sx={{ fontSize: '40px' }} /> },
      { label: "Understand advanced concepts", icon: <PsychologyIcon sx={{ fontSize: '40px' }} /> },
      { label: "Professional experience", icon: <StarIcon sx={{ fontSize: '40px' }} /> },
      { label: "Unsure / mixed level", icon: <ExtensionIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "What do you want to build most?",
    options: [
      { label: "Websites", icon: <WebIcon sx={{ fontSize: '40px' }} /> },
      { label: "Mobile apps", icon: <PhoneIphoneIcon sx={{ fontSize: '40px' }} /> },
      { label: "Games", icon: <SportsEsportsOutlinedIcon sx={{ fontSize: '40px' }} /> },
      { label: "Data analysis tools", icon: <BarChartIcon sx={{ fontSize: '40px' }} /> },
      { label: "AI / ML projects", icon: <SmartToyIcon sx={{ fontSize: '40px' }} /> },
      { label: "Automation scripts", icon: <SettingsIcon sx={{ fontSize: '40px' }} /> },
      { label: "APIs / backend systems", icon: <ApiIcon sx={{ fontSize: '40px' }} /> },
      { label: "Not sure yet", icon: <HelpOutlineIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "Which learning style do you prefer?",
    options: [
      { label: "Step-by-step guidance", icon: <MenuBookIcon sx={{ fontSize: '40px' }} /> },
      { label: "Project-based learning", icon: <ConstructionIcon sx={{ fontSize: '40px' }} /> },
      { label: "Practice first", icon: <FitnessCenterIcon sx={{ fontSize: '40px' }} /> },
      { label: "Theory then practice", icon: <SchoolOutlinedIcon sx={{ fontSize: '40px' }} /> },
      { label: "Problem-solving challenges", icon: <EmojiObjectsIcon sx={{ fontSize: '40px' }} /> },
      { label: "Debugging & fixing", icon: <BugReportIcon sx={{ fontSize: '40px' }} /> },
      { label: "Visual explanations", icon: <VisibilityIcon sx={{ fontSize: '40px' }} /> },
      { label: "Trial and error", icon: <ShuffleIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "How much time can you dedicate per week?",
    options: [
      { label: "< 2 hours", icon: <HourglassBottomIcon sx={{ fontSize: '40px' }} /> },
      { label: "2–4 hours", icon: <ScheduleIcon sx={{ fontSize: '40px' }} /> },
      { label: "4–6 hours", icon: <ScheduleIcon sx={{ fontSize: '40px' }} /> },
      { label: "6–8 hours", icon: <SpeedIcon sx={{ fontSize: '40px' }} /> },
      { label: "8–10 hours", icon: <SpeedIcon sx={{ fontSize: '40px' }} /> },
      { label: "10–15 hours", icon: <FlashOnIcon sx={{ fontSize: '40px' }} /> },
      { label: "15+ hours", icon: <FlashOnIcon sx={{ fontSize: '40px' }} /> },
      { label: "Varies weekly", icon: <ShuffleIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "What pace do you prefer?",
    options: [
      { label: "Very slow & detailed", icon: <HourglassBottomIcon sx={{ fontSize: '40px' }} /> },
      { label: "Slow but steady", icon: <ScheduleIcon sx={{ fontSize: '40px' }} /> },
      { label: "Balanced", icon: <SpeedIcon sx={{ fontSize: '40px' }} /> },
      { label: "Fast-paced", icon: <FlashOnIcon sx={{ fontSize: '40px' }} /> },
      { label: "Bootcamp style", icon: <FlashOnIcon sx={{ fontSize: '40px' }} /> },
      { label: "Self-paced", icon: <ShuffleIcon sx={{ fontSize: '40px' }} /> },
      { label: "Flexible by topic", icon: <ExtensionIcon sx={{ fontSize: '40px' }} /> },
      { label: "Not sure yet", icon: <HelpOutlineIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "What is your biggest challenge with coding?",
    options: [
      { label: "Understanding concepts", icon: <PsychologyIcon sx={{ fontSize: '40px' }} /> },
      { label: "Remembering syntax", icon: <MemoryIcon sx={{ fontSize: '40px' }} /> },
      { label: "Applying knowledge", icon: <HandymanIcon sx={{ fontSize: '40px' }} /> },
      { label: "Debugging errors", icon: <BugReportIcon sx={{ fontSize: '40px' }} /> },
      { label: "Staying motivated", icon: <EmojiObjectsIcon sx={{ fontSize: '40px' }} /> },
      { label: "Math or logic", icon: <EngineeringIcon sx={{ fontSize: '40px' }} /> },
      { label: "Tool setup", icon: <BuildIcon sx={{ fontSize: '40px' }} /> },
      { label: "Not sure yet", icon: <HelpOutlineIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "What outcome do you want?",
    options: [
      { label: "Certificate", icon: <EmojiEventsIcon sx={{ fontSize: '40px' }} /> },
      { label: "Portfolio projects", icon: <FolderIcon sx={{ fontSize: '40px' }} /> },
      { label: "Job-ready skills", icon: <WorkOutlineIcon sx={{ fontSize: '40px' }} /> },
      { label: "One finished project", icon: <CheckCircleOutlineIcon sx={{ fontSize: '40px' }} /> },
      { label: "Better problem solving", icon: <EmojiObjectsIcon sx={{ fontSize: '40px' }} /> },
      { label: "Confidence in coding", icon: <StarIcon sx={{ fontSize: '40px' }} /> },
      { label: "Strong foundation", icon: <BuildIcon sx={{ fontSize: '40px' }} /> },
      { label: "Just experimenting", icon: <ExploreIcon sx={{ fontSize: '40px' }} /> }
    ]
  },
  {
    text: "How old are you?",
    options: [
      { label: "< 5 years", icon: <ChildCareIcon sx={{ fontSize: 40 }} /> },
      { label: "5–10 years", icon: <EmojiEmotionsIcon sx={{ fontSize: 40 }} /> },
      { label: "10–13 years", icon: <SchoolIcon sx={{ fontSize: 40 }} /> },
      { label: "13–18 years", icon: <FaceIcon sx={{ fontSize: 40 }} /> },
      { label: "18–30 years", icon: <PersonIcon sx={{ fontSize: 40 }} /> },
      { label: "30–40 years", icon: <PersonOutlineIcon sx={{ fontSize: 40 }} /> },
      { label: "40–60 years", icon: <GroupsIcon sx={{ fontSize: 40 }} /> },
      { label: "> 60 years", icon: <ElderlyIcon sx={{ fontSize: 40 }} /> }
    ]
  }
];

export default function CustomCourseOnboarding() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);

  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleSelect = (option) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = option;
    setAnswers(nextAnswers);

    if (step < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };
  if (step === QUESTIONS.length) {
    return (
      <>

        <SignupStep
          onSubmit={(data) => {
            console.log("Signup data:", data);

            // simulate API success
            setSuccessOpen(true);
          }}
        />

        <SuccessDialog
          open={successOpen}
          onClose={() => setSuccessOpen(false)}
        />
      </>
    );
  }

  const question = QUESTIONS[step];

  return (
    <Box sx={{ maxWidth: '80vw', mx: "auto", p: 2 }}>
      <Box sx={{display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center'}}>
        <IconButton onClick={() => setStep(Math.min(0, step - 1))}>
          <ArrowBack />
        </IconButton>
        <LinearProgress
          variant="determinate"
          value={((step) / QUESTIONS.length) * 100}
          sx={{
            height: 8,
            borderRadius: 4,
            width: '100%',
            backgroundColor: "rgba(255,255,255,0.15)",
            '& .MuiLinearProgress-bar': {
              background: 'lime'
            }
          }}
        />
      </Box>
      <Box sx={{ px: 17, py: 3 }}>
        <Box
          sx={{
            display: "inline-block",
            ml: 6,
            px: 3,
            py: 2,
            mb: 4,
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.25)"
          }}
        >
          <Typography fontSize={'large'}>{question.text}</Typography>
        </Box>

        <Stack spacing={2} sx={{ mt: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {[0, 2, 4, 6].map((i) => (
            <Stack key={i} direction="row" spacing={2} sx={{ width: 800 }}>
              <OptionButton
                {...question.options[i]}
                onClick={() => handleSelect(question.options[i].label)}
              />
              <OptionButton
                {...question.options[i + 1]}
                onClick={() => handleSelect(question.options[i + 1].label)}
              />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function OptionButton({ icon, label, onClick }) {
  return (
    <Button
      fullWidth
      onClick={onClick}
      sx={{
        justifyContent: "flex-start",
        px: 3,
        py: 3,
        gap: 2,
        fontSize: '18px',
        borderRadius: 2,
        textTransform: "none",
        border: "1px solid rgba(255,255,255,0.25)",
        background: "transparent",
        "&:hover": { background: "rgba(255,255,255,0.05)" },
      }}
    >
      {icon}
      {label}
    </Button>
  );
}

function StyledField(props: any) {
  return (
    <TextField
      fullWidth
      {...props}
      variant="outlined"
      InputLabelProps={{
        sx: {
          color: "rgba(255,255,255,0.6)",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          background: "transparent",
          "& fieldset": {
            borderColor: "rgba(255,255,255,0.25)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(255,255,255,0.4)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#7c7cff",
          },
        },
      }}
    />
  );
}

import {
  Divider,
  Stack,
} from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

export function SignupStep({
  onSubmit,
}: {
  onSubmit: (data: any) => void
}) {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange =
    (key: keyof typeof form) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [key]: e.target.value })
      }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          px: 20,
          py: 6,
          minWidth: 780,
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 600,
            mb: 1,
            textAlign: "center",
          }}
        >
          Just a few details…
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            color: "text.secondary",
            textAlign: "center",
            mb: 5,
          }}
        >
          Finish setting up your account to continue
        </Typography>

        {/* OAuth Buttons */}
        {/* Form */}
        <Stack spacing={3}>
          <Stack direction="row" spacing={2}>
            <StyledField
              label="First name"
              value={form.firstName}
              onChange={handleChange("firstName")}
            />
            <StyledField
              label="Last name"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
          </Stack>

          <StyledField
            label="Email address"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />

          <StyledField
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
          />

          <Button
            onClick={() => onSubmit(form)}
            sx={{
              mt: 2,
              py: 2.2,
              fontSize: 16,
              borderRadius: 2,
              textTransform: "none",
              background:
                "linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)",
              color: "#fff",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            Create account
          </Button>
        </Stack>
        {/* Divider */}
        <Divider sx={{ my: 4 }}>
          <Typography
            sx={{
              fontSize: 13,
              color: "text.secondary",
            }}
          >
            OR
          </Typography>
        </Divider>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.6,
              fontSize: 15,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Sign up with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{
              py: 1.6,
              fontSize: 15,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Sign up with GitHub
          </Button>
        </Stack>




      </Box>
    </Box>
  )
}


import {
  Box,
  Button,
  Dialog,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";

export function SuccessDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          background: "rgba(20,20,30,0.95)",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.2)",
          px: 6,
          py: 5,
          textAlign: "center",
        },
      }}
    >
      {/* Animated Check */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          animation: "pop 0.6s ease-out",
          "@keyframes pop": {
            "0%": { transform: "scale(0.5)", opacity: 0 },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        }}
      >
        <CheckCircleRoundedIcon
          sx={{
            fontSize: 80,
            color: "#7c7cff",
            filter: "drop-shadow(0 0 12px rgba(124,124,255,0.6))",
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 600,
          mb: 1,
        }}
      >
        Successful
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 4,
          maxWidth: 320,
        }}
      >
        Your courses are being prepared.
        This usually takes 5–10 minutes.
      </Typography>

      <Button
        onClick={() => router.push("/journey")}
        sx={{
          px: 5,
          py: 1.5,
          fontSize: 16,
          borderRadius: 2,
          textTransform: "none",
          background:
            "linear-gradient(90deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)",
          color: "#fff",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        Explore
      </Button>
    </Dialog>
  );
}
