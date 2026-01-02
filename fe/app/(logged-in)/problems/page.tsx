
"use client";

import ProblemList from "../components/ProblemList";
import ProblemFilters from "../components/ProblemFilters";
import { useProblemsState } from "./components/useProblemsState";
import { Typography } from "@mui/material";

export default function ProblemsPage() {
  const {
    status,
    difficulty,
    topics,
    languages,
    visibleProblems,
    setStatus,
    setDifficulty,
    setTopics,
    setLanguages,
  } = useProblemsState();

  return (
    <div className="p-6 space-y-4">
      <Typography variant="h4" textAlign='center' fontWeight='bold'>Problem Set</Typography>
      <div className="flex flex-wrap justify-between gap-4 mt-5">
        <ProblemFilters
          status={status}
          difficulty={difficulty}
          topics={topics}
          languages={languages}
          onStatusChange={setStatus}
          onDifficultyChange={setDifficulty}
          onTopicsChange={setTopics}
          onLanguagesChange={setLanguages}
        />
      </div>

      <ProblemList problems={visibleProblems} />
    </div>
  );
}
