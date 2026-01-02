
// app/my-courses/components/usePreloadImages.ts

import { useEffect, useState } from "react";
import { courses } from "./coursesData";

export function usePreloadImages() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const preloadImages = async () => {
      const promises = courses.map(
        (course) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = course.img;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );

      await Promise.allSettled(promises);

      if (mounted) setLoading(false);
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, []);

  return loading;
}
