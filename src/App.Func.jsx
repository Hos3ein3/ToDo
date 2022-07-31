import React, { Fragment, useContext, useState } from "react";
import AboutUsFunc from './component/aboutUs/AboutUs.Func.Component';
import ToDo from "./component/todoFunc/ToDo.component";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/navbar";

///func must use props if it has props :)
const AppFunc = () => {

    //const context = useContext(ToDoContext);


    return (
        <Fragment>
            <Navbar />
            {/* <ToDo />
            <AboutUsFunc /> */}
            <Routes>
                <Route path="/" element={<ToDo />}/>
                <Route path="/about" element={<AboutUsFunc developerName='محمد حسین' />}/>
            </Routes>
        </Fragment>
    );
};
export default AppFunc;
