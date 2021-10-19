import React, { useEffect } from "react";
import styled from "styled-components";

import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";

const NavBar = (props) => {
  const { sideBar, setSideBar } = props;

  return (
    <NavBarWrapper sideBar={sideBar}>
      <HamburgerIcon onClick={() => setSideBar(!sideBar)} />
      {sideBar ? (
        <>
          <p>TodoList</p>
          <p>menu 2</p>
        </>
      ) : null}
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.sideBar ? "150px" : "20px")};
  padding: 20px;
  background-color: #bdbdbd;

  display: flex;
  flex-direction: column;

  & > svg {
    cursor: pointer;
  }
`;

export default NavBar;
