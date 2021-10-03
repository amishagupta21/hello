import React, { useRef, useState } from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'EV Solutions', href: '/solutions' },
    { name: 'Network Solutions', href: '/network' },
  ]

  
const Navbar = () =>{
     return(
      <Popover style={{backgroundColor  : "#8A39F9"}} >
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6" style={{backgroundColor  : "#8A39F9"}}>
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  
                  {/* <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  /> */}
                  <img  className="h-10 w-auto sm:h-10" src="https://img.icons8.com/external-wanicon-two-tone-wanicon/100/000000/external-electricity-construction-wanicon-two-tone-wanicon.png"/>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-white rounded-md py-2 px-3  hover:text-gray-900 hover:border-gray-300 hover:border-2 hover:rounded-md hover:bg-gray-200 hover:p-2 ">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-purple-800 bg-white hover:text-purple-600"
                >
                  Contact Us
                </a>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-black bg-gray-100 hover:text-gray-300 hover:bg-gray-100   "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="/contact"
                className="block w-full px-5 py-3 text-center font-medium text-purple-700 bg-gray-50 hover:bg-gray-100 hover:text-purple-700"
              >
                Contact us
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
     )
}


export default Navbar;