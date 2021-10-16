import React, { useReducer, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";

import useInputs from "../hooks/useInputs";

import CreateUser from "./CreateUser";
import UserList from "./UserList";

const initialState = {
  users: [
    {
      id: 1,
      username: "minji",
      email: "minji@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "jaewoo",
      email: "jw.jeong@sqisoft.com",
      active: false,
    },
    {
      id: 3,
      username: "banja",
      email: "banja@daum.net",
      active: false,
    },  
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const countActiveUsers = (users) => {
  return users.filter((user) => user.active).length;
};

export const UserDispatch = React.createContext(null);

const MainPage = (props) => {
  const { sideBar } = props;

  const [{ username, email }, onChange, onReset] = useInputs({
    username: "",
    email: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onReset();
    nextId.current += 1;
  }, [username, email, onReset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <MainPageWrapper sideBar={sideBar}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </MainPageWrapper>
    </UserDispatch.Provider>
  );
};

const MainPageWrapper = styled.div`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
