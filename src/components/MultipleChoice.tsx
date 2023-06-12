import { FC } from "react";
import { Typography, Button, Checkbox, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

export interface Choice {
  id: string;
  content: string;
  isSelected: boolean;
}

export interface MultipleChoiceInteraction {
  id: string;
  question: string;
  choices: Choice[];
}

export interface MultipleChoiceProps {
  interaction: MultipleChoiceInteraction;
}

const MultipleChoice: FC<MultipleChoiceProps> = ({ interaction }) => {
  return (
    <Stack spacing={4}>
      <Typography variant="subtitle2" component="h2">
        {interaction.question}
      </Typography>
      <Stack spacing={2} style={{ alignItems: "start" }}>
        {interaction.choices.map((choice, i) => (
          <Button key={choice.id}>
            <Stack direction="row" spacing={2}>
              {i}
              <Checkbox checked={choice.isSelected} />
              {choice.content}
            </Stack>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
export default MultipleChoice;
