/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Slide5() {
    return (
      <div className="bg-white py-16 sm:py-24">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
         
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10  overflow-hidden  sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
               
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-2xl font-medium text-gray-600 tracking-tight sm:text-4xl">
                  If you want to grow your business with the help of our innovative solutions then don’t think twice! You will never regret collaborating with us. Reach us now!
                  </h2>
                 
                </div>
                <div  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex items-center justify-center">
                  
                  <div className="mt-0 sm:mt-0 ">
                   <a href="/contact">
                    <button
                      type="submit"
                      className="ev-button hover:shadow-xl  mt-2 w-full inline-flex items-center justify-center px-14 py-1   text-base font-medium  sm:w-auto"
                    >
                      Get in touch with us  &#8594;
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  