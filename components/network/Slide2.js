import earthIcon from "../../public/icons/about/leaf.svg"
import Image from 'next/image'

const Feature = () => {
  return (
    <div className="px-4 py-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div >
          <h2 className="max-w-md sm:text-left text-center mb-6 font-sans text-4xl font-semibold tracking-widest text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            OUR VISION
          </h2>
        </div>
        
      </div>
      <div className="grid gap-3 row-gap-1  sm:grid-cols-2 lg:grid-cols-2">
        <div className="max-w-md items-center">
          <div className="flex mx-auto justify-center w-72 h-72  ">
            <img src="./icons/network/portal.svg" />
          </div>
         
       
       
        </div>
        <div className="max-w-md">
          <div className="flex mx-auto justify-center w-72 h-72 mb-4 ">
            <img src="./icons/network/portal.svg" />
          </div>
     
       
        </div>
    
       
      </div>
    </div>
  );
};


export default Feature;