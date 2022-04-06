import React from 'react';

export default function ListItem({ todo, handleComplete }) {
  return (
    <div>
      <div
        className={`listitem ${todo.complete ? 'complete' : ''}`}
        key={todo.id}
        onClick={handleComplete}
      >
        <p>{todo.task}</p>
      </div>
    </div>
  );
}
