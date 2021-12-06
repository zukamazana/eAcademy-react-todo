import "../styles/newTodoItem.css";
export function NewTodoItem({ saveClickFunction, inputChangeFunction, input }) {
  return (
    <div className="newTodo">
      <input type="text" onChange={inputChangeFunction} value={input} />
      <button onClick={saveClickFunction}>დამატება</button>
    </div>
  );
}
