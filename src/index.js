import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers);

render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

