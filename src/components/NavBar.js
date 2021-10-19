import React, { useEffect } from "react";
import styled from "styled-components";

import { MENU } from "../utils/MENU";
import { TotalConsumer } from "../App";

import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";

const NavBar = (props) => {
  const { sideBar, setSideBar } = props;

  return (
    <TotalConsumer>
      {({ state, actions }) => (
        console.log(state),
        (
          <NavBarWrapper sideBar={sideBar}>
            <HamburgerIcon onClick={() => setSideBar(!sideBar)} />
            {sideBar
              ? MENU.map((menu, index) => (
                  <p
                    key={index}
                    onClick={() => actions.setPage(menu)}
                    style={{ cursor: "pointer" }}
                  >
                    {menu}
                  </p>
                ))
              : null}
          </NavBarWrapper>
        )
      )}
    </TotalConsumer>
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
