import React, { useEffect } from 'react'
import './miami.css';
import Footer from '../component/footer';
import image5 from '../videos/hotel2.jpg';
import image6 from '../videos/vegas2.jpg';
import image7 from '../videos/vegas3.jpg';
import image8 from '../videos/vegas4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Vegas() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <div className='my1'>

        <div data-aos='fade-up' className='destination1'>
          <h1 className='page12'>LAS VEGAS </h1>
          <p className='page2'>Diversity is in our DNA. It is part of our cultural fabric. It helps define our destination’s global brand and is a key differentiator for us.  </p>
          <div data-aos='fade-up' className='first-des'>

            <div className='des-text'>
              <h2>The Las Vegas Casinos</h2>
              <p >When you first arrive at Las Vegas, you might feel like your head is on a swivel as you look around wildly trying to take in all the excitement and fun energy from other Vegas visitors . This truly is an amazing place to behold and it is certainly deserving of all the accolades and all the commotion surrounding it.

At the same time though, some people might find all this to be a little bit too much. There’s just so much going on that it can be almost impossible knowing where to start – and if you’ve never gambled in a casino before then the thought of sitting down at a craps table is going to be pretty intimidating! </p>

            </div>
            <div className='image'>
              <img alt='' src={image5}></img>
              <img alt='' src={image6}></img>
            </div>
          </div>
          <div data-aos='fade-up' className='first-des'>
            <div className='image'>
              <img alt='' src={image7}></img>
              <img alt='' src={image8}></img>
            </div>

            <div className='des-text'>
              <h2>Explore Las Vegas Nightlife </h2>
              <p >Vegas is a 24-hour city, which means that when the sun goes down, the party is just getting started. No matter what kind of experience you're looking for, from classy cocktails at high-end lounges to hardcore dance clubs perfect for busting your signature moves, you won't want to stop until the sun comes up. Even then, you'll have only enough time for a quick power nap before heading out to the nearest pool club to start the revelries all over again.</p>

            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Vegas;