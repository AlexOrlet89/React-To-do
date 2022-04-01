import React from 'react';

export default function ListItem({ todo }) {
  return (
    <div>
      {' '}
      <div className="listitem" key={todo.id}>
        <p>{todo.id}</p>
      </div>
    </div>
  );
}
