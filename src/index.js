import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import axios from 'axios'
import './css/index.css';

axios.defaults.baseURL = "https://dailynewssense-api.herokuapp.com/api"

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = process.env.REACT_APP_HEROKUURL;
} else if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = process.env.REACT_APP_LOCALURL;
}
const store = configureStore();
window.store = store;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
