import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="container max-auto px-4 sm:px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Brand Column */}
                    <div className="flex flex-col md:col-span-4">
                        <div className="flex items-center gap-1 mb-4">
                            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100"></div>
                            <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75"></div>
                            <span className="text-xl font-medium ml-1 text-gray-900">The Next Design</span>
                        </div>
                        <p className="text-gray-600 max-w-md">The copy warned the Lite Blind Tet, that 'Where It came from it would have been rewritten a thousand times.</p>
                        <div className="mt-4 flex gap-4">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-700 transition-all duration-300 hover:scale-110">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-1.5">
                            <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Web Design</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Development</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Marketing</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                        <ul className="space-y-1.5">
                            <li className="text-gray-600">123 Design Street</li>
                            <li className="text-gray-600">New York, NY 10001</li>
                            <li className="text-gray-600">contact@example.com</li>
                            <li className="text-gray-600">+1 (555) 123-4567</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-600 text-sm">© 2024 The Next Design. All rights reserved.</p>
                        <p className="text-gray-600 text-sm">Created by <span className="text-blue-600">Mohammad Hamedi</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
