import React from "react";
import styled from "styled-components";

const MainPage = (props) => {
  const { sideBar } = props;

  return <MainPageWrapper sideBar={sideBar}>mainPage</MainPageWrapper>;
};

const MainPageWrapper = styled.div`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
