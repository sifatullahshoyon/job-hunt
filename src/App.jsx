import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <section>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <footer></footer>
    </section>
  );
};

export default App;
