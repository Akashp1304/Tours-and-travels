import React from 'react'
import image8 from '../videos/bungee.jpg';
import image9 from '../videos/hotair.jpg';
import image10 from '../videos/opera.jpg';
import image11 from '../videos/scuba.jpg';
import image12 from '../videos/sky.jpg';
import image13 from '../videos/para.jpg';
import Footer from './footer';
import hotel from '../videos/maldiv2.jpg';
import './events.css'
import image14 from '../videos/human.jpg';
import image15 from '../videos/disneyland.jpg';
import image16 from '../videos/roler.jpg';
 function Events() {
  return (
    <>
     <img className='conee' src={hotel} alt='...'></img>
     <h1 className='eve'><strong>Events</strong></h1>
    <div className='container '>
      <div className='row'>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image8} alt="..." className='card-images' />
            <h4 className='card-titles'>Bungee Jumping</h4>
            <h6 className='card-paraa1'>Price:-<strong>$50</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image9} alt="..." className='card-images' />
            <h4 className='card-titles'>Hot Air Baloon</h4>
            <h6 className='card-paraa1'>Price:-<strong>$30</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image10} alt="..." className='card-images' />
            <h4 className='card-titles'>Opera</h4>
            <h6 className='card-paraa1'>Price:-<strong>$35</strong>(for 1 night)</h6>

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image11} alt="..." className='card-images' />
            <h4 className='card-titles'>
            Scuba Diving</h4>
            <h6 className='card-paraa1'>Price:-<strong>$50</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image12} alt="..." className='card-images' />
            <h4 className='card-titles'>
            Sky Diving</h4>
            <h6 className='card-paraa1'>Price:-<strong>$30</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image13} alt="..." className='card-images' />
            <h4 className='card-titles'>
            Palaceara Gliding </h4>
            <h6 className='card-paraa1'>Price:-<strong>$35</strong>(for 1 night)</h6>

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image14} alt="..." className='card-images' />
            <h4 className='card-titles'>
              Human Slingshot</h4>
            <h6 className='card-paraa1'>Price:-<strong>$50</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image15} alt="..." className='card-images' />
            <h4 className='card-titles'>
              Disney Land</h4>
            <h6 className='card-paraa1'>Price:-<strong>$30</strong>(for 1 night)</h6>

          </div>
        </div>
        <div className='col-md-4'>
          <div data-aos='fade-up' className='card-contain'>
            <img src={image16} alt="..." className='card-images' />
            <h4 className='card-titles'>
              Roler Coaster</h4>
            <h6 className='card-paraa1'>Price:-<strong>$35</strong>(for 1 night)</h6>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default Events;