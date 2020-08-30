import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTodo, readTodo, updateTodo, deleteTodo } from './TodoFunctions';

import TodoForm from './TodoForm';
import TodoTabs from './TodoTabs';
import TodoAll from './TodoAll';
import TodoActive from './TodoActive';
import TodoComplete from './TodoComplete';

const TodoList = () => {
  const [state, setState] = useState({ todos: [] });
  useEffect(() => {
    const token = localStorage.usertoken;
    readTodo(token).then((response) => {
      let todos = response.data;
      setState({ todos });
    });
  // }, [setState]);
  }, [state]);
  // console.log(state);

  const addTodo = (todo) => {
    setState({
      todos: [todo, ...state.todos],
    });
  };
  console.log(state);

  const toggleComplete = (id) => {
    console.log(id);
    setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          const token = localStorage.usertoken;
          const editedTodo = {
            id: todo.id,
            complete: !todo.complete,
          };
          console.log(editedTodo);
          updateTodo(token, editedTodo);
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
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          const token = localStorage.usertoken;
          const editedTodo = {
            id: todo.id,
            // complete: !todo.complete,
          };
          console.log(editedTodo);
          deleteTodo(token, editedTodo);
          return {
            ...todo,
            // complete: !todo.complete,
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
