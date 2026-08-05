import React from "react";
import "./Todo.css";
import { useState } from "react";
const Todo = () => {
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);

  const addTask = () => {
    let preData = [...todo];
    if (task.trim() === "") {
      alert("Task can't be empty");
      return;
    }
    preData.push(task);
    settodo(preData);
    settask("");
  };

  const edit = (i) => {
    let eData = [...todo];
    eData[i] = task;
    settodo(eData);
    settask("");
  };

  const del = (d) => {
    let dData = [...todo];
    dData.splice(d, 1);
    settodo(dData);
  };
  return (
    <div>
      <div className="container">
        <h1>To Do App</h1>

        <input
          value={task}
          type="text"
          placeholder="Enter The Task "
          onChange={(e) => settask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
        <ul>
          {todo.map((ele, i) => {
            return (
              <li key={i}>
                {ele}
                <button onClick={() => edit(i)}>Edit</button>
                <button onClick={() => del(i)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
