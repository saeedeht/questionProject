import { Box, Button, Stack } from "@mui/material";
import { FC, ReactNode } from "react";
import {
  BookmarkBorder as BookmarkBorderIcon,
  VisibilityOffOutlined as VisibilityOffOutlinedIcon,
  ReportProblemOutlined as ReportProblemOutlinedIcon,
} from "@mui/icons-material";

export type QuestionFlag = "marked" | "ignored" | "reported";

export interface Question {
  id: string;
  interactions: any[];
}

export interface QuestionProps {
  n: number;
  question: Question;
  flags: QuestionFlag[];
  onFlagsChange(value: QuestionFlag[]): void;
  children: ReactNode;
}

const Question: FC<QuestionProps> = ({
  n,
  question,
  flags,
  onFlagsChange,
  children,
}) => (
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
      <Button
        startIcon={<BookmarkBorderIcon />}
        sx={(t) => ({
          color: flags.includes("marked") ? t.palette.info.main : undefined,
        })}
      >
        Mark
      </Button>
      <Button
        startIcon={<VisibilityOffOutlinedIcon />}
        sx={(t) => ({
          color: flags.includes("ignored") ? t.palette.warning.main : undefined,
        })}
      >
        Ignore
      </Button>
      <Button
        startIcon={<ReportProblemOutlinedIcon />}
        sx={(t) => ({
          color: flags.includes("reported") ? t.palette.error.main : undefined,
        })}
      >
        Report
      </Button>
    </Stack>
    <Box>{children}</Box>
  </Stack>
);
export default Question;
