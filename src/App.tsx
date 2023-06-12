import "./App.css";
import { Container, Stack } from "@mui/material";

import Question from "./components/Question";
import MultipleChoice from "./components/MultipleChoice";

import { questions } from "./mock";

function App() {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2}>
        {questions.map((question, i) => (
          <Question key={question.id} n={i} question={question}>
            <MultipleChoice interaction={question.interactions[0]} />
          </Question>
        ))}
      </Stack>
    </Container>
  );
}

export default App;
