
'use client';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
} from "@mui/material";
import { Course } from "./coursesData";
const INACTIVE_BLUE = '#4da3ff';
export default function CourseCard({ course }: { course: Course }) {
  return (


    <Card
      sx={{
        bgcolor: course.active
          ? 'linear-gradient(135deg, #ff4d8d 0%, #9b5cff 45%, #3bd6c6 100%)'
          : 'rgba(20,20,20,0.9)',

        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        color: '#fff',

        // 🔥 Neon presence even when inactive

        boxShadow: course.active
          ? '0 0 25px rgba(155,92,255,0.45), inset 0 0 20px rgba(255,77,141,0.25)'
          : `
    inset 0 0 12px rgba(77,163,255,0.18),
    0 0 14px rgba(77,163,255,0.22)
  `,

        border: course.active
          ? '1px solid rgba(255,255,255,0.15)'
          : '1px solid rgba(77,163,255,0.45)',

        transition: 'all 0.35s ease',


        '&:hover': {
          transform: 'translateY(-6px) scale(1.01)',
          boxShadow: course.active
            ? `
      0 0 35px rgba(59,214,198,0.6),
      0 0 80px rgba(155,92,255,0.35),
      inset 0 0 25px rgba(255,77,141,0.35)
    `
            : `
      0 0 26px rgba(77,163,255,0.6),
      inset 0 0 20px rgba(77,163,255,0.4)
    `,
    cursor: 'pointer'
        },
      }}
    >

      {course.active && (

        <Chip
          label="Active"
          sx={{
            position: 'absolute',
            zIndex: 10,
            top: 12,
            right: 12,
            fontWeight: 700,
            background:
              'linear-gradient(90deg, #3bd6c6, #9b5cff)',
            color: 'white !important',
            boxShadow: '0 0 12px rgba(59,214,198,0.8)',
          }}
        />
      )}


      <CardMedia
        component="img"
        image={course.img}
        alt={course.title}
        sx={{
          maxHeight: '150px',
          filter: course.active ? 'brightness(0.9) saturate(1.2)' : 'brightness(0.7)',
        }}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {course.title}
        </Typography>

        <Stack spacing={0.5}>
          <Typography variant="caption" sx={{ color: '#B3B3B3' }}>
            {course.progress}% Completed
          </Typography>


          <Box
            sx={{
              height: 10,
              width: '100%',
              bgcolor: 'rgba(255,255,255,0.08)',
              borderRadius: 5,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: `${course.progress}%`,

                background: course.active
                  ? 'linear-gradient(90deg, #ff4d8d, #9b5cff, #3bd6c6)'
                  : 'linear-gradient(90deg, #4da3ff, #6ecbff)',
                boxShadow: course.active
                  ? '0 0 12px rgba(155,92,255,0.9)'
                  : '0 0 10px rgba(77,163,255,0.7)',

                borderRadius: 5,
                transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
              }}
            />
          </Box>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>


        <Button
          fullWidth
          sx={{

            background: course.active
              ? 'linear-gradient(90deg, #ff4d8d, #9b5cff, #3bd6c6)'
              : 'rgba(77,163,255,0.08)',

            color: course.active ? '#fff' : '#4da3ff',
            border: '1px solid rgba(77,163,255,0.6)',

            boxShadow: course.active
              ? '0 0 20px rgba(155,92,255,0.7)'
              : '0 0 14px rgba(77,163,255,0.6)',

            '&:hover': {
              boxShadow: course.active
                ? `
      0 0 25px rgba(255,77,141,0.8),
      0 0 45px rgba(155,92,255,0.6)
    `
                : '0 0 22px rgba(77,163,255,0.85)',
            },
          }}
        >
          {course.active ? 'Continue' : 'Start'}
        </Button>
      </CardActions>
    </Card>
  );
}
