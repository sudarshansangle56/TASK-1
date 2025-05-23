import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ task, index, onDelete }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
