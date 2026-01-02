
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelIcon from '@mui/icons-material/LocalOffer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { LabelOutlined, LightbulbOutlined } from '@mui/icons-material';

const sections = [
  {
    title: 'Topics',
    icon: <LabelOutlined fontSize='small' />,
    content: 'Arrays, Hash Maps, Two Pointers',
  },
  {
    title: 'Hint 1',
    icon: <LightbulbOutlined fontSize='small' />,
    content: 'Think about using a hash map to track values efficiently.',
  },
  {
    title: 'Hint 2',
    icon: <LightbulbOutlined fontSize='small' />,
    content: 'Can you solve it in one pass?',
  },
  {
    title: 'Hint 3',
    icon: <LightbulbOutlined fontSize='small' />,
    content: 'Consider edge cases with duplicate values.',
  },
];

export default function InfoAccordion() {
  return (
    <Box
      sx={{
        background: '#1f1f1f',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
    <Box sx={{display: 'flex',gap: 1.5, p: 2, alignItems: 'center'}}>
    <Typography sx={{fontSize: '18px'}}> Difficulty: Easy</Typography>
    <Box sx={{width: '1px', height: '10px', backgroundColor: '#aaa'}}></Box>
    <Typography sx={{fontSize: '18px'}}>Accepted: 4,789,823</Typography>
    </Box>
    <Divider/>
      {sections.map((section, index) => (
        <Accordion
          key={section.title}
          disableGutters
          elevation={0}
          sx={{
            background: 'transparent',
            color: '#fff',
            '&:before': { display: 'none' },
            borderBottom:
              index !== sections.length - 1
                ? '1px solid rgba(255,255,255,0.08)'
                : 'none',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#888' }} />}
            sx={{
              py: 0.5,
              '& .MuiAccordionSummary-content': {
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              },
            }}
          >
            {section.icon}
            {section.title}
          </AccordionSummary>

          <AccordionDetails
            sx={{
              px: 3,
              pb: 2,
              color: '#bbb',
            }}
          >
            {section.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
