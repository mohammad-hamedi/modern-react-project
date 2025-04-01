import { FaArrowRightLong } from "react-icons/fa6";
import monitorImage from '../assets/monitor-card.webp';

export default function MonitorSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center md:gap-24">
                {/* Left Column - Text */}
                <div className="w-full md:w-1/2">
                    <p className="text-green-500 font-semibold">Monitor</p>
                    <h2 className="text-3xl font-bold text-neutral-900 mt-0 mb-6">Introducing best mobile carousels</h2>
                    <p className="text-gray-600 mb-8">Before the ship s really back. Round, round, ail around the world. Round, al around the world. Round, al around the world. Round, all around the world.</p>
                    <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-600 hover:gap-4 transition-all">
                        Explore monitoring features
                        <FaArrowRightLong className="w-5 h-5" />
                    </a>
                </div>
                {/* Right Column - Image */}
                <div className="w-full md:w-1/2">
                    <img src={monitorImage} alt="Monitor" className="w-full h-auto rounded-lg shadow-xl" />
                </div>
            </div>
        </section>
    )
}
