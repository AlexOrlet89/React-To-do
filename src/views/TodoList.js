import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { createTodo, getTodos } from '../services/todos';

export default function TodoList({ currentUser }) {
  const [todos, setTodos] = useState([]);
  const [todo, newTodo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handlesubmit');
    createTodo(todo);
  };

  return (
    <div>
      TodoList
      <div>
        <div>
          {' '}
          <form onSubmit={handleSubmit}>
            <input name="todo" onChange={(e) => newTodo(e.target.value)} required />
            <button>Add todo</button>
          </form>
        </div>
        {todos.map((todo) => (
          <p key={todo.id}>{todo.id}</p>
        ))}
      </div>
    </div>
  );
}
