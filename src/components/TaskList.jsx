import React, { useState } from 'react';
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
        <TaskItem
          key={index}
          task={task.task}
          completed={task.completed}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;