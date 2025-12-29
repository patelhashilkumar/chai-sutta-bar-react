import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import LanguageSelector from "./LanguageSelector";
import heroAnimation from '../assets/hero_animation.json';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 font-['Montserrat'] bg-white">
            {/* Main Navbar */}
            <nav className="bg-white shadow-sm py-1 px-4 md:px-16 flex items-center justify-between mt-0">
                {/* Logo / Animation Area - Slightly Larger */}
                <div className="w-16 h-16 md:w-20 md:h-20 -my-2 relative z-10">
                    <Link to="/">
                        <Lottie animationData={heroAnimation} loop={true} />
                    </Link>
                </div>

                {/* Navigation Links - Larger Font and Spacing */}
                <div className="hidden md:flex space-x-8 lg:space-x-12 text-black text-xl font-medium tracking-wide items-center">
                    <Link to="/" className="hover:text-csb-brown transition-colors">Home</Link>
                    <Link to="/about-us" className="hover:text-csb-brown transition-colors">About Us</Link>
                    <Link to="/franchise" className="hover:text-csb-brown transition-colors">Franchise</Link>
                    <Link to="/menu" className="hover:text-csb-brown transition-colors">Menu</Link>
                    <Link to="/career" className="hover:text-csb-brown transition-colors">Careers</Link>
                    <Link to="/gallery" className="hover:text-csb-brown transition-colors">Gallery</Link>
                    <Link to="/blog" className="hover:text-csb-brown transition-colors">Blog</Link>

                    {/* Language Selector */}
                    <div className="ml-2">
                        <LanguageSelector />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-csb-brown focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
