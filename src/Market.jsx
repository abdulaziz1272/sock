import React from 'react';
import './Market.css';
import marketBtn from './assets/market-btn.svg';
import uzum from './assets/uzum.jpg';
import aliBaba from './assets/ali-baba.jpg';
import amazon from './assets/amazon.jpg';
import temu from './assets/temu.jpg';

function Market() {
  return (
    <div className='market-bar'>
        <div className="market-title">
            <h2>Biz bozorning katta qismini egalladik</h2>
        </div>
        <ul className="market-ul">
            <li className='li-baba regular'><img src={aliBaba} alt="ali-baba" /></li>
            <li className='li-uzum'><img src={uzum} alt="uzum" /></li>
            <li className='li-amazon regular'><img src={amazon} alt="amazon" /></li>
            <li className='li-temu regular'><img src={temu} alt="temu" /></li>
        </ul>
        <div className="market-bottom">
            <p>Providing intermediary services and talented freelancers</p>
            <button>
                <img src={marketBtn} alt="market- btn" />
            </button>
        </div>
    </div>
  )
}

export default Market