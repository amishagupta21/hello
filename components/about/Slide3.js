import earthIcon from "../../public/icons/about/leaf.svg"
import Image from 'next/image'

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div >
          <h2 className="max-w-md sm:text-left text-center mb-6 font-sans text-4xl font-semibold tracking-widest text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            OUR EXPERTISE
          </h2>
        </div>
        
      </div>
      <div className="grid gap-8 row-gap-10  sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-md items-center">
          <div className="flex mx-auto justify-center w-20 h-20 mb-4 ">
            <img src="./icons/about/fire.svg" />
          </div>
         
          <p className="mb-3 text-center text-base text-gray-500">
          Provide aggregative control over the energy distribution networks
          </p>
       
        </div>
        <div className="max-w-md">
          <div className="flex mx-auto justify-center w-20 h-20 mb-4 ">
            <img src="./icons/about/panel.svg" />
          </div>
     
          <p className="mb-3 text-center text-base text-gray-500">
          Offer highly customized solutions using smart and energy-efficient IoT devices and integration of the solar with our app
          </p>
       
        </div>
        <div className="max-w-md">
          <div className="flex mx-auto justify-center w-20 h-20 mb-4 ">
            <img src="./icons/about/charger.svg" />
          </div>
       
          <p className="mb-3 text-center text-base text-gray-500">
          Problem-solving approach followed by our customer representatives 24*7
          </p>
        
        </div>
       
      </div>
    </div>
  );
};


export default Feature;