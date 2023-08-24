"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export function AskedQuestion({ question, answer, list }) {
  return (
    <Accordion
      sx={{
        background: "none",
        boxShadow: "none",
      }}
      className="my-full"
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: "#EC9357",
              fontSize: "40px",
            }}
          />
        }
      >
        <Typography
          variant="h5"
          fontFamily="HelveticaNowTextBold"
          fontSize="1.2em"
          color="#EC9357"
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ color: "white" }}>
        <Typography fontFamily="HelveticaNowTextLight" fontSize="1em">
          {answer}
        </Typography>
        {list ? list : ""}
      </AccordionDetails>
    </Accordion>
  );
}
