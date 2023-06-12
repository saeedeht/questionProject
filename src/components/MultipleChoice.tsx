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
      <Typography variant="subtitle2" component="h2" sx={{ textAlign: "left" }}>
        {interaction.question}
      </Typography>

      {interaction.choices.map((choice, i) => (
        <Stack
          key={choice.id}
          direction="row"
          justifyContent="flex-start"
          spacing={2}
        >
          <Button sx={{ borderRadius: "5px", gap: "5px" }}>
            {i}
            <Checkbox />
            {choice.content}
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};
export default MultipleChoice;
