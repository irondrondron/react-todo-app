import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
// import { Paper } from '@material-ui/core';

const TodoList = () => {
  const [state, setState] = useState({ todos: [] });

  const addTodo = (todo) => {
    setState({
      todos: [todo, ...state.todos],
    });
  };

  const toggleComplete = (id) => {
    setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {state.todos.map((todo) => (
        <Todo
          key={todo.id}
          toggleComplete={() => toggleComplete(todo.id)}
          todo={todo}
        />
        // <Paper key={todo.id}>{todo.text}</Paper>
      ))}
    </div>
  );
};
export default TodoList;
