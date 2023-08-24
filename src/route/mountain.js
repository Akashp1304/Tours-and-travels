import React, { useEffect } from 'react'
import './miami.css';
import Footer from '../component/footer';
import image9 from '../videos/alaska1.jpg';
import image10 from '../videos/alaska2.jpg';
import image11 from '../videos/alaska3.jpg';
import image12 from '../videos/alaska4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Mountain() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className='my1'>

        <div data-aos='fade-up' className='destination1'>
          <h1 className='page12'>ALASKA</h1>
          <p className='page2'>Diversity is in our DNA. It is part of our cultural fabric. It helps define our destination’s global brand and is a key differentiator for us.  </p>
          
          <div data-aos='fade-up' className='first-des'>
            <div className='image'>
              <img alt='' src={image9}></img>
              <img alt='' src={image10}></img>
            </div>

            <div className='des-text'>
              <h2>Land of Eternal Winter </h2>
              <p >The Alaska Range is a 600-mile long arc of mountains that stretches from the Alaska-Canada border all the way to the Alaska Peninsula. The range is highest at its mid-section, a vast region of towering peaks and massive glaciers that lies within Denali National Park and Preserve. Denali is a region of great geologic activity and complexity, and scientists are only beginning to piece together its puzzling past. It has rock formations that have been carried there from thousands of miles away, fossils of ancient creatures that have been plowed up from ocean depths, new rocks born of the Earth’s internal fire, and some of the oldest rocks in Alaska.</p>

            </div>

          </div>
          <div data-aos='fade-up' className='first-des'>

            <div className='des-text'>
              <h2>Wildlife of Alaska</h2>
              <p >The wildlife of Alaska is both diverse and abundant. The Alaskan Peninsula provides an important habitat for fish, mammals, reptiles, and birds. At the top of the food chain are the bears. Alaska contains about 70% of the total North American brown bear population and the majority of the grizzly bears. as well as black bears and Kodiak bears. In winter, polar bears can be found in the Kuskokwim Delta, St. Matthew Island, and at the southernmost portion of St. Lawrence Island. Other major mammals include moose and caribou, bison, wolves and wolverines, foxes, otters and beavers. Fish species are extensive, including: salmon, graylings, char, rainbow and lake trout, northern pike, halibut, pollock, and burbot. </p>

            </div>
            <div className='image'>
              <img alt='' src={image11}></img>
              <img alt='' src={image12}></img>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Mountain;