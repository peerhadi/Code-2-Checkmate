
"use client";

import SearchIcon from "@mui/icons-material/Search";

interface Props {
  solved: number;
  total: number;
}

export default function ProblemHeader({ solved, total }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      {/* Search */}
      <div className="relative w-72">
        <SearchIcon className="absolute left-3 top-2.5 text-neutral-400" />
        <input
          placeholder="Search questions"
          className="
            w-full pl-10 pr-4 py-2
            rounded-full
            bg-neutral-900
            text-sm text-neutral-200
            border border-neutral-700
            focus:outline-none focus:ring-2 focus:ring-neutral-600
          "
        />
      </div>

      {/* Progress */}
      <div className="text-sm text-neutral-400">
        <span className="text-green-400">{solved}</span>/{total} Solved
      </div>
    </div>
  );
}
