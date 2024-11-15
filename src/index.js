import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the use of 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in Router
root.render(

  <Router>
    <App />
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an an
