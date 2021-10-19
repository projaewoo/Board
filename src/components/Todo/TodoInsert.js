import React, { useState } from "react";
import styled from "styled-components";

import { TotalConsumer } from "../../App";

const TodoInsert = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <TotalConsumer>
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
    </TotalConsumer>
  );
};

export default TodoInsert;
