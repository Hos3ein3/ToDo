import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div dir='rtl' className='m-3'>
            <ul className='nav nav-pills justify-content-center'>
                <li className='nav-item'>
                    <NavLink to='/' exact className='nav-link'  > کارها </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/about' exact className='nav-link' >درباره ما</NavLink>
                </li>
            </ul>
        </div>

    );
}
export default Navbar;