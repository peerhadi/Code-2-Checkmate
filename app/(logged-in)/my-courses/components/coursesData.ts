
// app/my-courses/components/coursesData.ts

export type Course = {
  title: string;
  progress: number;
  active: boolean;
  img: string;
};

export const courses: Course[] = [
  { title: 'JavaScript Basics', progress: 45, active: true, img: 'https://picsum.photos/800/450?random=34' },
  { title: 'Advanced React', progress: 70, active: false, img: 'https://picsum.photos/800/450?random=35' },
  { title: 'Data Structures', progress: 30, active: false, img: 'https://picsum.photos/800/450?random=36' },
  { title: 'Algorithms', progress: 90, active: false, img: 'https://picsum.photos/800/450?random=37' },
  { title: 'AI Chess Integration', progress: 15, active: false, img: 'https://picsum.photos/800/450?random=38' },
  { title: 'TYPESCRIPT', progress: 15, active: false, img: 'https://picsum.photos/800/450?random=39' },
];
