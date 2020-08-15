import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/';
import Header from './components/Header';
import TodoItems from './components/TodoList';
import Todo from './components/Todo';
import TodoTabs from './components/TodoTabs';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  // const updateTodoToShow = (s) => {
  //   this.setState({
  //     todoToShow: s,
  //   });
  // };


  //   if (state.todoToShow === 'all') {
  //     todos = state.todos;
  //   } else if (state.todoToShow === 'active') {
  //     todos = state.todos.filter((todo) => !todo.complete);
  //   } else if (state.todoToShow === 'complete') {
  //     todos = state.todos.filter((todo) => todo.complete);
  //   }
  

  return (
    <ThemeProvider theme={theme}>
      <Paper
        square
        style={{ width: '100%', minHeight: '100vh', height: 'auto' }}
      >
        <Header setDarkMode={changeTheme} darkMode={darkMode} />
        {/* <TodoForm onSubmit={addTodo} /> */}
        {/* {children} */}
        {/* <h6>{JSON.stringify (state.todos)}</h6> */}

        {/* <TodoForm onSubmit={addTodo} /> */}

        {/* {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={toggleComplete(todo.id)}
            // onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))} */}

        <TodoList
        />

        {/* <TodoItems
          // qq={state.todos.id}
          toTodo={state.todos.map((todo) => (
            <Todo
              key={todo.id}
            />
          ))}
        /> */}

        {/* <TodoTabs
          allTodosLength={state.todos.filter((todo) => todo).length}
          activeLength={state.todos.filter((todo) => !todo.complete).length}
          completeLength={state.todos.filter((todo) => todo.complete).length}
          complete={state.todos.filter((todo) => todo.complete)}
        /> */}
      </Paper>
    </ThemeProvider>
  );
}
