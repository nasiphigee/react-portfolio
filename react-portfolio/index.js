import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the import path to where your App.jsx is located
import './index.css'; // If you have global styles

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
