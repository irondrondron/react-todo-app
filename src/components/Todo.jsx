import React from 'react';
import { Box, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
  todoItem: {
    margin: '10px auto',

    minHeight: '21px',
    boxShadow: '0px 0px 4px 2px #00000033',
    transition: 'background-color .2s ease-out',
  },
  todoItemComplete: {
    margin: '10px auto',
    minHeight: '21px',
    boxShadow: '0px 0px 4px 2px #00000033',
    backgroundColor: '#00ff0022',
    transition: 'background-color .2s ease-out',
  },
});

const Todo = (props) => {
  const classes = useStyles();
  return (
    <Paper
      square
      className={!props.complete ? classes.todoItem : classes.todoItemComplete}
    >
      <Box style={{ display: 'flex' }}>
        <Box
          onClick={props.toggleComplete}
          style={{ padding: '20px 30px', width: '90%' }}
        >
          {props.todo.text}
        </Box>
        <Box
          className={classes.hoverDelete}
          style={{
            padding: '0px 10px',
            width: '10%',
            alignSelf: 'center',
            textAlign: 'center',
          }}
          onClick={props.onDelete}
        >
          <IconButton color="secondary" onClick={props.handleDeleteTodo}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Todo;
