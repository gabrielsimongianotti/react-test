import React from 'react';
import { Provider } from "react-redux";

import './App.css';
import Routes from "./routes/Index.js"
import store from './store/Input.js'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <div className="container">
          <div className="content">
            <Routes />
          </div>
        </div>
      </Provider>
    </div>

  );
}

export default App;