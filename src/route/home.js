import React,{useEffect} from 'react';
import image1 from '../videos/nature2.mp4'
import './home.css'
import Destination from '../component/destination';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../component/footer';

function Home() {
     useEffect(()=>{
       Aos.init({duration:2000}) 
    },[])
    return (
        <>
           
            <div>
                <video className='img' src={image1} muted autoPlay loop type='video/mp4' />

                <div className='hero-text'>

                    <div className='row'>
                        <h1 data-aos='fade-up'>Your Journey Makes Beautiful</h1>
                        <p  data-aos='fade-up'>choose your destination</p>
                    </div>
                   
                    <div className='row'>
                        <div  data-aos='fade-up' class="card2  tech2">
                            <div class="card-body1 ms-5 bg-white text-dark tech3 d-flex" >
                                <div className='destinationinput'>
                                    <label htmlFor='city'>search your destination</label>
                                    <div className='input d-flex'>
                                        <input type='text' placeholder='text...'></input>


                                    </div>
                                </div>
                                <div className='dataInput'>
                                    <label htmlFor='date'>select your date</label>
                                    <div className='input d-flex'>
                                        <input type='date' />

                                    </div>

                                </div>
                                <div className='priceInput'>
                                    <div className='label-total d-flex'>
                                        <label htmlFor='price'> max price</label>
                                        <h3 className='total'>$5000</h3>
                                    </div>
                                    <div className='input flex'>
                                        <input type='range' max='5000' min='500'></input>

                                    </div>

                                </div>

                            </div>
                            <div className='searchOption '>

                                <button className='btn point'><strong>Submit</strong></button>
                            </div>

                        </div>
                    </div>
                </div>
                <Destination/>
                
            </div>

            <Footer/>


        </>
    )
}
export default Home