import React, { useState } from 'react';
import shortid from 'shortid';
import { Paper, Grid, TextField } from '@material-ui/core';

const TodoForm = (props) => {
  const [state, setState] = useState({ text: '' });

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
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
