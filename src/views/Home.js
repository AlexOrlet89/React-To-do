import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/users';

export default function Home({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountExists, setAccountExistence] = useState('true');

  const setSignInTrue = () => {
    setAccountExistence('true');
  };
  const setSignInFalse = () => {
    setAccountExistence('false');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (accountExists === 'true') {
      const resp = await signInUser({ email, password });
      setCurrentUser(resp.email);
    } else {
      const resp = await signupUser({ email, password });
      setCurrentUser(resp.email);
    }
  };

  return (
    <div>
      Home
      <div>
        <div onClick={setSignInTrue}>Sign In</div>
        <div onClick={setSignInFalse}>Sign Up</div>
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            {' '}
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button> Submit </button>
        </form>
      </div>
    </div>
  );
}
