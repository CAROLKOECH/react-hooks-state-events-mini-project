import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState(CATEGORIES[0]);

  const handleCategoryFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const getFilteredTasks = () => {
    if (filteredCategory === "All") {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === filteredCategory);
    }
  };

  useEffect(() => {
    console.log("Here's the data you're working with");
    console.log({ CATEGORIES, TASKS });
  }, []);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onCategoryFilterChange={handleCategoryFilterChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={getFilteredTasks()} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

