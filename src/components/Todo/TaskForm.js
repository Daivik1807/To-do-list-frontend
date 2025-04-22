import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './Todo.css';

function TaskForm({ editingTask, setEditingTask }) {
  const { addTask, updateTask } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editingTask) setTitle(editingTask.title);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      updateTask(editingTask.id, { title });
      setEditingTask(null);
    } else {
      addTask({ title });
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input placeholder="Task" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
      {editingTask && <button onClick={() => setEditingTask(null)}>Cancel</button>}
    </form>
  );
}

export default TaskForm;