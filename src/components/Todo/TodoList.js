import React, { useEffect } from "react";
import styled from "styled-components";

import { TodoConsumer } from "./index";

const TodoList = () => {
  return (
    <TodoConsumer>
      {/** {({ state }) => ... }   //  객체 비구조화 할당  // value.state가 있어서 ({ state })로 사용 */}
      {({ state }) => state.todoList.map((todo) => <div>{todo}</div>)}
    </TodoConsumer>
  );
};

export default TodoList;
