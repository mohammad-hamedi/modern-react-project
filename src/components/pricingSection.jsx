import { useState } from "react"

export default function PricingSection() {
    const [productCount, setProductCount] = useState(1);
    const startPrice = Math.round(400 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Pricing</h2>
                
                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Starting Plan */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Starting</h3>
                        <p className="text-3xl font-bold mb-4">${startPrice}/mo</p>
                        <p className="text-gray-600">Perfect for small teams</p>
                    </div>

                    {/* Business Plan */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Business</h3>
                        <p className="text-3xl font-bold mb-4">${businessPrice}/mo</p>
                        <p className="text-gray-600">For growing businesses</p>
                    </div>
                </div>

                

                {/* Products Slider */}
                <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-bold mb-4 text-center">Products</h3>
                    <input 
                        type="range" 
                        min="1" 
                        max="50" 
                        value={productCount}
                        onChange={(e) => setProductCount(Number(e.target.value))}
                        className="w-full mb-4"
                    />
                    <p className="text-center text-gray-600">{productCount} products</p>

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors  items-center text-center mx-auto block mt-4 ">Get Started</button>
                </div>
            </div>
        </section>
    )
}
