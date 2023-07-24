
import React, { useState } from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, onDeleteTask } = props;

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
