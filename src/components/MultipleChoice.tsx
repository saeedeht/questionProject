import { FC } from "react";
import { Typography, Avatar, Button, Checkbox } from "@mui/material";
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
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Avatar
          sx={(t) => ({
            backgroundColor: t.palette.primary.main,
            width: 48,
            height: 48,
          })}
        >
          {question.id}
        </Avatar>

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
          {/* <Typography  variant="subtitle2" component="h2"  sx={{textAlign:"left"}}  >
                  Efforts to explain how the pterosaurs became able to fly have led to suggestions that they launched themselves by jumping from cliffs, by dropping from trees, or even by rising into light winds from the crests of waves. Each explanation has its difficulties.
                  </Typography> */}
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
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
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

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
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

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
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

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
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
