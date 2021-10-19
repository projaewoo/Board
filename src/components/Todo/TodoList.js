import React, { useEffect } from "react";
import styled from "styled-components";

import { TotalConsumer } from "../../App";

const TodoList = () => {
  return (
    <TotalConsumer>
      {/** {({ state }) => ... }   //  객체 비구조화 할당  // value.state가 있어서 ({ state })로 사용 */}
      {({ state }) =>
        state.todoList.map((todo, index) => <div key={index}>{todo}</div>)
      }
    </TotalConsumer>
  );
};

export default TodoList;
