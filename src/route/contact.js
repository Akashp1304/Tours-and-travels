import React from 'react';
import image9 from '../videos/12.jpg';
import './contact.css';
import Footer from '../component/footer';
function Contact() {
  return (
    <div className='hero1'>
      <img src={image9} alt='...'></img>

      <div className='hero-textt'>


        <h1  data-aos='fade-up'>Contact </h1>



      </div>
      <div className='form-container'>
        <h2 className='msg'>Send a message to us!</h2>
        <form >
          <input className='in' placeholder='name..'></input>
          <input className='in' placeholder='Email..'></input>
          <input className='in' placeholder='Subject..'></input>
          <textarea className='into' placeholder='Message..' rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
export default Contact