import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import AppJoke from './AppJoke';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppJoke />
  </React.StrictMode>,
  document.getElementById('root')
);