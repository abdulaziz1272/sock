import React from 'react';
import './Map.css';
import MapLocation from './assets/map-locarion.png';

function Map() {
  return (
    <div className='map-bar'>
        <div className="application">
            <h2><span>malumotingizni qoldiring</span> <span>aloqaga chiqamiz</span></h2>
            <div className='apply-form'>
                <input type="text" name="" id="" placeholder='Ism'/>
                <input type="text" name="" id="" placeholder='Telefon'/>
                <button>yuborish</button>
            </div>
        </div>
        <div className="location">
            <img src={MapLocation} alt="map" />
        </div>
    </div>
  )
}

export default Map