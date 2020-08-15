import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import TodoItems from './TodoItems'
const useStyles = makeStyles({
  todoItem: {
    margin: '10px auto',
    padding: '20px 30px',
    minHeight: '21px',
    boxShadow: '0px 0px 4px 2px #00000033',
    transition: 'filter .2s ease-out'
  },
  todoItemComplete: {
    margin: '10px auto',
    padding: '20px 30px',
    minHeight: '21px',
    boxShadow: '0px 0px 4px 2px #00000033',
    filter: 'opacity(0.4)',
    transition: 'filter .2s ease-out'
  },
});

const Todo = (props) => {
  const classes = useStyles();
  return (
    <Box
      square
      className={
        !props.complete ? classes.todoItem : classes.todoItemComplete
      }
      onClick={props.toggleComplete}
      key={props.key}
    >
      {JSON.stringify(props.todo)}
      {/* {props.text} */}
    </Box>
  );
};

export default Todo;
