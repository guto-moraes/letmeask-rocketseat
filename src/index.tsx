import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from './components/Title';
import { Button } from './components/Button';

//import './services/firebase.ts'

ReactDOM.render(
  <React.StrictMode>
    <Title title="LetMeAsk - ReactJs App" />
    <Button/>
  </React.StrictMode>,
  document.querySelector('#root')
);