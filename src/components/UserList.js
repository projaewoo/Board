import React from "react";
import styled from "styled-components";

const UserList = (props) => {
  const { users } = props;

  return (
    <UserListWrapper>
      {users.map((user) => (
        <>
          <span>{user.username}</span>
          <span>({user.email})</span>
          <br />
        </>
      ))}
    </UserListWrapper>
  );
};

const UserListWrapper = styled.div``;

export default UserList;
