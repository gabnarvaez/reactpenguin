import React from 'react';
import logo from './loguito.jpeg';
import CartWidget from '../CartWidget/CartWidget';
import NavBar from './Navbar.css'

function NavBar() {
    return (
     <nav className='navbar'>
        <div>
            <img className="loguito" src="{logo}" alt="Logo de la empresa" />
        </div>
        <ul className='navbar-links'>
            <li>
                <a className='navbar-item' href='#'>Home</a>
            </li>
            <li>
                <a className='navbar-item' href='#'>Products</a>
            </li>
            <li>
                <a className='navbar-item' href='#'>Contact</a>
            </li>
        </ul>
        <CartWidget/>
     </nav>
    );
}

export default NavBar;
