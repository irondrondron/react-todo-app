import axios from 'axios';

export const createTodo = (token, newTodo) => {
  return axios
    .post(
      'todos/createtodo',
      {
        key: 'value',
        text: newTodo.text,
        complete: newTodo.complete,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      console.log('Created');
    });
};

export const readTodo = (token) => {
  return axios
    .post(
      'todos/readalltodo',
      {
        key: 'value',
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .catch((err) => {
      console.log(err);
    });
};

export const updateTodo = (token, editedTodo) => {
  return axios
    .post(
      'todos/updatetodo',
      {
        key: 'value',
        id: editedTodo.id,
        complete: editedTodo.complete,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      console.log('Edited');
    });
};

export const deleteTodo = (token, deletedTodo) => {
  return axios
    .post(
      'todos/deletetodo',
      {
        key: 'value',
        id: deletedTodo.id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      console.log('Deleted');
    });
};
