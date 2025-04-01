import {BsStack} from "react-icons/bs"
import {HiLightBulb} from "react-icons/hi"
import {FiSettings} from "react-icons/fi"
import {BiTime} from "react-icons/bi"
export default function ServiesSection() {
    const services = [
        {
          icon: <BsStack className="w-8 h-8 text-indigo-600" />,
          title: "Web Design",
          description: "One for all and all for one, Muskehounds are always ready.",
          link: "#learn-more"
        },
        {
          icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
          title: "Ad-Creatives", 
          description: "Alphabet Village and the subline of her own road.",
          link: "#learn-more"
        },
        {
          icon: <FiSettings className="w-8 h-8 text-red-400" />,
          title: "Automation",
          description: "Little Blind Text should turn around and return.",
          link: "#learn-more"
        },
        {
          icon: <BiTime className="w-8 h-8 text-cyan-400" />,
          title: "Infographics",
          description: "Nothing the copy said could convince her.",
          link: "#learn-more"
        }
    ]
    
    return (
        <section className="max-w-7xl mx-auto px-4 py-20 md:py-24 container lg:px-8">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Header */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Future of support with new shape
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Discuss your goals, determine success metrics, identify problems
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-600"></div>
                            </div>
                            <span className="text-gray-700 font-medium">UX design content strategy</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-indigo-600"></div>
                            </div>
                            <span className="text-gray-700 font-medium">Development</span>
                        </div>
                        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-fit">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4 ">{service.description}</p>
                            <a href={service.link} className="text-indigo-600 hover:text-indigo-700 ">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
