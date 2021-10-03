import {
    LightningBoltIcon,
    ChipIcon,
    ShieldCheckIcon
  } from '@heroicons/react/outline'


const Header = () => {
    return (
      <div className="mb-16">
        <div className="bg-white">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="46"
                      height="24"
                    />
                  </svg>
                  {/* <span className="relative">The</span> */}
                </span>{' '}
                <span className="font-semibold text-5xl">NETWORK SOLUTIONS</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                  Looking for someone who can setup your charger's LAN ?
                   {/* <br> </br> */}{' '}<br/>
                   We take care of it !
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <a
                type="submit"
                style={{background :"#F4785A"}}
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/about"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>


        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-white h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-2 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center bg-red-100 ">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-red-700"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-semibold tracking-wide text-3xl text-gray-800">
                  PORTAL INTEGRATION
              </p>
            </div>
            <div className="inline-block p-8 text-center  bg-green-100">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-green-700"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
           
              <p className="font-semibold tracking-wide text-3xl text-gray-800">
                  NETWORK INSTALLATION
              </p>
            </div>
           
          </div>
        </div>
      </div>
    );
  };



  export default  Header;
