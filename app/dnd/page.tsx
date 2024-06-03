"use client";
import * as React from "react";
import { Grid } from "./components/Grid";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { ColumnTitle } from "./components/ColumnTitle";
import { useTodos } from "./useTodos";

export default function Dnd1() {
  const { todos } = useTodos();
  return (
    <Grid>
      <Column>
        <ColumnTitle color={"grey"}>Todo</ColumnTitle>
        {todos
          .filter((todo) => todo.state === "todo")
          .map((todo, index) => (
            <Card key={index}>{todo.text}</Card>
          ))}
      </Column>
      <Column>
        <ColumnTitle color={"blue"}>Doing</ColumnTitle>
        {todos
          .filter((todo) => todo.state === "doing")
          .map((todo, index) => (
            <Card key={index}>{todo.text}</Card>
          ))}
      </Column>
      <Column>
        <ColumnTitle color={"green"}>Done</ColumnTitle>
        {todos
          .filter((todo) => todo.state === "done")
          .map((todo, index) => (
            <Card key={index}>{todo.text}</Card>
          ))}
      </Column>
    </Grid>
  );
}
