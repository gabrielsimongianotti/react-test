import { createStore } from 'redux';
const now = new Date
const initialState = {
  input: "",
  datesEndPoint: [],
  startData: "2019-01-01",
  endData: now.getFullYear + "-" + now.getMonth() + "-" + now.getDay(),
  count: 0
}

function options(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, input: action.title }
    case 'ADD_DATAS':
      return { ...state, datesEndPoint: action.title }
    case 'ADD_START_DATA':
      return { ...state, startData: action.title }
    case 'ADD_END_DATA':
      return { ...state, endData: action.title }
    default:
      return state;
  }
}

const input = createStore(options);

export default input;