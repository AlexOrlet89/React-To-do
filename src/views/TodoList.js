import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { getTodos } from '../services/todos';

export default function TodoList({ currentUser }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      TodoList
      <div>
        {todos.map((todo) => (
          <p key={todo.id}>{todo.id}</p>
        ))}
      </div>
    </div>
  );
}
