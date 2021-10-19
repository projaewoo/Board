import React from "react";
import styled from "styled-components";

import { TotalConsumer } from "../App";
import { TodoInsert, TodoList } from "./Todo";
import { MENU } from "../utils/MENU";
import Promise from "./Test/Promise";

const MainPage = (props) => {
  const { sideBar } = props;

  return (
    <MainPageWrapper sideBar={sideBar}>
      <TotalConsumer>
        {({ state }) =>
          state.page === MENU[0] ? (
            <>
              <TodoInsert />
              <TodoList />
            </>
          ) : state.page === MENU[1] ? (
            <>
              <Promise />
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
