
"use client";
interface Props {
  search: string;
  status: string[];
  difficulty: string[];
  topics: string[];
  languages: string[];

  onSearchChange: (v: string) => void;
  onStatusChange: (v: string[]) => void;
  onDifficultyChange: (v: string[]) => void;
  onTopicsChange: (v: string[]) => void;
  onLanguagesChange: (v: string[]) => void;
  onSortChange: (option: string, order: "asc" | "desc") => void;
}


import { ReactNode, useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { Box, Fab, Menu, MenuItem, Select, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { CheckBoxOutlined, CodeOutlined, ColorLensOutlined, SellOutlined } from "@mui/icons-material";

interface Props {
  search: string;
  status: string[];
  difficulty: string[];
  topics: string[];
  languages: string[];

  onSearchChange: (v: string) => void;
  onStatusChange: (v: string[]) => void;
  onDifficultyChange: (v: string[]) => void;
  onTopicsChange: (v: string[]) => void;
  onLanguagesChange: (v: string[]) => void;
  onSortChange: (option: string, order: "asc" | "desc") => void;
}

export default function ProblemFilters(props: Props) {
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [sortOption, setSortOption] = useState<string>("Question ID");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [matchOption, setMatchOption] = useState<"Any" | "All">("Any");

  const openSort = Boolean(sortAnchorEl);
  const openFilter = Boolean(filterAnchorEl);

  const toggleSortOrder = (option: string) => {
    let order: "asc" | "desc" = "asc";
    if (option === sortOption) {
      order = sortOrder === "asc" ? "desc" : "asc";
    }
    setSortOption(option);
    setSortOrder(order);
    props.onSortChange(option, order);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={props.search}
        onChange={(e) => props.onSearchChange(e.target.value)}
        style={{background: 'rgb(44,44,44)'}}
        className="px-5 py-3 rounded-[50px] text-sm outline-none flex-1 min-w-[300px] text-[16px]"
      />

      {/* Sort FAB */}
      <Fab
        size="small"
        sx={{ background: 'rgb(35,35,35) !important' }}

        onClick={(e) => setSortAnchorEl(e.currentTarget)}
      >
        <SwapVertIcon />
      </Fab>
      <Menu
        anchorEl={sortAnchorEl}
        open={openSort}
        onClose={() => setSortAnchorEl(null)}
      >
        {["Difficulty", "Question ID", "Acceptance", "Last Submitted"].map((opt) => (
          <MenuItem
            key={opt}
            onClick={() => toggleSortOrder(opt)}
          >
            {opt} {sortOption === opt && (sortOrder === "asc" ? "↑" : "↓")}
          </MenuItem>
        ))}
      </Menu>

      {/* Filter FAB */}
      <Fab
        size="small"
        sx={{ background: 'rgb(35,35,35) !important' }}
        onClick={(e) => setFilterAnchorEl(e.currentTarget)}
      >
        <FilterAltIcon />
      </Fab>
      <Menu
        anchorEl={filterAnchorEl}
        open={openFilter}
        onClose={() => setFilterAnchorEl(null)}
        className="p-4 "
      >


        <div className="w-[360px] p-4 space-y-4 text-sm">

          {/* Match Any / All */}
          <div className="flex items-center gap-2 text-neutral-300">
            <span>Match</span>
            <Select
              size="small"
              value={matchOption}
              onChange={(e) => setMatchOption(e.target.value as "Any" | "All")}
              className="min-w-[70px]"
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
            <span>of the following filters:</span>
          </div>

          {/* Filters */}
          <div className="space-y-3">

            {/* Status */}
            <FilterRow
              icon={<CheckBoxOutlined/>}
              label="Status"
              value={props.status}
              options={["Solved", "Unsolved", "Attempted"]}
              onChange={props.onStatusChange}
            />

            {/* Difficulty */}
            <FilterRow
              icon={<ColorLensOutlined/>}
              label="Difficulty"
              value={props.difficulty}
              options={["Easy", "Medium", "Hard"]}
              onChange={props.onDifficultyChange}
            />

            {/* Topics */}
            <FilterRow
              icon={<SellOutlined/>}
              label="Topics"
              value={props.topics}
              options={["Array", "String", "DP", "Graph", "Tree"]}
              onChange={props.onTopicsChange}
            />

            {/* Language */}
            <FilterRow
              icon={<CodeOutlined/>}
              label="Language"
              value={props.languages}
              options={["Python", "JavaScript", "C++", "Java", "Go"]}
              onChange={props.onLanguagesChange}
            />

          </div>
        </div>
      </Menu>
    </div>
  );
}

type FilterRowProps = {
  icon: ReactNode 
  label: string
  value: string[]
  options: string[]
  onChange: (value: string[]) => void
}

function FilterRow({
  icon,
  label,
  value,
  options,
  onChange,
}: FilterRowProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Icon + Label */}
      <div className="flex items-center gap-2 w-[110px] text-neutral-400">
        <span>{icon}</span>
        <span>{label}</span>
      </div>

      {/* Operator */}
      <Select size="small" value="is" className="min-w-[60px]">
        <MenuItem value="is">is</MenuItem>
      </Select>

      {/* Value */}
      <Select
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1"
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>

      {/* Remove button placeholder */}
      <button className="text-neutral-500 hover:text-neutral-300">—</button>
    </div>
  )
}
