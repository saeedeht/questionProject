import { Box, Button, Stack } from "@mui/material";
import { FC, ReactNode } from "react";
import {
  BookmarkBorder as BookmarkBorderIcon,
  VisibilityOffOutlined as VisibilityOffOutlinedIcon,
  ReportProblemOutlined as ReportProblemOutlinedIcon,
} from "@mui/icons-material";

export interface Question {
  id: string;
  interactions: any[];
}

export interface QuestionProps {
  n: number;
  question: Question;
  children: ReactNode;
}

const Question: FC<QuestionProps> = ({ n, question, children }) => (
  <Stack
    direction="column"
    spacing={4}
    sx={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "24px",
    }}
  >
    <Stack direction="row" justifyContent="flex-start" spacing={2}>
      <Box
        component={Stack}
        sx={(t) => ({
          backgroundColor: t.palette.primary.main,
          backgroundClip: "content-box",
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          border: "1px solid #D4D6DC",
          p: "6px",
          color: "white",
          borderRadius: "100%",
        })}
      >
        {n}
      </Box>
      <Button startIcon={<BookmarkBorderIcon />}>Mark</Button>
      <Button startIcon={<VisibilityOffOutlinedIcon />}>Ignore</Button>
      <Button startIcon={<ReportProblemOutlinedIcon />}>Ignore</Button>
    </Stack>
    <Box>{children}</Box>
  </Stack>
);
export default Question;
