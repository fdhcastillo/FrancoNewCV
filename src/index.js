import React from 'react';
import ReactDOM from 'react-dom';
import { MainScreen } from './MainScreen';
import './../src/index.css';
import { AppRouter } from './routers/AppRouter';


ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);