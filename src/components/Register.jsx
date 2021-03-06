import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, TextField, Button } from '@material-ui/core';
import { register } from './UserFunctions';

const Register = () => {
  const history = useHistory();
  const [state, setState] = useState({ username: '', password: '' });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: state.username,
      password: state.password,
    };
    register(newUser).then((res) => {
      if (res) {
        history.push(`/login`);
      }
    });
    console.log(newUser);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Paper
        display="flex"
        justifyContent="center"
        alignItems="center"
        elevation={6}
      >
        <form
          autoComplete="off"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '20px',
          }}
          onSubmit={onSubmit}
        >
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            style={{
              margin: '10px',
            }}
            onChange={onChange}
          ></TextField>
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            style={{
              margin: '10px',
            }}
            onChange={onChange}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              margin: '10px',
            }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
