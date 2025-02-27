import React from "react";
import "./App.css";

import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => {
        return [...prevTodos, inputVal];
      });
      setInputVal("");
    }
  }

  // console.log(todos);

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex !== todoIndex;
      })
    );
  }

  return (
    <>
      <main>
        <h1>Todo List</h1>

        <InputContainer
          inputVal={inputVal}
          writeTodo={writeTodo}
          addTodo={addTodo}
        />

        <TodoContainer todos={todos} delTodo={delTodo} />
      </main>
    </>
  );
}

export default App;
