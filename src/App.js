import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

const App = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <NavBar sideBar={sideBar} setSideBar={setSideBar} />
      <MainPage sideBar={sideBar} />
    </>
  );
};

export default App;
