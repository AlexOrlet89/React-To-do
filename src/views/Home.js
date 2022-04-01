import React, { useState } from 'react';
import { logout, signInUser, signupUser } from '../services/users';

export default function Home({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountExists, setAccountExistence] = useState('true');

  const setSignInTrue = () => {
    console.log('sign in');
    setAccountExistence('true');
  };
  const setSignInFalse = () => {
    console.log('sign up');
    setAccountExistence('false');
  };

  const handleLogout = async () => {
    console.log('log out');
    await logout();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', email, password);
    if (accountExists === 'true') {
      const resp = await signInUser({ email, password });
      console.log(resp);
      // setCurrentUser(resp.email);
    } else {
      const resp = await signupUser({ email, password });
      console.log('signup', resp);
      setCurrentUser(resp.email);
    }
  };

  return (
    <div>
      Home
      <div>
        <div className="" onClick={setSignInTrue}>
          Sign In
        </div>
        <div onClick={setSignInFalse}>Sign Up</div>
        <form onSubmit={handleSubmit}>
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
        <button onClick={handleLogout}> Logout </button>
      </div>
    </div>
  );
}
