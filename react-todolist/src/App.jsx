import { useState } from "react";
import "./App.css"

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">React Tod List</h1>
      <div className="flex mb-4">
        <input
          className="flex-1 p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <span>{todo}</span>
            <button
              className="text-red-500"
              onClick={() => removeTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}