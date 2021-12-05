
import {ExternalLinkIcon} from '@heroicons/react/solid'


import Footer from "../components/Footer";

import Slide1 from "../components/home/Slide1";
import Slide2 from "../components/home/Slide2";
import Slide3 from "../components/home/Slide3"
import Slide4 from "../components/home/Slide4"
import Slide5 from "../components/home/Slide5"
import Slide6 from "../components/home/Slide6"

import Navbar from "../components/Navbar"

import Head from "next/head"

import React, { useRef, useState  , useEffect} from "react";

const App = () => {

 

  return (

     <div >


    <Head>
       <script src="https://unpkg.com/@botpoison/browser"></script>
    </Head>
    
      <div className="relative   ">
           <Navbar />
      </div>

      <div  className="pagecontainer"   >
        <div className="">
         <div id="video"  >
           <video   width="100%" height="auto" autoPlay="autoplay"   >
            <source src="/video/home.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
           </video>  
           <p className="header__text animate__animated animate__backInLeft animate__delay-2s text-2xl md:text-3xl  lg:text-5xl xl:text-6xl ">BRARSOFT</p>
          </div>
        </div>
        <div className=" first-" style={{backgroundColor: '#F3F2F3'}}>
            <Slide1 />
        </div>
        <div className=" second-" style={{backgroundColor: '#F3F2F3'}}>
          <Slide2 />
        </div>
        <div className=" third-" style={{backgroundColor: '#F3F2F3'}}>
          <Slide3 />
        </div>
        <div className=" fourth-" style={{backgroundColor: '#F3F2F3'}}>
          <Slide4 />
        </div>
        <div className=" fourth-" style={{backgroundColor: '#F3F2F3'}}>
          <Slide5 />
        </div>

        <div className="" style={{display : "block"}}>
          <Slide6 />
        </div>

        <div className=" sixth-page">
          <Footer></Footer>
        </div> 
   </div>

               

 
    </div>
   
    )
  
}


export default App;