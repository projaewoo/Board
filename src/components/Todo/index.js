import React, { createContext, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const TodoContext = createContext({
  state: { todoList: [] },
  actions: {
    setTodoList: () => {},
  },
});

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(["todo1"]);

  const value = {
    state: { todoList },
    actions: { setTodoList },
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// const TodoConsumer = TodoContext.Consumer와 같은 의미
const { Consumer: TodoConsumer } = TodoContext;

export { TodoInsert, TodoList, TodoProvider, TodoConsumer };
