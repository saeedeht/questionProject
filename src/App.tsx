import "./App.css";
import { Container, Stack } from "@mui/material";

import Question from "./components/Question";
import MultipleChoice from "./components/MultipleChoice";

import { questions } from "./mock";
import { useState } from "react";
import Report from "./components/Report";
import Report1 from "./components/Report1";

function App() {
  const [isMarked, setIsMarked] = useState(false);

  return (
    <Container maxWidth="lg"  sx = {(t)=>({p: 2 , backgroundColor: t.palette.primary.light })}>
     
      {/* <Stack spacing={2}>
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
      </Stack> */}
      <Report1 />
    </Container>
  );
}
export default App;
