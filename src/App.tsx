import { useEffect, useState } from "react";
import MultipleChoice from "./components/MultipleChoice";
import "./App.css";
import { Container, Stack } from "@mui/material";

function App() {
  const [questions, setQuestions] = useState<any[]>([]); // FIXME: Types

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setQuestions(data.slice(0, 3)));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2}>
        {questions.map((question) => (
          <MultipleChoice key={question.id} question={question} />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
