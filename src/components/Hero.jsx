import heroImage from '../assets/hero-image.png'

export default function Hero() {
    return (
        <section   className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
            <div id='home' className="container mx-auto px-4 sm:px-6 lg:px-8 md:px-20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer group">
                            <span className="text-blue-300 group-hover:scale-110 transition-transform hover:text-amber-500">⭐</span>
                            <span className="text-sm font-medium">Jump start your career</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            We boost the growth{' '}
                            <span className="text-blue-500">Startup to Fortune 500</span>{' '}
                            Companies{' '}
                            <span className="text-amber-500">⏰</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg">
                            Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.
                        </p>

                        {/* Email Input */}
                        <div className="flex gap-3 max-w-xl">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
                            />
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-32">
                        <div className="relative">
                            <img 
                                src={heroImage} 
                                alt="Hero Image" 
                                className="w-full h-auto rounded-lg relative z-10 hover:scale-105 transition-transform duration-300 " 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
