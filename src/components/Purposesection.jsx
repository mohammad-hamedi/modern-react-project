import { Features } from "tailwindcss";

export default function PurposeSection() {
    const features = [
        {
            icon: "🟣",
            title: "Built for impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            icon: "🔴",
            title: "In sync with you",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-36">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Left Column - Text */}
                    <div className="md:w-1/3">
                        <p className="text-sm text-purple-600 font-semibold mb-4">ACHIEVE MORE.</p>
                        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">
                            Purpose of a convoy is to keep your team
                        </h2>
                    </div>

                    {/* Middle Column - Features */}
                    <div className="md:w-2/3 flex flex-col md:flex-row gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="flex items-start space-x-6"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 text-2xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

