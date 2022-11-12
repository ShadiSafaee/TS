import React, { FC } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import Introduction from "./components/Introduction";

const App: FC = () => {
  return (
    <div className="App">
      <Greeter person="Shadi" />
      <Greeter person="Toffee" />
      <Greeter person="Asghar" />
      <Introduction />
    </div>
  );
};

export default App;
