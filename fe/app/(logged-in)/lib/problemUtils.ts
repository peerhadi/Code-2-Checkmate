
import { Problem } from "../types/problem";
import { SortOption } from "../types/sort";

export function filterProblems(
  problems: Problem[],
  filters: {
    status: string[];
    difficulty: string[];
    topics: string[];
    languages: string[];
  }
) {
  return problems.filter((p) => {
    if (filters.status.length && !filters.status.includes(p.status)) return false;
    if (filters.difficulty.length && !filters.difficulty.includes(p.difficulty))
      return false;
    if (filters.topics.length && !filters.topics.some(t => p.topics.includes(t)))
      return false;
    if (
      filters.languages.length &&
      !filters.languages.some(l => p.languages.includes(l))
    )
      return false;

    return true;
  });
}

export function sortProblems(problems: Problem[], sort: SortOption) {
  const copy = [...problems];

  switch (sort) {
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "acceptance-desc":
      return copy.sort((a, b) => b.acceptance - a.acceptance);
    case "acceptance-asc":
      return copy.sort((a, b) => a.acceptance - b.acceptance);
    case "difficulty":
      return copy.sort(
        (a, b) =>
          ["Easy", "Medium", "Hard"].indexOf(a.difficulty) -
          ["Easy", "Medium", "Hard"].indexOf(b.difficulty)
      );
    default:
      return copy;
  }
}
