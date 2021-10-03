/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

import fleet from "../../public/icons/solutions/fleet.svg"
import publ from "../../public/icons/solutions/public.svg"
import resident from "../../public/icons/solutions/residen.svg"

import Image from 'next/image'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]


export default function Slide1() {
  return (
    <div className="py-12 sm:my-32  my-8 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
       
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          
            <div >
              <dt>
                <div className="flex items-center justify-center ">
                   <Image src={fleet} />
                </div>
              </dt>
            </div>


            <div >
              <dt>
                <div className="flex items-center justify-center ">
                   <Image src={publ} />
                </div>
             
              </dt>
             
            </div>


            <div >
              <dt>
                <div className="flex items-center justify-center ">
                <Image src={resident} />
                </div>
  
              </dt>
        
            </div>
    
        </dl>
      </div>
    </div>
  )
}
