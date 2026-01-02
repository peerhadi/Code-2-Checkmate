"use client";

import { Difficulty } from "../types/problem";

export default function DifficultyBadge({ level }: { level: Difficulty }) {
  const colorClasses: Record<Difficulty, string> = {
    Easy: "text-[rgb(26,186,186)]!",
    Medium: "text-[rgb(255,183,0)]!",
    Hard: "text-[rgb(243,56,56)]!",
  };

  const labels: Record<Difficulty, string> = {
    Easy: "Easy",
    Medium: "Med.",
    Hard: "Hard",
  };

  return (
    <span className={`font-medium text-sm ${colorClasses[level]}`}>
      {labels[level]}
    </span>
  );
}
