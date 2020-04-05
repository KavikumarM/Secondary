import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Authentication from './containers/Authentication/Authentication'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and l oad faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
