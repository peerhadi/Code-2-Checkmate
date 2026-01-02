
'use client';

import { Grid } from "@mui/material";
import { courses } from "./coursesData";
import CourseCard from "./CourseCard";

export default function CoursesGrid() {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{maxWidth: '100%', width: '100%'}}>
      {courses.map((course, idx) => (
        <Grid item xs={18} sm={12} md={5.5} key={idx} sx={{ width: '360px' }}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
}
