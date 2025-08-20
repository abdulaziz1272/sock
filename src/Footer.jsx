import React from 'react';
import './Footer.css';
import logo from './assets/TRENDY.svg';

function Footer() {
  return (
    <div className='footer-bar'>
        <div className="footer-top">
            <img src={logo} alt="footer-logo" />
            <ul className="footer-nav">                
                <li>About us</li>
                <li>Cars</li>
                <li>Cars service</li>
                <li>Contact us</li>                
            </ul>
        </div>
        <div className="footer-btns">
            <button>Telegram</button>
            <button>Instagram</button>
            <button>Twitter</button>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom_left">
                <p>Design by : Og’abek Yusuf</p>
                <p>2023 yil .Trendy Mchj</p>
            </div>
            <p>Code by : Azamjon Abdullayev</p>
        </div>
    </div>
  )
}

export default Footer