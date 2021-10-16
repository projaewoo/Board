import React from "react";
import styled from "styled-components";

const CreateUser = ({ username, email, onChange, onCreate }) => {

  return (
    <CreateUserWrapper>
      <input 
        name="username" 
        value={username} 
        placeholder="계정명" 
        onChange={onChange} 
      />
      <input 
        name="email" 
        value={email} 
        placeholder="이메일" 
        onChange={onChange} 
      />
      <button onClick={() => onCreate()}>등록</button>
    </CreateUserWrapper>
  );
};

const CreateUserWrapper = styled.div``;

export default CreateUser;
