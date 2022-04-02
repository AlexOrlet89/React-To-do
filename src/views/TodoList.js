import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { completeTodo, createTodo, getTodos } from '../services/todos';
import ListItem from './ListItem';
import './Todolist.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, newTodo] = useState('');

  const handleComplete = async (todo) => {
    completeTodo(todo);
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await createTodo(todo);
    setTodos((prevState) => [...prevState, newTodo]);
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
          <ListItem key={todo.id} todo={todo} handleComplete={() => handleComplete(todo)} />
        ))}
      </div>
    </div>
  );
}
