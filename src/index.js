import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterProvider } from "./store/cart-content";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CounterProvider>
    <App />
  </CounterProvider>
);
