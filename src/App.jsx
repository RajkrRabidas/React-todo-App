import React, { useEffect, useState } from "react";
import "../src/App.css";
import Read from "./components/Read";
import Create from "./components/Create";

const App = () => {
  const [todos, settodos] = useState([]);

const [isFirstLoad, setIsFirstLoad] = useState(true);

  // ✅ Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      settodos(JSON.parse(saved));
    }
    setIsFirstLoad(false);
  }, []);

  // ✅ Save to LocalStorage (only after first load)
  useEffect(() => {
    if (!isFirstLoad) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isFirstLoad]);

  return (
    <div className="container todo-glass">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{ fontSize: 32 }}>📝</span>
        <h2 style={{ margin: 0 }}>Create Todo</h2>
      </div>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
