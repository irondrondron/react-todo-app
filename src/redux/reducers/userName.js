const initialState = {
  userName: '',
};

export default function userName(state = initialState, action) {
  switch (action.type) {
    case 'USERNAME':
      return {...state, 
        userName: action.payload,
      };
    default:
      return state;
  }
}
