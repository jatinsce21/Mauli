import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState([
    { title: "Task 3", completed: true },
    { title: "Hangout with arch", completed: false },
    { title: "Hangt with merd", completed: false },
    { title: "Graesome Pless", completed: true },
    { title: "Do you", completed: false },
  ]);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [newTask, setNewTask] = useState(""); // State for new task title

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed === true);
    setPendingTasks(tasks.length - completedTasks.length);
  }, [tasks]);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="task-controls">
        <span>Pending tasks ({pendingTasks})</span>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="new-task-input"
        />
        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="task-checkbox"
            />
            <span className="task-title">{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
