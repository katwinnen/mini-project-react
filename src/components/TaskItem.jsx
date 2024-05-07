import React from 'react';

const TaskItem = ({ task, completed, onDelete }) => {
  return (
    <li>
      {completed ? '✅' : '❌'} {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;