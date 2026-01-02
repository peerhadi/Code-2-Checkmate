
export type Difficulty = "Easy" | "Medium" | "Hard";
export type Status = "Solved" | "Unsolved" | "Attempted";

export interface Problem {
  id: number | string;
  title: string;
  difficulty: Difficulty;
  status: Status;
  acceptance: number;
  topics: string[];
  languages: string[];
}

