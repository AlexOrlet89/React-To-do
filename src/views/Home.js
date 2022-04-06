import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signupUser } from '../services/users';
import './Todolist.css';

export default function Home({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountExists, setAccountExistence] = useState('true');
  const history = useHistory();

  const setSignInTrue = () => {
    // console.log('sign in');
    setAccountExistence('true');
  };
  const setSignInFalse = () => {
    // console.log('sign up');
    setAccountExistence('false');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('submit', email, password);
    if (accountExists === 'true') {
      const resp = await signInUser({ email, password });
      // console.log(resp);
      setCurrentUser(resp.email);
      history.push('/todolist');
    } else {
      const resp = await signupUser({ email, password });
      // console.log('signup', resp);
      setCurrentUser(resp.email);
      history.push('/todolist');
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <div>
        <div className="signinsignup">
          <div className={accountExists === 'true' ? 'active' : ''} onClick={setSignInTrue}>
            Sign In
          </div>
          <div className={accountExists === 'false' ? 'active' : ''} onClick={setSignInFalse}>
            Sign Up
          </div>
        </div>
        <form className="authform" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
}
