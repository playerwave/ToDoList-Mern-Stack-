import React, { useState, useEffect } from "react";
import Create from "../Create/Create";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import "./Home.css";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    location.reload();
  };

  const handleDel = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    location.reload();
  };

  return (
    <div className="home">
      <h2>ToDo List</h2>
      <Create></Create>
      {todos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className="lists">
            <div className="list" onClick={() => handleEdit(todo._id)}>
              {todo.done === true ? <FaRegCheckCircle /> : <FaRegCircle />}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div className="del">
              <button className="btn-del" onClick={() => handleDel(todo._id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
