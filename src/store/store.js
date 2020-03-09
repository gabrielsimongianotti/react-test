import { createStore } from 'redux';

const INITIAL_STATE = {
  input: "",
  datesEndPoint: []
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, input: action.title }
    case 'ADD_DATES':
      return { ...state, datesEndPoint: action.title }
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;