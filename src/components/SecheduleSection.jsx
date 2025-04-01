import scheduleImage from '../assets/scheduleImage.webp';
import { FaArrowRightLong } from "react-icons/fa6";

export default function SecheduleSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center md:gap-24">
                {/* Left Column - Text */}
                <div className="w-full md:w-1/2">
                    <p className="text-orange-500 font-semibold">Schedule</p>
                    <h2 className="text-3xl font-bold text-neutral-900 mt-0 mb-6">Streamline Your Business <br /> With Smart Scheduling Solutions</h2>
                    <p className="text-gray-600 mb-8">Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-600 hover:gap-4 transition-all">
                        Explore scheduling features
                        <FaArrowRightLong className="w-5 h-5" />
                    </a>
                </div>
                {/* Right Column - Image */}
                <div className="w-full md:w-1/2">
                    <img src={scheduleImage} alt="Schedule" className="w-full h-auto rounded-lg shadow-xl" />
                </div>
            </div>
        </section>
    )
}
