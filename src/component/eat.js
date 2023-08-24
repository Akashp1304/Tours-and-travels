import React from 'react';
import './eat.css';
import Footer from './footer';
import image4 from '../videos/foodtable.jpg' ;
import image5 from '../videos/lobster.jpg';
import image6 from '../videos/irish.jpg';
import image7 from '../videos/koreanf.jpg';
import image8 from '../videos/desert.jpg';
import image9 from '../videos/hotdog.jpg';
import image10 from '../videos/pasta.jpg';
import image11 from '../videos/russian.jpg';
import image12 from '../videos/sushi.jpg';
import image13 from '../videos/fish.jpg';

function Food() {
    return (
        <>
        <img className='conee' src={image4} alt=''></img>
        
        <div className='cone'>
        <h1 className='eve'><strong>Events</strong></h1>
            <div data-aos='fade-up' className='container'>
                <div className='rows'>
                    <div className='wrapper'>
                        <div data-aos='fade-up' className='card'>
                            <img src={image5} alt='' />
                            <div className='info'>
                                <h3>Lobster</h3>
                                <p>Lobster Thermidor. A classic French dish where the lobster shell is stuffed with a creamy mixture of meat, egg yolks and brandy.</p>
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image6} alt='' />
                            <div className='info'>
                                <h3>Cottage pie</h3>
                                <p>Cottage pie is a beef and vegetable mixture with gravy topped with mashed potato. </p>
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image7} alt='' />
                            <div className='info'>
                                <h3>Tteokbokki</h3>
                                <p>Tteokbokki is a simple Korean street food snack made of rice cakes and fish cakes</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rows'>
                    <div className='wrapper'>
                        <div data-aos='fade-up' className='card'>
                            <img src={image8} alt='' />
                            <div className='info'>
                                <h3>Foodcan Chocolate</h3>
                                <p>These sugar candies are colorful and small in size and various shapes of heart, fruits etc;</p>
                               
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image9} alt='' />
                            <div className='info'>
                                <h3>Hot Dog</h3>
                                <p>A hot dog (commonly spelled hotdog) is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. </p>
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image10} alt='' />
                            <div className='info'>
                                <h3>Pasta</h3>
                                <p>Sheet-Pan Burrata Caprese Gnocchi. Roasting gnocchi gets it crispy on the outside</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rows'>
                    <div className='wrapper'>
                        <div data-aos='fade-up' className='card'>
                            <img src={image11} alt='' />
                            <div className='info'>
                                <h3>Beef Stroganov</h3>
                                <p>Pieces of sautéed beef in sauce, with smetana (sour cream)</p>
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image12} alt='' />
                            <div className='info'>
                                <h3>Sashi</h3>
                                <p>Similar to the above, but rice is on the outside and seaweed wraps around the filling</p>
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image13} alt='' />
                            <div className='info'>
                                <h3>Lutefisk</h3>
                                <p>Traditional Scandinavian dish made from dried fish fermented in lye</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}
export default Food;