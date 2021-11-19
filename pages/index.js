
import {ExternalLinkIcon} from '@heroicons/react/solid'


import Footer from "../components/Footer";

import Slide1 from "../components/home/Slide1";
import Slide2 from "../components/home/Slide2";
import Slide3 from "../components/home/Slide3"
import Slide4 from "../components/home/Slide4"
import Slide5 from "../components/home/Slide5"
import Slide6 from "../components/home/Slide6"

import Navbar from "../components/Navbar"


import React, { useRef, useState } from "react";

class App extends React.Component  {
  
  
  // container = React.createRef()

  // bindScrollSnap() {
  //   const element = this.container.current
  //   const snapElement = new ScrollSnap(element, {
  //     snapDestinationY: '90%',
  //   })

  //   snapElement.bind(callback)
  // }

  // componentDidMount() {
  //   this.bindScrollSnap()
  // }
  
  render(){
  return (

    <div >
           
       

    <div >
       





    <div className="header__background" >
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute mt-6 right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={2} height={2} className="text-white" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="  absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={2} height={2} className="text-white" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="relative  pb-16 sm:pb-24">

        <Navbar />

  
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-2 lg:pt-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-2 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 text-white">
            <div>
            
            </div>
            <h2 className="max-w-lg mb-6 text-gray-100 font-sans text-5xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              INTRODUCING
              <br className="block mt-6" />
              ELECTRONATLAS{' '}
              <span className="inline-block text-deep-purple-accent-400">
                
              </span>
            </h2>
            <p className="text-base text-gray-100  md:text-lg">
              Be ready to experience next generation softwar for you electric vehicles,
              come with 24/7 customer support . We will give you it.
            </p>
          </div>
          <div className="flex  flex-col items-center md:flex-row">
            <a
              href="/"
              style={{background :"#F4785A"}}
              className="inline-flex items-center   justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 text-white   ">Speak to us!</span>
              <ExternalLinkIcon className="h-5 w-5 text-white" aria-hidden="true" />
             
            </a>
            
          </div>
        </div>
        <div className="relative lg:w-3/4 ">
          <img
            className="object-cover w-full h-5/6 rounded  sm:h-5/6" 
            // style={{height : "480px"}}
            src="./icons/home.png"
            alt=""
          />
          
        </div>
      </div>
    </div>


        
        </div>


        
      </div>

    </div>
   



       <img  style={{background  : "#F3F2F3"}} src="./icons/waves.svg" ></img>
 
    



          
          
            
            
              
  

    {/* <div id="container" ref={this.container}> */}
        <div className="page first-page">
            <Slide1 />
        </div>
        <div className="page second-page">
          <Slide2 />
        </div>
        <div className="page third-page">
          <Slide3 />
        </div>
        <div className="page fourth-page">
          <Slide4 />
        </div>
        <div className="page fourth-page">
          <Slide5 />
        </div>

        <div className="page sixth-page" style={{display : "block"}}>
          <Slide6 />
        </div>

        <div>
          <Footer></Footer>
        </div> 
   </div>


               

    </div>
   
    )
  }
}


export default App;