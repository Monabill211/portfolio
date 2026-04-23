import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { UiProvider } from "./ui/UiProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <UiProvider>
      <App />
    </UiProvider>
  </HashRouter>
);

reportWebVitals();
