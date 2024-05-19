import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

function App() {
  const [itemArr, setItemArr] = useState([]);

  return (
    <>
      <h1 className="text-center mt-3 mb-5">Todo Application</h1>
      <AddTodo setItems={setItemArr}/>
      <TodoItems items={itemArr} setItems={setItemArr} />
    </>
  );
}

export default App;
