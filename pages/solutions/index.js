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
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute  left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative  pb-16 sm:pb-24">
     
        <Navbar />

       
       

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
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
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae. explicabo.
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                    <a
                    href="/contact"
                    style={{background :"#F4785A"}}
                    className="inline-flex   items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                    <span className="mr-3">Contact Us</span>
                   
                    </a>
                   
                </div>
                </div>
                <div className="relative lg:w-1/2">
                

                 <img
                    className="object-cover w-full h-56 rounded  sm:h-96"
                    src="./icons/board.svg"
                    alt=""
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
