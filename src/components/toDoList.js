import { EditTodo } from "./EditTodo";
import { UpAndDown } from "./upAndDown";
import "../styles/todoList.css";
export function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((toDo) => {
        return (
          <li key={toDo.input} className={toDo.isDone && "markAsDone"}>
            <input
              className="checkBox"
              type="checkbox"
              onClick={(event) =>
                setTodos(
                  todos.map((ToDo) =>
                    toDo.input === ToDo.input
                      ? { ...ToDo, isChecked: event.target.checked }
                      : ToDo
                  )
                )
              }
            ></input>
            <p>{toDo.input}</p>
            <button
              onClick={() =>
                setTodos(
                  todos.map((ToDo) =>
                    toDo.input === ToDo.input ? { ...ToDo, isDone: true } : ToDo
                  )
                )
              }
            >
              დასრულებულია
            </button>
            <EditTodo
              initialValue={toDo.input}
              todos={todos}
              setTodos={setTodos}
            ></EditTodo>
            <button
              onClick={() => {
                setTodos(todos.filter((Todo) => toDo.input !== Todo.input));
              }}
            >
              წაშლა
            </button>
            <UpAndDown
              input={toDo.input}
              todos={todos}
              setTodos={setTodos}
            ></UpAndDown>
          </li>
        );
      })}
    </ul>
  );
}
