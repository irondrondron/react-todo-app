import React, { useState } from 'react';
import { Paper, Grid, TextField } from '@material-ui/core';
import { createTodo } from './TodoFunctions';

const TodoForm = (props) => {
  const [state, setState] = useState({ text: '' });

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      // user_id: decoded.id,
      text: state.text,
      complete: false,
    };
    const token = localStorage.usertoken;
    createTodo(token, newTodo).then((res) => {
      if (res) {
        console.log(res);
      }
    });

    props.onSubmit({
      // id: state.id,
      text: state.text,
      complete: false,
    });
    setState({
      text: '',
    });
  };

  return (
    <Paper>
      <Grid justify="space-around" container>
        <Grid item>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoComplete="off"
              name="text"
              value={state.text}
              onChange={handleChange}
              margin="normal"
              label="Input todo..."
              style={{ width: '85vw' }}
            />
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TodoForm;
