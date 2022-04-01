import { useState } from 'react/cjs/react.development';
import './App.css';
import { getUser } from './services/users';
import Home from './views/Home';
import TodoList from './views/TodoList';

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
