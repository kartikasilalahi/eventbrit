import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import AppRoute from './AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);
