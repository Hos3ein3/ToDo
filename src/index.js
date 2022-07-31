import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import AppClass from './App.Class';
//import AppFunc from './App.Func';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppFunc from './App.Func';
import GlobalStateFunc from './container/GlobalState.Func';
import GlobalStateClass from './container/GlobalState.Class';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppFunc /> */
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStateFunc>
                <AppFunc />

            </GlobalStateFunc>
            <hr />
            {/* <GlobalStateClass>
                <AppClass />

            </GlobalStateClass> */}
            <ToastContainer />
        </BrowserRouter>
    </React.StrictMode>
);

// reportWebVitals();
