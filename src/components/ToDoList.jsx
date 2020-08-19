import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoForm from './TodoForm';
import TodoTabs from './TodoTabs';
import TodoAll from './TodoAll';
import TodoActive from './TodoActive';
import TodoComplete from './TodoComplete';

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

  const handleDeleteTodo = (id) => {
    setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Router>
        <Switch>
          <Route
            exact
            path="/all"
            render={(props) => (
              <TodoAll
                {...props}
                state={state}
                toggleComplete={toggleComplete}
                handleDeleteTodo={handleDeleteTodo}
              />
            )}
          />
          <Route
            exact
            path="/active"
            render={(props) => (
              <TodoActive
                {...props}
                state={state}
                toggleComplete={toggleComplete}
                handleDeleteTodo={handleDeleteTodo}
              />
            )}
          />
          <Route
            path="/complete"
            render={(props) => (
              <TodoComplete
                {...props}
                state={state}
                toggleComplete={toggleComplete}
                handleDeleteTodo={handleDeleteTodo}
              />
            )}
          />
        </Switch>
        <TodoTabs
          allTodosLength={state.todos.filter((todo) => todo).length}
          activeLength={state.todos.filter((todo) => !todo.complete).length}
          completeLength={state.todos.filter((todo) => todo.complete).length}
        />
      </Router>
    </div>
  );
};
export default TodoList;
