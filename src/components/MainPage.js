import React from "react";
import styled from "styled-components";

import { TotalConsumer } from "../App";
import { MENU } from "../utils/MENU";
import { TodoInsert, TodoList } from "./Todo";
import { NewsList } from "./NewsViewer/index";

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
              <NewsList />
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
