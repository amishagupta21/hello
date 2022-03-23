import leafIcon from "../../public/icons/about/leaf.svg"
import earthIcon from "../../public/icons/about/leaf.svg"
import Image from 'next/image'

export default function Slide1() {
    return (
  
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between lg:flex-row">
              <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6 ml-6">
                  {/* <span className="bg-gray-100 w-10 h-10 relative top-10" >{''}</span> */}
                   {/* <span className="absolute inset-y-0 right-1/2 w-80 h-40 top-20  lg:bg-white xl:bg-gray-50 rounded-r-3xl lg:left-2"></span> */}
                  <h2 className="max-w-lg pt-20 mb-6  relative lg:right-7 md:bottom-5 uppercase font-sans text-4xl font-semibold tracking-widest text-gray-900 sm:text-4xl sm:leading-none">
                    About
                    <br className="hidden md:block" />
                    {' '}us{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                    
                    </span>
                  </h2>
                  <p className="text-base text-gray-500 leading-relaxed text-justify md:text-lg">
                  We design software for charging today's smart electric vehicles like cars or bikes. We help electric vehicle charging station owners deploy the setup effectively. We strive to make their job easy and appreciable. We work with an aim of reducing the pain points of the owner of electric vehicles. So, we provide a smart and effective cloud-based platform that gives optimized charging solutions that are affordable and greener.

                  </p>
                </div>
               
              </div>
              <div className="px-5 pt-6 pb-5 text-center  lg:grid  lg:grid-col-2  rounded lg:w-2/5">
        
                <div className="lg:flex lg:flex-col sm:mr-12 animate__animated animate__backInRight animate__delay-0.3s  md:inline-block inline-block md:mr-20  px-2.5 py-1.5 border border-transparent text-xs font-medium    focus:outline-none focus:ring-2 focus:ring-offset-2">
                     <img  className="w-36 h-36  sm:w-36 sm:h-36 block " 
                        src="./icons/about/leaf.svg" />
                     <p className="block text-left px-2.5 text-base text-gray-500 ">Clean Air Commitment  <br></br> and cheap fuel</p>
                </div>
             
                <div className="lg:flex lg:flex-col md:inline-block inline-block animate__animated animate__backInRight animate__delay-0.3s   relative lg:left-44 px-2.5 py-1.5 border border-transparent text-xs font-medium    focus:outline-none focus:ring-2 focus:ring-offset-2">
                     <img  className="w-36 h-36  sm:w-36 sm:h-36  block " 
                        src="./icons/about/earth.svg" />
                     <p className="block text-left px-2.5 text-base text-gray-500 ">Support climate <br></br> change goals</p>
                </div>


              </div>
            </div>
          </div>
       
    )
  }
  