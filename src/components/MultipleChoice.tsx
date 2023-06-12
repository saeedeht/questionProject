import { FC } from "react";
import { Typography, Button, Checkbox, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import {
  BookmarkBorder as BookmarkBorderIcon,
  VisibilityOffOutlined as VisibilityOffOutlinedIcon,
  ReportProblemOutlined as ReportProblemOutlinedIcon,
} from "@mui/icons-material";

interface Question {
  id: string;
  body: string;
}

export interface MultipleChoiceProps {
  question: Question;
}

const MultipleChoice: FC<MultipleChoiceProps> = ({ question }) => {
  return (
    <Stack
      key={question.id}
      direction="column"
      spacing={2}
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
          {question.id}
        </Box>

        <Button
          sx={{ borderRadius: "5px", gap: "5px" }}
          startIcon={<BookmarkBorderIcon />}
        >
          Mark
        </Button>

        <Button
          sx={{ borderRadius: "5px", gap: "5px" }}
          startIcon={<VisibilityOffOutlinedIcon />}
        >
          Ignore
        </Button>

        <Button
          sx={{ borderRadius: "5px", gap: "5px" }}
          startIcon={<ReportProblemOutlinedIcon />}
        >
          Ignore
        </Button>
      </Stack>

      <Stack>
        <Stack direction="row" justifyContent="center" alignItems="flex-start">
          <Typography
            variant="subtitle2"
            component="h2"
            sx={{ textAlign: "left" }}
          >
            {question.body}
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction="row" justifyContent="flex-start" spacing={2}>
          <Button aria-label="Example" sx={{ borderRadius: "5px", gap: "5px" }}>
            <Typography variant="subtitle2" component="h2">
              1
            </Typography>
            <Checkbox />
            <Typography variant="subtitle2" component="h2">
              Difficulties
            </Typography>
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="flex-start" spacing={2}>
          <Button aria-label="Example" sx={{ borderRadius: "5px", gap: "5px" }}>
            <Typography variant="subtitle2" component="h2">
              2
            </Typography>
            <Checkbox />
            <Typography variant="subtitle2" component="h2">
              Trees
            </Typography>
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="flex-start" spacing={2}>
          <Button aria-label="Example" sx={{ borderRadius: "5px", gap: "5px" }}>
            <Typography variant="subtitle2" component="h2">
              3
            </Typography>
            <Checkbox />
            <Typography variant="subtitle2" component="h2">
              Cuses
            </Typography>
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="flex-start" spacing={2}>
          <Button aria-label="Example" sx={{ borderRadius: "5px", gap: "5px" }}>
            <Typography variant="subtitle2" component="h2">
              4
            </Typography>
            <Checkbox />
            <Typography variant="subtitle2" component="h2">
              More than this
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default MultipleChoice;
