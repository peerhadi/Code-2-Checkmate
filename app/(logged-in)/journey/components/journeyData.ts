
// app/journey/components/journeyData.ts

export const units = [
  { section: "Section 1", unit: "Unit 1", title: "Learning Loops" },
  { section: "Section 1", unit: "Unit 2", title: "Nested Loops" },
  { section: "Section 2", unit: "Unit 1", title: "Arrays" },
  { section: "Section 2", unit: "Unit 2", title: "2D Arrays" },
];

export type Unit = typeof units[number];
