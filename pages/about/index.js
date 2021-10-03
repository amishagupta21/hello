
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import Slide1 from "../../components/about/Slide1"
import Slide2 from "../../components/about/Slide2"
import Slide3 from "../../components/about/Slide3"

export default function About() {
  return (
    <div>
     <div className=""> <Navbar /></div>

    <div>
      <img className="bg-gray-50" src="./icons/navwaves.svg" />
    </div>

    <Slide1 />
    <Slide2 />
    <Slide3 />



    <Footer />
    </div>
  )
}
