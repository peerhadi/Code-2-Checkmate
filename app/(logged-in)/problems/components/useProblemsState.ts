
// app/problems/components/useProblemsState.ts
import { useMemo, useState } from "react";
import { SortOption } from "../../types/sort";
import { filterProblems, sortProblems } from "../../lib/problemUtils";
import { problems } from "./problemsData";

export function useProblemsState() {
  const [sort, setSort] = useState<SortOption>("title-asc");
  const [status, setStatus] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const visibleProblems = useMemo(() => {
    const filtered = filterProblems(problems, {
      status,
      difficulty,
      topics,
      languages,
    });

    return sortProblems(filtered, sort);
  }, [sort, status, difficulty, topics, languages]);

  return {
    sort,
    status,
    difficulty,
    topics,
    languages,
    visibleProblems,
    setSort,
    setStatus,
    setDifficulty,
    setTopics,
    setLanguages,
  };
}
