import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import AppClass from './App.Class';
//import AppFunc from './App.Func';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppFunc from './App.Func';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppFunc /> */
    <React.StrictMode>
        <AppFunc />
        <hr />
        <AppClass />
        <ToastContainer />
    </React.StrictMode>
);

// reportWebVitals();
