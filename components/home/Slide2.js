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
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        

        <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              WHAT WE DO
            </h2>

            <p className="pt-4 text-gray-500"> When you search for electric vehicle charging stations near me? 
</p>
            <p className="-py-8 text-gray-500">Our team members strive to offer you clean energy solutions at affordable prices. The world needs more and more environment-friendly energy sources and we work with full dedication to provide you with the best possible solutions. And we work with aim of supporting this goal. </p>
         </div>

        <div className="relative mt-12 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-x-8">
         
          <dl className="mt-10 sm:ml-24 -ml-12 sm:w-3/4 mx-auto space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
        
            <div >
                <dt  className="-ml-9 sm:-ml-2"   >
                     <Image   src={charger} />
                </dt>
              </div>

            <div >
                <dt style={{marginLeft : "-10px"}}>
                        <Image   src={solar} />
                </dt>
            </div>
          </dl>

        </div>
      </div>
    </div>
  )
}
