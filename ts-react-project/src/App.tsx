import React from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Greeter person="Shadi" />
      <Greeter person="Toffee" />
      <Greeter person="Asghar" />
      <Introduction />
    </div>
  );
}

export default App;
