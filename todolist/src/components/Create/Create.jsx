import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    //send data to Server side
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => location.reload())
      .catch((err) => console.log(err));

    //Clear input element
    document.getElementById("todo-input").value = "";
  };

  return (
    <div className="create_form">
      <input
        id="todo-input"
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
