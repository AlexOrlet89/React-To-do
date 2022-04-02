import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './App.css';
import { getUser } from './services/users';
import Home from './views/Home';
import TodoList from './views/TodoList';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {currentUser ? (
              <Redirect to="/todolist"></Redirect>
            ) : (
              <Home setCurrentUser={setCurrentUser} />
            )}
          </Route>
          <Route exact path="/todolist">
            {currentUser ? <TodoList currentUser={currentUser} /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
