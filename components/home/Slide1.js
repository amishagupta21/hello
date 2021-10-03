/* This example requires Tailwind CSS v2.0+ */
import {
  LightningBoltIcon,
  ChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/outline'

const features = [
  { name: 'Dynamic Load Management', icon: LightningBoltIcon ,color : "red" },
  { name: 'OCPP Compatible', icon: ChipIcon  ,color : "purple"},
  { name: 'Remote Access', icon: ShieldCheckIcon  ,color : "green"},
]

export default function Example() {
  return (
    <div style={{background  : "#F3F2F3"}}  className="relative bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Deploy faster</h2> */}
        <p className="mt-2 font-mono text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          OUR MAJOR GOALS
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Its great to know our features lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className={`pt-6  `}>
                <div className={`flow-root bg-gray-50 rounded-lg px-6 pb-8  bg-${feature.color}-100`}>
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 bg-gradient-to-b  from-${feature.color}-300 to-${feature.color}-600 rounded-md shadow-lg`}>
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
