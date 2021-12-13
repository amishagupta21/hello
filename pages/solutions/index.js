/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'

  
import board from "../../public/icons/board.svg"

import Navbar from "../../components/Navbar";
import Slide1 from "../../components/solutions/Slide1"
import Slide2 from "../../components/solutions/Slide2"
import Slide3 from "../../components/solutions/Slide3"
import Slide4 from "../../components/solutions/Slide4"
import Slide5 from "../../components/solutions/Slide5"

import Footer from "../../components/Footer"

export default function Example() {
  return (
      <>
    <div className="relative  overflow-hidden">
    
      <div className="relative   pb-6 sm:pb-4">
     
        <Navbar />

       
        
      
            <div className="px-4  py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 lg:pt-40">
            <div className="flex flex-col mt-12 pb-0 items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6">
                    <div>
                   
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    EV
                    <br className="hidden md:block" />
                    CHARGERS{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                      
                    </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    Manage and control your EV charging infrastructure using our white label software. Our EV charging platform is fully customized so you can decide on who will handle the specific roles! We fit your residential or commercial needs so don’t hesitate to hire our professionals for getting your cloud-based EV charging platforms and app.

                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                    <a
                    href="/contact"
                    style={{background :"#F4785A"}}
                    className="inline-flex   items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                    <span className="mr-3">Reach Us  &#8594; </span>
                   
                    </a>
                   
                </div>
                </div>
                <div className="relative lg:w-1/2">
                

                 <img
                    className="object-cover w-full h-56 rounded  sm:h-96"
                    src="./icons/home.png"
                    alt="Hassle free charging 24*7 Smart Charging Environment friendly systems Cheaper and greener fuel"
                /> 
               
                </div>
            </div>
            </div>
        


      </div>
    </div>

    

     <Slide1 />
     <Slide2 />
     <Slide3 />
     <Slide4/>
     <Slide5 />

     <div>
         <Footer />
     </div>

    </>
  )
}
