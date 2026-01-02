
"use client";

import { Problem } from "../types/problem";
import ProblemRow from "./ProblemRow";

interface Props {
  problems: Problem[];
}

export default function ProblemList({ problems }: { problems: Problem[] }) {
  return (
    <div>
      {
problems.map((problem, index) => (
  <ProblemRow
    key={problem.id}
    problem={problem}
    index={index}
  />
))
}
    </div>
  );
}

