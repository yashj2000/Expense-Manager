import { ConfigProvider, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
//import antd

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{
          algorithm: theme.defaultAlgorithm
    }}>
  <App />
</ConfigProvider>


    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();