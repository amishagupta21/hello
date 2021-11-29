/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

import charger from "../../public/icons/home/charger1.svg"
import solar from "../../public/icons/home/solar.svg"

import Image from 'next/image'

const features = [
  {
    name: 'Competitive rates',
    description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: charger,
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: solar,
  },
  
]

export default function Slide2() {
  return (
    <div className="bg-gray-50 overflow-hidden py-8 " style={{background  : "#F3F2F3"}}>
      <div className="relative max-w-7xl md:-mb-20  sm:-mb-32 -mb-12  mx-auto py-8 px-4 sm:px-12 md:px-16 lg:px-20">
        

        <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-normal text-gray-900 sm:text-4xl">
              OUR PARTNERS
            </h2>

            <p className="pt-4 text-gray-500"> We are leading in the future of electric Charing. Our firm is one of the top-notch electric car charging companies. 

             </p>
            <p className="-py-8 text-gray-500">We have enough knowledge and expertise in this field from past years in providing you the well-designed and maintained EV charging stations. </p>
         </div>

        <div className="relative mt-12 sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8">
         
        <div style={{background  : "#F3F2F3"}} className="col-span-1 flex justify-center py-2 px-2 bg-gray-100">
            <img
              className="h-4/5 "
              src="./icons/home/simens.svg"
              alt="StaticKit"
            />
            </div>
            <div style={{background  : "#F3F2F3"}} className="col-span-1 flex justify-center py-2  px-2 bg-gray-100">
            <img
              className="h-4/5 ml-4"
              src="./icons/home/signature.svg"
              alt="Statamic"
            />
         </div>


        </div>
      </div>
    </div>
  )
}



