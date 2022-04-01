import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { getTodos } from '../services/todos';

export default function TodoList({ currentUser }) {
  const [todos, setTodos] = useState([]);
  const [todo, createTodo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      TodoList
      <div>
        <div>
          {' '}
          <form onSubmit={handleSubmit}>
            <input name="todo" onChange={(e) => createTodo(e.target.value)} required />
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
