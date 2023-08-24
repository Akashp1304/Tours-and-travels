import React from 'react';
// import image1 from '../videos/hotel.jpg';
import './Service.css'
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import image18 from '../videos/maldiv2.jpg';

function Service() {
  return (
    <>
      <div className='myname'>
        <div data-aos='fade-up' className='destination1'>
          <h1 className='page12'><strong>Service</strong> </h1>
          <p className='page2'>Diversity is in our DNA. It is part of our cultural fabric. It helps define our destination’s global brand and is a key differentiator for us.  </p>
          <div data-aos='fade-up' className='first-des'>
            <div className='image1'>
              
              <img alt='...' src={image18}></img>
            </div>

            <div className='des-text'>
              <h2>Places To Stay </h2>
              <p >Home, sweet hotel: From luxurious oceanfront resorts to intimate boutique hotels, Greater Miami has plenty of places to make yourself at home.

                Welcome to Greater Miami! Now, where will you stay? Hotel choices are plentiful here, whether you’re searching for a family-friendly beachfront resort with all the bells and whistles, an intimate boutique hotel for a romantic getaway, or a high-rise home-away-from-home in the heart of Downtown Miami. From the broad sands of South Beach to bustling Brickell, from Coral Gables’ canopied streets to the charming waterfront village of Coconut Grove, there’s a hotel with your name on it.</p>
              <Link to='/Hotels' ><button>Hotels</button></Link>
            </div>

          </div>
          <div data-aos='fade-up' className='first-des'>

            <div className='des-text'>
              <h2>Eat & Drinks</h2>
              <p >From its bold Latin and Caribbean flavors to hot restaurants led by celebrity chefs and fabulous food festivals, there’s much to savor on a culinary journey through Greater Miami and Miami Beach. Explore Miami, one table at a time, with Miami eats. The diverse range of gastronomic experiences includes unique restaurants, food trucks, juice bars and more.

                Begin your dining adventure in Miami Beach, where many top restaurants are tucked inside hotels, including Prime 54 at the Fontainebleau Miami Beach, 27 Restaurant & Bar at the Freehand Miami </p>
              <Link to='/Food' ><button>Foods</button></Link>
            </div>
            <div className='image1'>
              <img alt='' src='https://images.unsplash.com/photo-1517833969405-d4a24c2c8280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwZm9vZCUyMHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
              {/* <img alt='' src={image2}></img> */}
            </div>
          </div>
          <div data-aos='fade-up' className='first-des'>
            <div className='image1'>
              {/* <img alt='' src={image1}></img> */}
              <img alt='' src='https://images.unsplash.com/photo-1503438792824-0882f145c89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1bmdlZSUyMGp1bXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
            </div>

            <div className='des-text'>
              <h2>Events</h2>
              <p >Greater Miami’s exciting annual events are part of what makes this such a dynamic place to be all year long. From Art Basel Miami Beach, North America’s largest (and splashiest!) contemporary art fair, to the South Beach Wine and Food Festival®, which draws celebrity chefs and foodies to the beach, the atmosphere is always jubilant.

                For those who appreciate South Beach’s colorful architecture and fascinating history, Art Deco Weekend in January is a fun and festive celebration on Ocean Drive.</p>
              <Link to='/Events' ><button>Events</button></Link>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
export default Service;