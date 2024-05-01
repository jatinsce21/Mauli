import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const TaskHeading = styled.h2`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  background-color: #2c2c2c;
  color: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskDescription = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const CompleteButton = styled.button`
  background-color: ${({ completed }) => (completed ? "#ccc" : "#3f51b5")};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
`;

const IncompleteButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const NewTaskInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;

const TaskApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Grab some Pizza", completed: false },
    { id: 2, description: "Do your workout", completed: false },
    { id: 3, description: "Hangout with friends", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addNewTask = (description) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, description, completed: false },
    ]);
  };

  return (
    <Container>
      <TaskHeading>
        Pending tasks ({tasks.filter((task) => !task.completed).length})
      </TaskHeading>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskDescription completed={task.completed}>
              {task.description}
            </TaskDescription>
            <div>
              <CompleteButton
                completed={task.completed}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? "Incomplete" : "Complete"}
              </CompleteButton>
              {task.completed && (
                <IncompleteButton onClick={() => toggleTaskCompletion(task.id)}>
                  X
                </IncompleteButton>
              )}
            </div>
          </TaskItem>
        ))}
      </TaskList>
      <NewTaskInput
        type="text"
        placeholder="Add a new task"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addNewTask(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </Container>
  );
};

export default TaskApp;
