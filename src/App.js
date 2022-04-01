import { useState } from 'react/cjs/react.development';
import TodoList from '../../../../my documents/alchemy/React-To-do/src/views/TodoList';
import './App.css';
import { getUser } from './services/users';
import Home from './views/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      Testing
      <Home setCurrentUser={setCurrentUser} />
      <TodoList currentUser={currentUser} />
    </div>
  );
}

export default App;
