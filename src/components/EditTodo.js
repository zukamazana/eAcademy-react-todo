import Modal from "react-modal";
import { useState } from "react";
import "../styles/EditTodo.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export function EditTodo({ initialValue, todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);

  return (
    <div className="EditTodo">
      <button onClick={() => setShowModal(true)}>რედაქტირება</button>
      <Modal
        style={customStyles}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <div className="inputWrapper">
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            onClick={() => {
              setShowModal(false);
              setTodos(
                todos.map((toDo) =>
                  toDo.input === initialValue
                    ? { ...toDo, input: editedValue }
                    : toDo
                )
              );
            }}
          >
            შენახვა
          </button>
        </div>
      </Modal>
    </div>
  );
}
