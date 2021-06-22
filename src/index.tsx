import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase.ts';

import './assets/styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);