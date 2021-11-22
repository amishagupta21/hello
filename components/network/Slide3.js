/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import config from "../../config/config"

const features = [
  {
    name: 'Monitor network',
    description:
      'Monitor your network and track their usage and their current status for the single place.',
    icon: GlobeAltIcon,
  },
  {
    name: 'New devices',
    description:
      'Configure and onboard new network devices.',
    icon: ScaleIcon,
  },
  {
    name: 'Troubleshooting',
    description:
      'Know when the network is down and fix issues right from the panel',
    icon: LightningBoltIcon,
  },
]

export default function Example() {
  return (
    <div className="-py-4 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center  mx-auto mb-8 justify-center h-16 w-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="47.505" height="32.422" viewBox="0 0 47.505 55.422">
                  <path id="Icon_ionic-ios-git-network" data-name="Icon ionic-ios-git-network" d="M43.271,2.25A8.75,8.75,0,0,0,36.7,16.761a8.646,8.646,0,0,0,4.726,2.783v5.332L28.252,31.73,15.09,24.877V19.545a8.74,8.74,0,1,0-8.425-2.783,8.646,8.646,0,0,0,4.726,2.783v7.1a.866.866,0,0,0,.482.779l14.536,7.522v5.431a8.736,8.736,0,1,0,8.412,2.783A8.646,8.646,0,0,0,30.1,40.378V34.947l14.536-7.522a.866.866,0,0,0,.482-.779v-7.1A8.747,8.747,0,0,0,43.271,2.25ZM8.187,11a5.047,5.047,0,1,1,5.047,5.047A5.053,5.053,0,0,1,8.187,11ZM33.3,48.926a5.047,5.047,0,1,1-5.047-5.047A5.053,5.053,0,0,1,33.3,48.926Zm9.971-32.87a5.047,5.047,0,1,1,5.047-5.047A5.053,5.053,0,0,1,43.271,16.056Z" transform="translate(-4.5 -2.25)" fill={config.color.ub}/>
                  </svg>
                </div>
                <dd className="mt-2 text-base font-semibold  text-center text-gray-500">{feature.name}</dd>
              </dt>
              <dd className="mt-2  font-thin text-center text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
