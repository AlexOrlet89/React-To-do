import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { completeTodo, createTodo, getTodos } from '../services/todos';
import { logout } from '../services/users';
import ListItem from './ListItem';
import './Todolist.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const { currentUser } = useUserContext();
  // console.log(currentUser);

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
  }, [newTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newerTodo = await createTodo(newTodo);
    setTodos((prevState) => [...prevState, newerTodo]);
    setNewTodo('');
  };

  const handleLogout = async () => {
    // console.log('log out');
    await logout();
  };

  return (
    <div>
      <h2>{`${currentUser} TodoList`}</h2>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <div>
          {' '}
          <form onSubmit={handleSubmit}>
            <input
              name="todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              required
            />
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
