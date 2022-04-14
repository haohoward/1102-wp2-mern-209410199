import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_99 from './App_99';
import'normalize.css'
import reportWebVitals from './reportWebVitals';
import {AppProvider_99} from './context/appContext_99'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_99>
     <App_99 />
    </AppProvider_99>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
