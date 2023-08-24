import React, { useEffect } from 'react';
import image1 from '../videos/image1.jpg';
import image2 from '../videos/image2.jpg';
import image3 from '../videos/image3.jpg';
import image4 from '../videos/image6.jpg';
import image5 from '../videos/8.jpg';
import image6 from '../videos/vegas1.jpg';
import image7 from '../videos/12.jpg';
import image8 from '../videos/alaska4.jpg';
import image9 from '../videos/miami5.jpg';
import image10 from '../videos/vegas4.jpg';
import image11 from '../videos/korea.jpg';
import image12 from '../videos/italy.jpg';
import image13 from '../videos/brazil.jpg'
import './destination.css'

import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'



function Destination() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className='moba'>

                <div className='container'>
                <h1 className='page1'><i class="fa-solid fa-plane-departure logo"/><strong>Destinations</strong></h1>
                    <div  className='row'>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image9} alt="..." className='card-images' />
                                <h4 className='card-titles'>Florida</h4>
                                <p className='card-para'>Miami Beach is a south Florida island city, connected by bridges to mainland Miami.Wide beaches stretch from North Shore Open Space Park, past palm-lined Lummus Park to South Pointe Park. </p>
                                <h5 className='card-paraa'>Price Ranges:-<strong>$1500-$2000</strong></h5>
                                <Link to='/Miami' className='card-btns'>read more</Link>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image10} alt="..." className='card-images' />
                                <h4 className='card-titles'>Las Vegas</h4>
                                <p className='card-para'>Las Vegas, often known simply as Vegas, is the 25th-most populous city in the United States,the most populous city in the state of Nevada, and the county seat of Clark County. </p>
                                <h5 className='card-paraa'>Price Ranges:-<strong>$3000-$3500</strong></h5>
                                <Link to='/Vegas' className='card-btns'>read more</Link>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image8} alt="..." className='card-images' />
                                <h4 className='card-titles'>Alaska</h4>
                                <p className='card-para'>The Mountain Range (sometimes referred to as the Mountain Ranges) is a mountain range in the North Island of Alaska. The Kaimai Ranges feature in local Māori folklore.   </p>
                                 <h5 className='card-paraa'>Price Ranges:-<strong>$1200-$1500</strong></h5>
                                <Link to='/Mountain' className='card-btns'>read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image11} alt="..." className='card-images' />
                                <h4 className='card-titles'>South Korea</h4>
                                <p className='card-para'>South Korea, an East Asian nation on the southern half of the Korean Peninsula, shares one of the world’s most heavily militarized borders with North Korea. It’s equally known for its green </p>
                                <h5 className='card-paraa'>Price Ranges:-<strong>$500-$600</strong></h5>
                                <Link to='/Korea' className='card-btns'>read more</Link>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image12} alt="..." className='card-images' />
                                <h4 className='card-titles'>Italy</h4>
                                <p className='card-para'>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark  </p>
                                <h5 className='card-paraa'>Price Ranges:-<strong>$800-$1000</strong></h5>
                                <Link to='/Italy' className='card-btns'>read more</Link>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div  data-aos='fade-up' className='card-contain'>
                                <img src={image13} alt="..." className='card-images' />
                                <h4 className='card-titles'>Brazil</h4>
                                <p className='card-para'>Brazil, officially the Federative Republic of Brazil, is the largest country in South America and in Latin America. Brazil is the world's fifth-largest country by area and the seventh most populous </p>
                                <h5 className='card-paraa'>Price Ranges:-<strong>$600-$800</strong></h5>
                                <Link to='/Brazil' className='card-btns'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my'>
                <div data-aos='fade-up' className='destination'>
                    <h1 className='page1'><i class="fa-solid fa-plane-departure logo"></i><strong>Popular Destination</strong></h1>
                    <p className='page2'>Discover the world's diverse landscapes, rich history, and vibrant cultures with our meticulously crafted tours and travel experience</p>
                    <div data-aos='fade-up' className='first-des'>

                        <div className='des-text'>
                            <h2>Taal Volcano, Batangas</h2>
                            <p >Winter has come. Every year, when the weather starts to turn chilly in our corner of the world, we find the content we produce for clients begins to take on a distinctly seasonal slant. All of a sudden, the travel content agenda is dominated by all things wintery, from celebrations like Christmas and New Year to activities such as winter sports.

                                Our winter travel content is for everyone to enjoy. Disappointed you’re not cosied up in a chalet by a roaring log fire? Read about our Alpine adventures in St. Moritz and pretend you are. Rather have some winter sun? Read our guide on the Greek Islands and all the advent adventures they have to offer. Or maybe you’d rather forego winter altogether and enjoy another (even hotter) summer. </p>

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
                            <h2>Mt.Daguldul Batangas </h2>
                            <p >As regular readers of our blog will know, we were asked late last year by loveholidays – the UK’s fastest-growing online travel agency – to write a selection of in-depth travel destination guides for their website. Each 1,750-word guide would need to follow a strict format and include sections such as ‘things to do’, ‘food and drink’ and ‘FAQs’.

                                We’ve previously profiled five of the guides we wrote for loveholidays in early 2021, from Thailand to Tunisia. Now, we’d like to share five more recent ones. Scroll down to read short extracts from our guides on Sri Lanka, Tokyo, Morocco, Goa and the South of France </p>

                        </div>

                    </div>

                </div>

            </div>
            <div className='mech'>
                <h1 data-aos='fade-up' className='page3'><i class="fa-solid fa-plane-departure logo"/><strong>Recent Trips</strong></h1>
                <p data-aos='fade-up' className='page4'>Whether it’s your first international trip or you have travelled abroad multiple times, planning a holiday to a distant land is always a special feeling. Our international holiday packages are well-made and hold a high reputation among customers who have been travelling with us.</p>

                <div data-aos='fade-up' className='container'>
                    <div className='wrapper'>
                        <div data-aos='fade-up' className='card'>
                            <img src={image5} alt='' />
                            <div className='info'>
                                <h3>Florida</h3>
                                <p>Miami Beach is a south Florida island city, connected by bridges to mainland Miami.Wide beaches stretch from North Shore Open Space Park, past palm-lined Lummus Park to South Pointe Park.</p>
                                <Link to='/Miami' className='bttn'>read more</Link>
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image6} alt='' />
                            <div className='info'>
                                <h3>Las Vegas</h3>
                                <p>Las Vegas, often known simply as Vegas, is the 25th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. </p>
                                <Link to='/Vegas' className='bttn'>read more</Link>
                            </div>
                        </div>
                        <div data-aos='fade-up' className='card'>
                            <img src={image7} alt='' />
                            <div className='info'>
                                <h3>Alaska</h3>
                                <p>The Kaimai Range (sometimes referred to as the Kaimai Ranges) is a mountain range in the North Island of New Zealand.The Kaimai Ranges feature in local Māori folklore.</p>
                                <Link to='/Mountain' className='bttn'>read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Destination;