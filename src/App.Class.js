//import logo from './logo.svg';
//import './App.css';
import React, { Component, Fragment, createRef } from 'react';
import ToDoContext from './component/todoClass/ToDo.context';
import ToDoHOC2 from './HOC/ToDo2.HOC';
import ToDo from './component/todoClass/ToDo.Component';
import AboutUsClass from './component/aboutUs/AboutUs.Class.component';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';

{/* Fragment used when we dont have root element */ }
{/* We can use our custom fragment instead of built in fragment */ }

class AppClass extends Component {

    static contextType = ToDoContext;
    render() {
        return (
            <Fragment>
                <Navbar />

                <Routes>
                    <Route path="/" exact element={<ToDo />} />
                    <Route path="/about" element={<AboutUsClass developerName='بهزادی' />} />
                </Routes>


            </Fragment>

        );
    }
}

export default ToDoHOC2(AppClass, "");
