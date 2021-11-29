
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import Slide1 from "../../components/about/Slide1"
import Slide2 from "../../components/about/Slide2"
import Slide3 from "../../components/about/Slide3"
import Slide4 from "../../components/about/Slide4"

export default function About() {
  return (
    <div className="overflow-hidden">
     <div className=""> <Navbar /></div>


    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />


    <Footer />
    </div>
  )
}
