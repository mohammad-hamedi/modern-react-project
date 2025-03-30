import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const navLinks = [
        {href: "home", label: "Home"},
        {href: "about", label: "About Us"},
        {href: "services", label: " our Services"},
        {href: "contact", label: "Contact"},
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full container max-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:px-20 h-16">
                {/* Logo - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100"></div>
                        <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 -ml-2"></div>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Logo</span>
                </div>

                {/* Mobile Logo */}
                <div className="md:hidden">
                    <FaHome className="h-8 w-8 text-blue-600" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={`#${link.href}`}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 ${
                                activeLink === link.href ? 'text-blue-600 after:opacity-100' : 'text-gray-500'
                            }`}
                            onClick={() => setActiveLink(link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button and CTA */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-500 hover:text-gray-700"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors md:block hidden">
                        Get in touch
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-4 py-3 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={`#${link.href}`}
                                className={`block text-sm font-medium ${
                                    activeLink === link.href ? 'text-blue-600' : 'text-gray-500'
                                }`}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsOpen(false);
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors mt-4">
                            Get in touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
