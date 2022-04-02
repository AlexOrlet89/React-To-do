import React from 'react';
import { useState } from 'react/cjs/react.development';
import { completeTodo } from '../services/todos';

export default function ListItem({ todo }) {
  const [isComplete, setComplete] = useState(false);

  const handleComplete = async () => {
    setComplete(true);
    completeTodo(todo);
  };

  return (
    <div>
      <div
        className={`listitem ${todo.complete ? 'complete' : ''}`}
        key={todo.id}
        onClick={handleComplete}
      >
        <p>{todo.id}</p>
      </div>
    </div>
  );
}
