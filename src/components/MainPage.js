import React from "react";
import styled from "styled-components";

import { TotalConsumer } from "../App";
import { TodoInsert, TodoList } from "./Todo";

const MainPage = (props) => {
  const { sideBar } = props;

  return (
    <MainPageWrapper sideBar={sideBar}>
      <TotalConsumer>
        {({ state }) =>
          state.page === "TodoList" ? (
            <>
              <TodoInsert />
              <TodoList />
            </>
          ) : null
        }
      </TotalConsumer>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
