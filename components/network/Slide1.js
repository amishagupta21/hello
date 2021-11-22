import earthIcon from "../../public/icons/about/leaf.svg"
import Image from 'next/image'

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div >
        <h2 className="max-w-lg md:pt-20 mb-6 md:text-center text-center  leading-loose relative lg:right-7 md:bottom-5 uppercase font-sans text-4xl font-semibold tracking-widest  text-gray-900 sm:text-5xl sm:leading-none">
                   NETWORKING
                    <br className="hidden md:block" />
                    {' '}SOLUTIONS{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                    
                    </span>
                  </h2>
        </div>
        
      </div>
      <div className="grid gap-8 row-gap-10  sm:grid-cols-2 lg:grid-cols-2">
        <div className="max-w-md items-center">
         
         
          <p className="mb-3 text-center text-base text-gray-500">
          EV chargers management software - EV chargers setup (Networking and Chargers installations)  EV chargers management software - EV chargers setup (Networking and Chargers installations)
          </p>
       
        </div>
        <div className="max-w-md">
          <div className="flex mx-auto justify-center w-50 h-20 mb-4 ">
             <img
                
                src="./icons/home/cisco.svg"
                alt="Customer profile user interface"
              />
          </div>
     
        
       
        </div>
       
      </div>
    </div>
  );
};


export default Feature;