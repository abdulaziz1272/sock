import React from 'react';
import './Look.css';
import sock1 from './assets/socks-on1.jpg';
import sock2 from './assets/socks-on2.jpg';
import sock3 from './assets/socks-on3.jpg';
import sock4 from './assets/socks-on4.jpg';
import sock5 from './assets/socks-on5.jpg';
import sock6 from './assets/socks-on6.jpg';
import sock7 from './assets/socks-on7.jpg';
import sock8 from './assets/socks-on8.jpg';
import sock9 from './assets/socks-on9.jpg';

function Look() {
  return (
    <div className='look-bar'>
        <div className="look-title">
            o’zgachalik va sifat uyg’unligi
        </div>
        <ul className="look-ul">
            <li>
                <img src={sock1} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock2} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock3} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock4} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock5} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock6} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock7} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock8} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={sock9} alt="" />
                <div className='look-bottom'>
                    <p>Providing intermediary services </p>
                    <div className='color-combo'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </li>
        </ul>
        <button className="look-btn">Batafsil</button>
    </div>
  )
}

export default Look