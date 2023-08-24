import './app.css';
import React from 'react';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from 'react-router-dom';
import Home from './route/home';
import About from './route/about';
import Contact from './route/contact';
import Service from './route/service';
import Miami from './route/miami';
import Hotels from './component/hotels';
import Food from './component/eat';
import Events from './component/events';
import Vegas from './route/vegas';
import Mountain from './route/mountain';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import Korea from './route/korea';
import Italy from './route/italy';
import Brazil from './route/brazil';



function App() {
  useEffect(()=>{
alanBtn({
  key:'0d52331c4e6a0e923d97af7918e3c99d2e956eca572e1d8b807a3e2338fdd0dc/stage'
})
  },[])
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Service' element={<Service />}>
          
        </Route>
        <Route path="/Miami" element={<Miami />}></Route>
        <Route path="/Korea" element={<Korea />}></Route>
        <Route path='/Italy' element={<Italy />}></Route>
        <Route path='/Brazil' element={<Brazil />}></Route>
        <Route path='/Vegas' element={<Vegas />} />
        <Route path='/Mountain' element={<Mountain />} />
        <Route path='/Hotels' element={<Hotels />}></Route>
        <Route path='/Food' element={<Food />}></Route>
        <Route path='/Events' element={<Events />}></Route>

      </Routes>

    </>

  );
};
export default App;