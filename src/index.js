import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoAll from './components/TodoAll';
import TodoActive from './components/TodoActive';
import TodoComplete from './components/TodoComplete';
import TodoItems from './components/TodoList';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        {/* <Switch>
          <Route exact path='/' component={TodoAll}/>
          <Route path='/active' component={TodoActive}/>
          <Route path='/posts' component={TodoComplete}/>
        </Switch> */}
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
