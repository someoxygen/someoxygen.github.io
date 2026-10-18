import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { applyTheme, getInitialTheme } from './theme';
import { localizedPath, routeInfo } from './seo/config';

applyTheme(getInitialTheme());

const container = document.getElementById('root') as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const { language } = routeInfo(window.location.pathname);
if (container.hasChildNodes() && container.dataset.route === localizedPath(window.location.pathname, language)) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
