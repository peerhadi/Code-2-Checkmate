

"use client";

import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Problem } from "../types/problem";
import DifficultyBadge from "./DifficultyBadge";
import { Check, PanoramaFishEye } from "@mui/icons-material";

interface Props {
  problem: Problem;
  index: number;
}


export default function ProblemRow({ problem, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`
        grid grid-cols-[40px_1fr_100px_100px_40px]
        items-center
        px-4 py-3
        rounded-lg
        ${isEven ? "bg-neutral-900/40" : ""}
        cursor-pointer
      `}
    >
      {/* Status */}
<div className="flex items-center">
  {problem.status === "Solved" && (
    <Check className="fill-[rgb(9,143,39)]!" fontSize="small" />
  )}

  {problem.status === "Attempted" && (
    <PanoramaFishEye className="fill-[rgb(142,142,142)]!" fontSize="small" />
  )}
</div>
      {/* Title */}
      <div className="font-medium">
        {problem.id}. {problem.title}
      </div>

      {/* Acceptance */}
      <div className="text-neutral-400 text-sm">
        {problem.acceptance.toFixed(1)}%
      </div>

      {/* Difficulty */}
      <DifficultyBadge level={problem.difficulty} />

    </div>
  );
}

