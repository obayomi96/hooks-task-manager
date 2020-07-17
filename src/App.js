import React from "react";
import TodoApp from "./TodoApp";
import {InternetStatus} from "react-internet-status";

function App() {
  console.log(window.navigator.onLine);
  return (
    <div>
      <InternetStatus bgColor="green" />
      <TodoApp />
    </div>
  );
}

export default App;
