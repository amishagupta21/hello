
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function  Slide6() {
  return (
    <div className="bg-gray-50 pt-10 overflow-hidden py-12 " style={{background  : "#F3F2F3"}}>
    <div className="relative max-w-7xl mx-auto justify-center px-0 sm:px-6 lg:px-8">
       
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact information */}
          <div className="relative  py-10 px-6  sm:px-10 xl:p-12 ">
            <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg
                className="absolute inset-0 w-full h-full"
                width={343}
                height={388}
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                width={359}
                height={339}
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                width={160}
                height={678}
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fillOpacity=".1"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 z-50 lg:relative lg:bottom-20 "   >
              GET IN <br></br>
               TOUCH
            </h3>
            <p className="mt-6 text-base text-gray-500 max-w-3xl">
               Liked our approach ?
               Want to discuss your project ?
               <br></br>
               Get in touch with our team
            </p>
            <dl className="mt-8 space-y-6">
              <dt>
                <span className="sr-only">Phone number</span>
              </dt>
              <dd className="flex text-base text-blue-50">
                <PhoneIcon className="flex-shrink-0 w-6 h-6 text-gray-500" aria-hidden="true" />
                <span className="ml-3 text-gray-500">+1 (555) 123-4567</span>
              </dd>
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="flex text-base text-blue-50">
                <MailIcon className="flex-shrink-0 w-6 h-6 text-gray-500" aria-hidden="true" />
                <span className="ml-3 text-gray-500">support@brarsoft.com</span>
              </dd>
            </dl>
           
          </div>

          {/* Contact form */}
          <div className="py-10 px-6 sm:px-12 lg:col-span-2 xl:p-12 ">
            <h3 className="text-lg font-medium text-gray-500">Let us work towards <strong>sustainabe</strong> and <strong>greener</strong> enviromnet</h3>
            <form data-botpoison-public-key="pk_000d7451-ff5a-4808-b059-63bc4c70b135" action="https://submit-form.com/fh06ruIl"  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                  First name
                </label> */}
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Name"
                    style={{backgroundColor :"#DFDFDF"}}
                    className="py-3 px-4 block w-full bg-gray-200 shadow-sm text-gray-900 focus:ring-blue-800 outline-none active:border-2 border-2 focus:border-gray-500 border-gray-200 rounded-md"
                  />
                </div>
              </div>
              <div>
                {/* <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                  Email
                </label> */}
                <div className="mt-1">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    style={{backgroundColor :"#DFDFDF"}}
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm  text-gray-900 focus:ring-gray-800 outline-none border-2 bg-gray-200 focus:border-gray-500 border-gray-200 rounded-md"
                  />
                </div>
              </div>
           
           
              
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  {/* <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <span id="message-max" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span> */}
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    style={{backgroundColor :"#DFDFDF"}}
                    rows={4}
                    placeholder="Tell us your requirement. We will be happy to work with you!"
                    className="py-3 px-4 block w-full bg-gray-200 shadow-sm text-gray-900 focus:ring-blue-800 border-2 focus:border-gray-500  outline-none rounded-md"
                    aria-describedby="message-max"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2  text-center sm:flex sm:justify-center">
                <button
                    type="submit"
                    className="md:w-1/3 w-4/5  sm:w-12  ev-button hover:shadow-xl  mt-2  inline-flex items-center justify-center px-14 py-1   text-base font-medium "
                  >
                    Reach us &#8594;
                  </button>
              </div>
            </form>
          </div>
        </div>
     
      </div>
    </div>
  
  )
}
