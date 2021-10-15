import React, { useEffect } from "react";
import styled from "styled-components";

const CreateUser = (props) => {
  const { username, email, onChange, onCreate } = props;

  useEffect(() => {
    console.log(`username`, username);
    console.log(`email`, email);
  }, [username, email]);

  return (
    <CreateUserWrapper>
      <input name="username" placeholder="계정명" onChange={onChange} />
      <input name="emial" placeholder="이메일" onChange={onChange} />
      <button onClick={() => onCreate()}>등록</button>
    </CreateUserWrapper>
  );
};

const CreateUserWrapper = styled.div``;

export default CreateUser;
