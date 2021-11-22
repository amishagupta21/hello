import { Fragment } from 'react'

import Navbar from "../../components/Navbar";
import Slide1 from "../../components/network/Slide1"
import Slide2 from "../../components/network/Slide2"
import Slide3 from "../../components/network/Slide3"
import Slide4 from "../../components/network/Slide4"
import Slide5 from "../../components/network/Slide5"

import Footer from "../../components/Footer"

export default function Network() {
  return (
       <>
       <div className="relative bg-white overflow-hidden">
     

         <div className="relative  pb-16 sm:pb-24">
     
        <Navbar />

      

       

      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
        


      </div>
    </div>

          <Footer />
       </>
  )
}