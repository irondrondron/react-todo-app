import { Paper } from '@material-ui/core';

import React from 'react';

const Todo = (props) => <Paper onClick={props.toggleComplete} >{props.todo.text}</Paper>;

export default Todo;
