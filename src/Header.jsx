import React from 'react';
import './Header.css';
import logo from './assets/TRENDY.svg';
import menu from './assets/Frame 293.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header-bar'>
        <div className="header-left">
            <div className="header-logo">
                <img src={logo} alt="header-logo" />
            </div>
            <nav className='header-nav'>
                <ul className='header-nav_ul'>
                    <li><a href="">About us</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Cantact us</a></li>    
                </ul>
            </nav>
        </div>
        <div className="header-right">
            <ul className="languages">
                <li className='lan'>UZ</li>
                <li>|</li>
                <li className='lan'>RU</li>
                <li>|</li>
                <li className='lan'>EN</li>
            </ul>
            <div className="header-btn">
                <button className='connect-btn'>Bog’lanish</button>
                <button className='menu-btn'><img src={menu} alt="menu" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header