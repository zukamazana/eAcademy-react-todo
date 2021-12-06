import { NewTodoItem } from "./components/newTodoItem";
import { DeleteButtons } from "./components/deleteButtons";
import "./App.css";
import { TodoList } from "./components/toDoList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <DeleteButtons todos={todos} setTodos={setTodos} />
      <NewTodoItem
        saveClickFunction={() => {
          if (todos.find((todo) => todo.input === input)) {
            alert("მსგავსი უკვე არის");
          } else {
            setTodos([...todos, { input, isDone: false, isChecked: false }]);
            setInput("");
          }
        }}
        inputChangeFunction={(e) => setInput(e.target.value)}
        input={input}
      ></NewTodoItem>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
