import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tasksData from '../Tasks.json';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <Link to={`/item/${index + 1}`}>
            <TaskItem
              task={task.task}
              completed={task.completed}
              onDelete={() => deleteTask(index)}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
