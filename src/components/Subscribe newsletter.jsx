export default function SubscribeNewsletter() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto container lg:px-8 sm:px-6">
            <div className="bg-blue-600 rounded-2xl overflow-hidden">
                <div className="relative md:px-16 py-16 md:py-24">
                    {/* Gradient background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-blue-800 to-blue-600 clip-path-slant hidden md:block"></div>
                    
                    {/* Content container */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
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
                            <form className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-white text-blue-600 px-6 py-3 rounded-r-xl hover:bg-blue-50 transition-colors font-medium"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
