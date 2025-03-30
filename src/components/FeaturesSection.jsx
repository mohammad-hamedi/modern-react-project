export default function FeaturesSection() {
    const features = [
        {
            icon: "🔍", 
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
            icon: "⚙️",
            title: "Work out the details", 
            description: "Communication protocols apart from engagement models"
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing"
        }
    ];

    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How can we help your business?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        When you resell besnik, you build trust and increase
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" 
                                style={{backgroundColor: index === 0 ? "#f1eff0" : index === 1 ? "#fee7e7" : "#fff3f3"}}>
                                <div className="text-3xl">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full cursor-pointer font-medium hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
