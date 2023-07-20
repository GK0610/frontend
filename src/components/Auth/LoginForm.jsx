import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { css } from '@emotion/react';
import './LoginForm.css';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login-form">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <Button type="submit" variant="contained" css={submitButtonStyle}>
          Login
        </Button>
      </form>
    </div>
  );
};

const submitButtonStyle = css`
  margin-top: 16px;
`;

export default LoginForm;
