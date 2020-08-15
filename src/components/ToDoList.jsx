import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { Container } from '@material-ui/core';
import Todo from './Todo';
import TodoTabs from './TodoTabs';

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
      <Container
        fixed
        style={{ padding: '20px', width: '100%', marginBottom: '56px' }}
      >
        {state.todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => toggleComplete(todo.id)}
            text={state.todos}
            todo={todo}
            complete={todo.complete}
          />
        ))}
      </Container>
      <TodoTabs
        allTodosLength={state.todos.filter((todo) => todo).length}
        activeLength={state.todos.filter((todo) => !todo.complete).length}
        completeLength={state.todos.filter((todo) => todo.complete).length}
        complete={state.todos.filter((todo) => todo.complete)}
      />
    </div>
  );
};
export default TodoList;
