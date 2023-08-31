import React, { useState } from 'react';
import TaskList from './componentes/ListaTareas';
//import NuevaTarea from './hojas-de-estilos/NuevaTarea.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const toggleTask = (taskId, taskText) => {
    if (editingTaskId === taskId) {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, text: editedTaskText } : task
      );
      setTasks(updatedTasks);
      setEditingTaskId(null);
    } else {
      setEditingTaskId(taskId);
      setEditedTaskText(taskText);
    }
  };

  const deleteTask = (taskId) => {
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
      setEditedTaskText('');
    }
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editingTaskId={editingTaskId}
        editedTaskText={editedTaskText}
        setEditedTaskText={setEditedTaskText}
      />
    </div>
  );
};

export default App;
