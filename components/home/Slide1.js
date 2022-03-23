/* This example requires Tailwind CSS v2.0+ */
import {
  LightningBoltIcon,
  ChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/outline'

const features = [
  { name: 'Dynamic Load Management', icon: LightningBoltIcon ,color : "red" },
  { name: 'OCPP Compatible', icon: ChipIcon  ,color : "purple"},
  { name: 'Remote Access', icon: ShieldCheckIcon  ,color : "green"},
]
import config from "../../config/config"

import car from "../../public/icons/home/car.svg"
import Image from 'next/image'

export default function Example() {
  return (
  
    <div style={{background  : "#F3F2F3"}} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8  ">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-40 h-20 mx-auto mb-6 rounded-full  sm:w-40 sm:h-20">
            <Image src={car} />
            </div>
            <h6 className="mb-2 font-bold text-xl leading-5  text-left" >12,544</h6>
            <p className="mb-3 text-sm text-gray-900  leading-relaxed text-justify ">
            Your electric vehicle gets charged in no time with our <strong style={{color : config.color.lb}} >car charging stations.</strong>
            </p>
          </div>
        </div>
        <div className="p-8  ">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-40 h-20 mx-auto mb-6 rounded-full  sm:w-40 sm:h-20">
               <Image src={car} />
            </div>
            <h6 className="mb-2 font-bold text-xl leading-5 text-left">124 kWh</h6>
            <p className="mb-3 text-sm text-gray-900 leading-relaxed text-justify ">
              You can save a considerable amount of money with our cost-effective <strong style={{color : config.color.lb}} >EV car charging </strong> station services.

            </p>
          </div>
        </div>
        <div className="p-8   lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-40 h-20 mx-auto mb-6 rounded-full  sm:w-40 sm:h-20">
            <Image src={car} />
            </div>
            <h6 className="mb-2 font-bold text-xl leading-5 text-left">20%</h6>
            <p className="mb-3 text-sm text-gray-900 leading-relaxed text-justify ">
            We offer you clean energy solutions and save the environment from unwanted emission of gases.

            </p>
          </div>
        </div>
       
      </div>
    </div>

  )
}
