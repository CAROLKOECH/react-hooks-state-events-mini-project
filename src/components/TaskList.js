import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TASKS.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
