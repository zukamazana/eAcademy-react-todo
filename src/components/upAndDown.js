import "../styles/upAndDown.css";
export function UpAndDown({ todos, setTodos, input }) {
  const up = () => {
    const itemIndex = todos.findIndex((todo) => todo.input === input);
    const clonedTodo = [...todos];
    if (itemIndex === 0) {
      return;
    }
    const itemAbove = clonedTodo[itemIndex - 1];
    clonedTodo[itemIndex - 1] = clonedTodo[itemIndex];
    clonedTodo[itemIndex] = itemAbove;
    setTodos(clonedTodo);
  };
  const down = () => {
    const itemIndex = todos.findIndex((todo) => todo.input === input);
    const clonedTodo = [...todos];
    if (itemIndex === todos.length - 1) {
      return;
    }
    const itemBelow = clonedTodo[itemIndex + 1];
    clonedTodo[itemIndex + 1] = clonedTodo[itemIndex];
    clonedTodo[itemIndex] = itemBelow;
    setTodos(clonedTodo);
  };
  return (
    <div className="UpAndDownButtons">
      <button onClick={up}>↑</button>
      <button onClick={down}>↓</button>
    </div>
  );
}
