import { MultipleChoiceInteraction } from "./components/MultipleChoice";

export const multipleChoiceInteraction: MultipleChoiceInteraction = {
  id: "multiple-choice-interaction",
  question:
    "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  choices: [
    { id: "choice-1", content: "Difficulties", isSelected: false },
    { id: "choice-2", content: "Trees", isSelected: true },
    { id: "choice-3", content: "Causes", isSelected: true },
    { id: "choice-4", content: "More that this", isSelected: false },
  ],
};

export const question = {
  id: "question",
  interactions: [multipleChoiceInteraction],
};

export const questions = Array.from({ length: 3 }).map((_, i) => ({
  ...question,
  id: question.id + "-" + i,
}));
