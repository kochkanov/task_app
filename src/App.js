import React from "react";
import Router from "./router/RouterOfTask";
import HeaderOfTask from "./layout/HeaderOfTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderOfTask />
      <Router />
    </div>
  );
}

export default App;
