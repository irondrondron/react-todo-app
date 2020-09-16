import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);



export const addCounterAction = (counter) => ({
  type: 'ADD_COUNTER',
  payload: counter,
});

export const subCounterAction = (counter) => ({
  type: 'SUB_COUNTER',
  payload: counter,
});
