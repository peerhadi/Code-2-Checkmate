
"use client";

import {
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";

interface Props {
  label: string;
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}

export default function MultiSelectFilter({
  label,
  options,
  value,
  onChange,
}: Props) {
  return (
    <Select
      multiple
      size="small"
      displayEmpty
      value={value}
      onChange={(e) => onChange(e.target.value as string[])}
      renderValue={(selected) =>
        selected.length ? selected.join(", ") : label
      }
      className="min-w-[160px]"
    >
      {options.map((opt) => (
        <MenuItem key={opt} value={opt}>
          <ListItemText primary={opt} />
        </MenuItem>
      ))}
    </Select>
  );
}
