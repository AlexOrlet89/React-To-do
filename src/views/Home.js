import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountExists, setAccountExistence] = useState('true');

  const setSignInTrue = () => {
    setAccountExistence('true');
  };
  const setSignInFalse = () => {
    setAccountExistence('false');
  };

  return (
    <div>
      Home
      <div>
        <div onSubmit={setSignInTrue}>Sign In</div>
        <div onSubmit={setSignInFalse}>Sign Up</div>
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
          <button> SignUp </button>
        </form>
      </div>
    </div>
  );
}
