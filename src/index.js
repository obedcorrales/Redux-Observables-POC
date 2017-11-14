import 'babel-polyfill';
import React from 'react';
import { render } from "react-dom";

import App from "./components/App";

// Redux
import configureStore from './store/configureStore';
import * as actions from './redux/actions';
import { assignAll } from "redux-act";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();
assignAll(actions, store);

render(
  <Provider store={store} >
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);