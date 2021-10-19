import React from "react";
import styled from "styled-components";

import { TodoProvider } from "./Todo/index";
import { TodoInsert, TodoList } from "./Todo";

const MainPage = (props) => {
  const { sideBar } = props;

  return (
    <MainPageWrapper sideBar={sideBar}>
      <TodoProvider>
        <TodoInsert />
        <TodoList />
      </TodoProvider>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
