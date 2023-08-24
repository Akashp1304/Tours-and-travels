import React from 'react';
import './about.css';

import iron from '../videos/iron.jpg';
import jack from '../videos/jack3.jpg';
import joker from '../videos/joker2.jpg';
// import Footer from '../component/footer';
function About() {
    return (
        <>

            <div className='myclass'>
                <div className='cl'>
                <h1>History</h1>
                </div>
                <div class="card-container">
                
                    <div class="card1">
                        <div class="front">
                            <img className='front1' src={jack} alt="" />
                        </div>
                        <div class="back">
                            <div class="details">
                                <div class="caption">
                                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                                    quisquam iure in! Corporis expedita consequatur tenetur rem
                                    ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                                    unde itaque ratione "
                                </div>
                                <h3>Akash Patil</h3>
                                <span> Web Developer</span>

                                <div class="social-icon">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="card1">
                        <div class="front">
                            <img className='front1' src={jack} alt="" />
                        </div>
                        <div class="back">
                            <div class="details">
                                <div class="caption">
                                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                                    quisquam iure in! Corporis expedita consequatur tenetur rem
                                    ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                                    unde itaque ratione "
                                </div>
                                <h3>CAPTION JACK</h3>
                                <span> Actor</span>

                                <div class="social-icon">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card1">
                        <div class="front">
                            <img className='front1' src={joker} alt="" />
                        </div>
                        <div class="back">
                            <div class="details">
                                <div class="caption">
                                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                                    quisquam iure in! Corporis expedita consequatur tenetur rem
                                    ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
                                    unde itaque ratione "
                                </div>
                                <h3>JOKER</h3>
                                <span>Actor</span>

                                <div class="social-icon">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            
        </>
    )
}
export default About