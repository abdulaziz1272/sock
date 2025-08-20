import React from 'react';
import './Products.css';
import trendy1 from './assets/TRENDY1.svg';
import nike1 from './assets/nike1.png';
import nike2 from './assets/nike2.png';
import nike3 from './assets/nike3.png';
import nike4 from './assets/nike4.png';
import nike5 from './assets/nike5.png';
import arrow1 from './assets/arrow1.svg';

function Products() {
  return (
    <div className='products-bar'>
        <div className="products-title">
            <h2>Keng qamrovli mahsulotlar istalgan turda</h2>
        </div>
        <ul className="products-lists">
            <li className='products-li'>
                <img src={nike1} alt="nike1" className='products-li_img'/>
                <div className='product-li_bottom'>
                    <p>MAN</p>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
            </li>
            <li className='products-li'>
                <img src={nike2} alt="nike2"  className='products-li_img'/>
                <div className='product-li_bottom'>
                    <p>MAN</p>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
            </li>
            <li className='products-li'>
                <img src={nike3} alt="nike3"  className='products-li_img'/>
                <div className='product-li_bottom'>
                    <p>WOMAN</p>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
            </li>
            <li className='products-li'>
                <img src={nike4} alt="nike4"  className='products-li_img'/>
                <div className='product-li_bottom'>
                    <p>KID</p>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
            </li>
            <li className='products-li'>
                <img src={nike5} alt="nike5"  className='products-li_img'/>
                <div className='product-li_bottom'>
                    <p>KID</p>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
            </li>
            <li id='products-li2'>
                <div className='more'>
                    <div className=''>
                        <img src={arrow1} alt="arrow2" />
                    </div>
                </div>
                <div className='product-li2_all'>
                    ALL
                </div>
            </li>
        </ul>
        <div className="products-trendy">
            <div className="yellow-circle"></div>
            <ul className="trendy-ul">
                <li><img src={trendy1} alt="1" /></li>
                <li><img src={trendy1} alt="2" /></li>
                <li><img src={trendy1} alt="3" /></li>
                <li><img src={trendy1} alt="4" /></li>
                <li><img src={trendy1} alt="5" /></li>
                <li><img src={trendy1} alt="6" /></li>
                <li><img src={trendy1} alt="7" /></li>
            </ul>
            <div className="yellow-circle"></div>
        </div>
    </div>
  )
}

export default Products