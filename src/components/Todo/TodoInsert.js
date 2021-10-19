import React, { useState } from "react";
import styled from "styled-components";

import { TodoConsumer } from "./index";

const TodoInsert = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <TodoConsumer>
      {({ actions }) => (
        <>
          <input type="text" onChange={(e) => setInputValue(e.target.value)} />
          <button
            onClick={() =>
              actions.setTodoList((todo) => todo.concat(inputValue))
            }
          >
            click
          </button>
        </>
      )}
    </TodoConsumer>
  );
};

export default TodoInsert;
