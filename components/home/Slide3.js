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
            
              
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl sm:leading-none">
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
            <button
                  type="submit"
                  className="ev-button  hover:shadow-md  mt-2 w-full inline-flex items-center justify-center px-14 py-1   text-base font-medium  sm:w-auto"
                >
                    Know more
            </button>
           
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