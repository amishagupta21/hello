/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

import Image from 'next/image'

import chargerIcon from "../../public/icons/home/chargerIcon.svg"
import base from "../../public/icons/home/base.svg"
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

     {/* <img src="./icons/pagewaves.svg" /> */}

      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
        
          <div className="max-w-xl mb-6">
              <span  style={{background :"#F4785A"}} className="h-12 w-12 mb-4 m rounded-md flex items-center justify-center ">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              EV
              <br className="block" />
              CHARGERS{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
               
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            One liner about the project that will have a brief description about the same, so as to get idea what is this about.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm  border-purple-600">
              <div className="h-full p-5 border border-l-0 rounded-r bg-purple-100">
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-purple-600">
              <div className="h-full p-5 border border-l-0 rounded-r bg-purple-100 ">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  Those options are already baked in with this model shoot me an
                  email clear.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div  >
           <Image className="h-1/2" src={chargerIcon} />
        </div>
      </div>
    </div>
  );
};


export default Content