import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

