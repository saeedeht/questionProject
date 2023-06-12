import "./App.css";
import { Container, Stack } from "@mui/material";

import Question from "./components/Question";
import MultipleChoice from "./components/MultipleChoice";

import { questions } from "./mock";
import { useState } from "react";

function App() {
  const [isMarked, setIsMarked] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2}>
        {questions.map((question, i) => (
          <Question
            key={question.id}
            n={i + 1}
            question={question}
            flags={["ignored"]}
            onFlagsChange={() => {}}
          >
            <MultipleChoice interaction={question.interactions[0]} />
          </Question>
        ))}
      </Stack>
    </Container>
  );
}
export default App;
