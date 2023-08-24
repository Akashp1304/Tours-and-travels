import './footer.css';
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom' 
import Aos from 'aos';
import 'aos/dist/aos.css'
import video3 from '../videos/video3.mp4'

function Footer() {
    useEffect(()=>{
        Aos.init({duration:2000}) 
     },[])
    return (
        
        <div className='footer'>
            <div className='videoDiv'>
                <video src={video3} muted autoPlay loop type='video/mp4' />
            </div>
            <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div data-aos='fade-up' className='text6'>
                        <p className='name'>KEEP IN TOUCH</p>
                        <h2><strong>Travel with us</strong></h2>
                    </div>
                    <div className='inputDiv flex'>
                        <input data-aos='fade-up' type='text' placeholder='Enter Email Address'></input>
                        <button data-aos='fade-up' className='btn4 flex' type='submit'>
                            SEND<i class="fa-regular fa-paper-plane icon"></i>
                        </button>
                    </div>

                </div>
                <div className='footerCard flex'>
                    <div className='footerIntro flex'>
                        <div data-aos='fade-up' className='logoDiv'>
                            <a href='#' className='logo4 Flex'>
                                <i class="fa-solid fa-earth-asia tech icon6" /><strong>Travel</strong>

                            </a>

                        </div>
                        <div data-aos='fade-up' className='footerParagraph'>
                            Discover the world's diverse landscapes, rich history, and vibrant cultures with our meticulously crafted tours and travel experience

                        </div>
                        <div data-aos='fade-up' className='footerSocial flex'>
                            <i class="fa-brands fa-twitter icon6"></i>
                            <i class="fa-brands fa-youtube icon6"></i>
                            <i class="fa-brands fa-instagram icon6"></i>
                            <i class="fa-brands fa-facebook icon6"></i>

                        </div>

                    </div>
                    <div className='footerLinks grid d-flex'>
                        <div data-aos='fade-up'  className='linkGroup'>
                            <span className='groupTitle'>
                                OUR AGENCY

                            </span>
                            <li className='d-flex'><Link to='/Service' className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Service
                            </Link></li>
                            <li className='d-flex'><Link to='/Contact' className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Contact
                            </Link></li>
                            <li className='d-flex'><Link to='/About' className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            About
                            </Link></li>
                            <li className='d-flex'><div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Tourism
                            </div></li>
                            <li className='d-flex'><div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Payment
                            </div></li>

                        </div>
                        <div data-aos='fade-up'  className='linkGroup'>
                            <span className='groupTitle'>
                               PARTNERS

                            </span>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                           Bookings
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Rentcar
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            HostelWorld
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Trivago
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            TripAdvisor
                            </div>

                        </div>
                        <div data-aos='fade-up' className='linkGroup'>
                            <span className='groupTitle'>
                                LAST MINUTE

                            </span>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            London
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            California
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Indonesia
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Korea
                            </div>
                            <div className='footerList flex'>
                            <i class="fa-solid fa-chevron-right icon6"/>
                            Europe
                            </div>

                        </div>


                    </div>
                    <div className='footerDiv flex'>
                        <small>BEST TRAVEL WEBSITE </small>
                        <small>COPYRIGHTS RESERVED - AKASH 2023</small>

                    </div>
                </div>
            </div>

        </div>



    )
}
export default Footer