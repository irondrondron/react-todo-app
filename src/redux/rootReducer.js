import { combineReducers } from 'redux';

import userName from './reducers/userName';
import counter from './reducers/counter';

export default combineReducers({ userName, counter });

// const initialState = {
//   counter: 0,
// };

// export default function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT_COUNTER':
//       return {
//         counter: state.counter + 1,
//       };
//     case 'DECREMENT_COUNTER':
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// }
