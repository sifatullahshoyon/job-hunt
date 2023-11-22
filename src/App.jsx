import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Header />
      <div>
        <Outlet />
      </div>
      <footer></footer>
    </section>
  );
};

export default App;
