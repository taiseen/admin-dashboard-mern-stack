import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store from "reduxToolkit";
import React from 'react';
import App from './App';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);