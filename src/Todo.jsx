import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: todo.trim()
    }
    setTodos([...todos, newItem]);
    setTodo("");
  };

  const handleDelete = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center space-y-8 m-8">
      <h1 className="text-2xl md:text-3xl  font-semibold">ToDo List</h1>

      <div className="flex flex-col items-center custom-md-2:flex-row custom-md-2:justify-center w-full gap-3">
        <label
          htmlFor="todo-input"
          className="text-sm md:text-lg font-semibold cursor-pointer self-center hidden custom-md:inline-block"
        > 
          Enter todo item:{" "}
        </label>
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTodo();
          }}
          placeholder="Enter a todo"
          className="text-xs md:text-lg placeholder:text-xs md:placeholder:text-lg w-full max-w-96 px-2 py-1 md:px-3 md:py-2 border border-gray-900 focus:outline-none"
        />
        <button
          className="bg-black text-white text-xs md:text-lg px-3 py-[9px] shrink-0 w-24 md:w-28"
          onClick={handleAddTodo}
        >
          Add Item
        </button>
      </div>
      
      <motion.div 
        className="w-[80%] md:w-[60%] flex flex-col gap-y-4"
      >
        <AnimatePresence mode="popLayout">
          {todos.map((item) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, x: 100}}
              transition={{duration: 0.3}}
              layout
              className="bg-black text-white text-xs md:text-lg px-4 py-3 flex justify-between gap-3 items-center break-all"
            >
              <span className="max-w-[90%] break-words hyphenate">{item.text}</span>
              <TiDelete
                className="text-lg md:text-2xl cursor-pointer shrink-0 self-start"
                onClick={() => handleDelete(item.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Todo;
