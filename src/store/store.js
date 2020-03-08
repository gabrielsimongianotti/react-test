import { createStore } from 'redux';

const INITIAL_STATE = {
  input: "",

}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, input: action.title }
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;