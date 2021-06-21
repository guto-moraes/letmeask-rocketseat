import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Button } from './components/Button';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>,
  document.querySelector('#root')
);
