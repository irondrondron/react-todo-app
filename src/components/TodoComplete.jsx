import React from 'react';
import { Container } from '@material-ui/core';
import Todo from './Todo';

const TodoComplete = (props) => {
  return (
    <Container
      fixed
      style={{ padding: '20px', width: '100%', marginBottom: '56px' }}
    >
      {props.state.todos.map((todo) =>
        todo.complete ? (
          <Todo
            key={todo.id}
            toggleComplete={() => props.toggleComplete(todo.id)}
            onDelete={() => props.handleDeleteTodo(todo.id)}
            todo={todo}
            complete={todo.complete}
          />
        ) : null
      )}
    </Container>
  );
};
export default TodoComplete;
