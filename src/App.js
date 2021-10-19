import React, { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

const TotalContext = createContext({
  state: { page: "", todoList: [] },
  actions: {
    setPage: () => {},
    setTodoList: () => {},
  },
});

const TotalProvider = ({ children }) => {
  const [page, setPage] = useState("TodoList");
  const [todoList, setTodoList] = useState(["todo1"]);

  const value = {
    state: { page, todoList },
    actions: { setPage, setTodoList },
  };

  return (
    <TotalContext.Provider value={value}>{children}</TotalContext.Provider>
  );
};

const { Consumer: TotalConsumer } = TotalContext;

export { TotalProvider, TotalConsumer };

const App = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <TotalProvider>
        <NavBar sideBar={sideBar} setSideBar={setSideBar} />
        <MainPage sideBar={sideBar} />
      </TotalProvider>
    </>
  );
};

export default App;
