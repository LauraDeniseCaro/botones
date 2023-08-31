import React from 'react';
import Task from './Tarea';

const TaskList = ({ tasks, toggleTask, deleteTask, editingTaskId, editedTaskText, setEditedTaskText }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editingTaskId={editingTaskId}
          editedTaskText={editedTaskText}
          setEditedTaskText={setEditedTaskText}
        />
      ))}
    </div>
  );
};

export default TaskList;
