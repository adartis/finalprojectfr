import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Import the Provider component from react-redux to provide Redux store access
import { Provider } from 'react-redux';
// Import the store from the configured store file
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with Provider and pass in the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
