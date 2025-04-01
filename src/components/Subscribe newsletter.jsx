export default function SubscribeNewsletter() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto container lg:px-8 sm:px-6">
            <div className="relative rounded-2xl overflow-hidden">
                {/* Left color background */}
                <div className="absolute inset-0 bg-blue-600"></div>
                
                {/* Right color background with diagonal line */}
                <div className="absolute inset-0 bg-blue-800 transform -skew-x-6 origin-right w-[70%]"></div>
                
                {/* Content container */}
                <div className="relative md:px-16 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left content */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
                                Subscribe to our newsletter
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base">
                                Best cooks and best delivery guys all at your service, Hot tasty food
                            </p>
                        </div>

                        {/* Right content - Newsletter form */}
                        <div className="md:w-1/2 w-full max-w-md">
                            <form className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full px-4 py-4 pr-40 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-lg"
                                />
                                <button 
                                    type="submit" 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-lg font-medium shadow-md"
                                >
                                    <span>Discover</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
