import React from 'react';
import { useParams } from 'react-router-dom';
import tasksData from '../Tasks.json';

const ItemDetails = () => {
  const { id } = useParams(); // Access the item ID from the URL

  // Find the task with the matching ID
  const task = tasksData[parseInt(id) - 1]; // Assuming IDs are 1-based

  return (
    <div>
      <h2>{task.task}</h2> {/* Display the specific task */}
      <p>Task Details:</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      {/* Add more task details as needed */}
    </div>
  );
};

export default ItemDetails;
