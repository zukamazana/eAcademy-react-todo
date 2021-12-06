import "../styles/deleteButtons.css";
export function DeleteButtons({ todos, setTodos }) {
  return (
    <div className="DeleteButtons">
      <button
        onClick={() => {
          setTodos(todos.filter((todo) => !todo.isDone));
        }}
      >
        წაშალე დასრულებული
      </button>
      <button
        onClick={() => {
          setTodos(todos.filter((todo) => !todo.isChecked));
        }}
      >
        წაშალე არჩეული
      </button>
      <button
        onClick={() => {
          setTodos([]);
        }}
      >
        წაშალე ყველა
      </button>
    </div>
  );
}
