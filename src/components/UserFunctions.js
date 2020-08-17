import axios from 'axios';

export const register = (newUser) => {
  return axios
    .post('users/register', {
      login: newUser.login,
      password: newUser.password,
    })
    .then((res) => {
      console.log('Registered');
    });
};

export const login = (user) => {
  return axios
    .post('users/login', {
      login: user.login,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem('usertoken', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
