import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Promise1 = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PromiseWrapper>
      <span>This is Promise Page</span>
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
      )}
    </PromiseWrapper>
  );
};

const PromiseWrapper = styled.div``;

export default Promise1;
