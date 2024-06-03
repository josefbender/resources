import { useState } from "react";

export type Todo = {
  text: string;
  state: "todo" | "doing" | "done";
};
const initialTodos: Todo[] = [
  { text: "Organize the closet.", state: "todo" },
  { text: "Read a new book.", state: "todo" },
  { text: "Call a friend or family member to catch up.", state: "todo" },
  { text: "Try a new recipe.", state: "todo" },
  { text: "Go for a 30-minute walk.", state: "doing" },
  { text: "Clean out the email inbox.", state: "doing" },
  { text: "Plant a small garden or indoor plant.", state: "doing" },
  { text: "Watch a documentary.", state: "doing" },
  { text: "Write a journal entry about the day.", state: "done" },
  { text: "Visit a local museum or gallery.", state: "done" },
  { text: "Learn a few phrases in a new language.", state: "done" },
  { text: "Donate old clothes or items to a charity.", state: "done" },
];

export const useTodos = () => {
  const [todos, setTodos] = useState(initialTodos);
  return { todos };
};
