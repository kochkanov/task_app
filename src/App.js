import React from "react";
import Router from "./router/RouterOfTask";
import HeaderOfTask from "./layout/HeaderOfTask";

function App() {
  return (
    <div className="App">
      <HeaderOfTask/>
      <Router />
    </div>
  );
}

export default App;
