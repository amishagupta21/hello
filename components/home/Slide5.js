/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

import simens from "../../public/icons/home/simens.svg"
import signature from "../../public/icons/home/signature.svg"

import Image from 'next/image'



/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div style={{background  : "#F3F2F3"}} >
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-28 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by the world's most average companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="/contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Contact Us
                </a>
              </div>
             
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">


         
            <div style={{background  : "#F3F2F3"}} className="col-span-1 flex justify-center py-2 px-2 bg-gray-100">
              <img
                className="max-h-full"
                src="./icons/home/simens.svg"
                alt="StaticKit"
              />
            </div>
            <div style={{background  : "#F3F2F3"}} className="col-span-1 flex justify-center py-2  px-2 bg-gray-100">
              <img
                className="max-h-full"
                src="./icons/home/signature.svg"
                alt="Statamic"
              />
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}
