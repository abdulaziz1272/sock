import React from 'react';
import './Group.css';

import worker1 from './assets/worker1.jpg';
import worker2 from './assets/worker2.jpg';
import worker3 from './assets/worker3.jpg';
import coworkers from './assets/coworkers.jpg';
import groupVector from './assets/group-vector.svg';

function Group() {
  return (
    <div className='group-bar'>
        <div className="group-img">
            <img src={coworkers} alt="coworkers" />
        </div>
        <div className="group-main">
            <h2>o’z ishining ustasi bo’lgan jamoamiz</h2>
            <div className="workers-list">
                <ul className='workers-list_ul'>
                    <li className='li-img1'><img src={worker1} alt="worker1" /></li>
                    <li className='li-img2' id='li-image2'><img src={worker2} alt="worker2" /></li>
                    <li className='li-img3' id='li-image3'><img src={worker3} alt="worker3" /></li>
                </ul>
                <img src={groupVector} alt="group vector" className='arrow'/>
            </div>
        </div>
    </div>
  )
}

export default Group