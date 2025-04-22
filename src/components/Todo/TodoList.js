import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TaskForm from './TaskForm';
import './Todo.css';

function TodoList() {
  const { tasks, deleteTask } = useContext(TodoContext);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="todo-container">
      <h2>Your Tasks</h2>
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.title}
            <div className="task-actions">
              <button onClick={() => setEditingTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;