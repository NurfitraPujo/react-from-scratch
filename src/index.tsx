import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// @ts-ignore
if (module.hot) module.hot.accept();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
