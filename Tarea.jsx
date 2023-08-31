import React, { useState } from 'react';

const Task = ({ task, toggleTask, deleteTask, editingTaskId, editedTaskText, setEditedTaskText }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEditMode = () => {
    if (isEditing) {
      toggleTask(task.id, editedTaskText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditedTaskText(task.text);
    }
  };

  const handleSaveEdit = () => {
    toggleTask(task.id, editedTaskText);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskText}
            onChange={(e) => setEditedTaskText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(task.id, task.text)} style={{ cursor: 'pointer' }}>
            {task.completed ? '👍' : '🤔'} {task.text}
          </span>
          <button onClick={handleToggleEditMode}>Editar</button>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default Task;
