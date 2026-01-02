
'use client';

import { Box } from "@mui/material";
import { units } from "./journeyData";
import JourneyDivider from "./JourneyDivider";
import StepNode from "./StepNode";

export default function JourneySteps() {
  return (
    <Box sx={{ mt: 7 }}>
      {units.map((u, i) => (
        <Box key={i} sx={{ mt: 5 }}>
          {i !== 0 && <JourneyDivider text={u.title} />}
          <StepNode type={i === 0 ? "active" : "inactive"} offset={0} />
          <StepNode type="inactive" offset={-50} />
          <StepNode type="inactive" offset={-20} />
          <StepNode type="inactive" offset={30} />
          <StepNode type="trophy" offset={0} />
        </Box>
      ))}
    </Box>
  );
}
