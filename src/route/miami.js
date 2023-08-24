import React, { useEffect } from 'react'
import './miami.css'
import image1 from '../videos/miami.jpg';
import image2 from '../videos/miami5.jpg';
import image3 from '../videos/miami3.jpg';
import image4 from '../videos/maimi4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from '../component/footer';

function Miami() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className='my1'>

        <div data-aos='fade-up' className='destination1'>
          <h1 className='page12'>MIAMI FLORIDA </h1>
          <p className='page2'>Diversity is in our DNA. It is part of our cultural fabric. It helps define our destination’s global brand and is a key differentiator for us.  </p>
          <div data-aos='fade-up' className='first-des'>

            <div className='des-text'>
              <h2>Art & Culture In Miami</h2>
              <p >Every year in early December, the international Art Basel Miami Beach art fair draws thousands of artists and collectors to our shores. The week surrounding it – Miami Art Week – is filled with satellite fairs, art shows and other events that showcase local artists. All year long, the destination’s dynamic gallery scene encompasses mainstream, thought-provoking and emerging artists. Galleries abound in areas including the Miami Design District, Allapattah, Little Haiti, Downtown Miami and South Beach. </p>

            </div>
            <div className='image'>
              <img alt='' src={image1}></img>
              <img alt='' src={image2}></img>
            </div>
          </div>
          <div data-aos='fade-up' className='first-des'>
            <div className='image'>
              <img alt='' src={image3}></img>
              <img alt='' src={image4}></img>
            </div>

            <div className='des-text'>
              <h2>Explore Miami Nightlife </h2>
              <p >Whether you want to check out nightclubs in South Beach, go salsa dancing in Little Havana or relax in an artsy cocktail bar, you’ll find it under the moonlight here.

Greater Miami & Miami Beach ranks among the world’s best places to enjoy exciting nightlife. When the sun sets and the stars come out, a whole new world reveals itself.Tap into the late-night energy that’s distinctly Miami, and find an amazing diversity of nightlife options, styles and vibes. Picture yourself dancing salsa in Little Havana or at Mango’s Tropical Cafe in South Beach. Sip a cocktail surrounded by street murals in Wynwood. See the skyline from a rooftop bar in Downtown Miami.</p>

            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Miami