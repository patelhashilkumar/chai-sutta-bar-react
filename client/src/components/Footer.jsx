import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../assets/white-logo.png';

const Footer = () => {
    return (
        <footer className="bg-csb-brown text-white pt-16 pb-8 border-t-4 border-[#fdd835]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        {/* Logo Section */}
                        <div className="mb-2">
                            <img src={whiteLogo} alt="Chai Sutta Bar Logo" className="h-24 md:h-28 w-auto object-contain" />
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-xs mx-auto md:mx-0">
                            Chai Sutta Bar Is A Rapidly Growing Tea-Chain, Founded In 2016 By Two Young & Passionate Entrepreneurs – Anubhav Dubey And Anand Nayak.
                        </p>
                    </div>

                    {/* Column 2: Head Office */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-3xl font-bold border-b-2 border-[#fdd835] pb-2 inline-block mx-auto md:mx-0 w-max">Head Office</h3>
                        <div className="space-y-4 text-lg font-light">
                            <div className="flex items-start justify-center md:justify-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-1 shrink-0 text-[#fdd835]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>
                                    1st Floor, Redsquare, PU3<br />
                                    Commercial Scheme no 54,<br />
                                    Opposite C21 Mall, Indore, MP-<br />
                                    452001
                                </span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#fdd835]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>6262 3000 31</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#fdd835]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@chaisuttabarindia.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#fdd835]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>business@chaisuttabarindia.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-3xl font-bold border-b-2 border-[#fdd835] pb-2 inline-block mx-auto md:mx-0 w-max">Quick Links</h3>
                        <ul className="space-y-4 text-lg font-light">
                            <li><Link to="/contact" className="hover:text-[#fdd835] transition-colors duration-300 block">Contact</Link></li>
                            <li><Link to="/feedback" className="hover:text-[#fdd835] transition-colors duration-300 block">Feedback</Link></li>
                            <li><Link to="/faqs" className="hover:text-[#fdd835] transition-colors duration-300 block">FAQs</Link></li>
                            <li><Link to="/locations" className="hover:text-[#fdd835] transition-colors duration-300 block">Locations</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-[#fdd835] transition-colors duration-300 block">Privacy Policy</Link></li>
                            <li><Link to="/career" className="hover:text-[#fdd835] transition-colors duration-300 block">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-[#fdd835] transition-colors duration-300 block">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-3xl font-bold border-b-2 border-[#fdd835] pb-2 inline-block mx-auto md:mx-0 w-max">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {/* Icons (Inline SVG for reliability) */}
                            {/* Facebook */}
                            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-[#fdd835] hover:border-[#fdd835] hover:text-black transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-[#fdd835] hover:border-[#fdd835] hover:text-black transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-[#fdd835] hover:border-[#fdd835] hover:text-black transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-[#fdd835] hover:border-[#fdd835] hover:text-black transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21.58 5.4a2.82 2.82 0 00-1.99-2C17.84 3 12 3 12 3s-5.84 0-7.59.4a2.82 2.82 0 00-1.99 2 29.5 29.5 0 000 10.2a2.82 2.82 0 001.99 2C6.16 18 12 18 12 18s5.84 0 7.59-.4a2.82 2.82 0 001.99-2 29.5 29.5 0 000-10.2zM10 13V7l5.33 3z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-[#fdd835] hover:border-[#fdd835] hover:text-black transition-all duration-300">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.21 2.43.46a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.25.64.41 1.37.46 2.43.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.21 1.79-.46 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.41-2.43.46-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.21-2.43-.46a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.41-1.37-.46-2.43-.05-1.07-.06-1.4-.06-4.12s.01-3.05.06-4.12c.05-1.06.21-1.79.46-2.43a4.9 4.9 0 011.15-1.77 4.9 4.9 0 011.77-1.15c.64-.25 1.37-.41 2.43-.46C8.95 2.01 9.28 2 12 2zm0 2.16c-2.67 0-2.98.01-4.04.05-.76.04-1.16.17-1.42.27a2.76 2.76 0 00-1.03.67c-.28.28-.5.6-1.03 1.03-.1.26-.24.66-.27 1.42-.05 1.06-.06 1.37-.06 4.04s.01 2.98.05 4.04c.04.76.17 1.16.27 1.42.12.37.35.67.67 1.03.28.28.6.5 1.03.67.26.1.66.24 1.42.27 1.06.05 1.37.06 4.04.06s2.98-.01 4.04-.05c.76-.04 1.16-.17 1.42-.27a2.76 2.76 0 001.03-.67c.28-.28.5-.6 1.03-.67.26-.1.66-.24 1.42-.27 1.06-.05 1.37-.06 4.04-.06s2.98.01 4.04.05c.76.04 1.16.17 1.42.27.37.12.67.35 1.03.67.28.28.5.6.67 1.03.1.26.24.66.27 1.42.05 1.06.06 1.37.06 4.04s-.01 2.98-.05 4.04c-.04.76-.17 1.16-.27 1.42a2.76 2.76 0 00-.67 1.03c-.28.28-.6.5-1.03.67-.26.1-.66.24-1.42.27-1.06.05-1.37.06-4.04.06zM12 7.35a4.65 4.65 0 100 9.3 4.65 4.65 0 000-9.3zm0 2.16a2.49 2.49 0 110 4.98 2.49 2.49 0 010-4.98zm5.35-3.04a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm md:text-base font-light text-gray-300">
                    <p>
                        Copyright &copy;2025 Chai Sutta Bar, All rights reserved | Designed, Developed & Maintained by <span className="text-[#fdd835] font-bold">TMG</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
