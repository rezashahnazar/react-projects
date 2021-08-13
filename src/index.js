import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import AppJoke from './AppJoke';
import AppIter from "./AppIter";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppJoke />
    <AppIter />
  </React.StrictMode>,
  document.getElementById('root')
);