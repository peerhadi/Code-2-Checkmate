
// app/journey/components/useActiveUnit.ts

import { useEffect, useState } from "react";
import { units } from "./journeyData";

export function useActiveUnit() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = 600;

      let index = Math.floor(scrollY / sectionHeight);
      index = Math.max(0, Math.min(index, units.length - 1));

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return units[activeIndex];
}
