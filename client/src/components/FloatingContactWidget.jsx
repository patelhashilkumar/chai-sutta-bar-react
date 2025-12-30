import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactWidget = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end filter drop-shadow-xl">

            {/* Widget Container - Removed translation from here */}
            <div className="flex flex-col items-end">

                {/* Toggle Button (Black) - Stays visible */}
                {/* Toggle Button (Brown) - Stays visible */}
                <button
                    onClick={toggleWidget}
                    className="w-16 h-16 bg-[#4a180d] text-white flex items-center justify-center rounded-tl-3xl rounded-bl-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-[#5d1e11] hover:shadow-[0_8px_30px_rgba(74,24,13,0.4)] border-l-2 border-t-2 border-white/20 transition-all duration-300 hover:w-[72px] relative right-0 hover:right-1 group z-50 overflow-hidden"
                >
                    {/* Shiny effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-0' : 'rotate-180'} group-hover:scale-110 drop-shadow-md`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>

                {/* Sliding Contact Buttons Container */}
                <div className={`flex flex-col transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                    {/* WhatsApp Button (Gray) */}
                    <a
                        href="https://web.whatsapp.com/send?phone=+916262300030&text=Hello%21+Team+Chai+Sutta+Bar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-[#e5e7eb] flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:w-[70px] relative right-0 hover:right-1 group"
                        title="WhatsApp Us"
                    >
                        <FaWhatsapp className="w-8 h-8 text-black transition-transform duration-300 group-hover:scale-125" />
                    </a>

                    {/* Phone Button (Yellow) */}
                    <a
                        href="tel:+916262300031"
                        className="w-16 h-16 bg-[#f2e604] flex items-center justify-center rounded-bl-3xl hover:bg-[#d9ce03] transition-all duration-300 hover:w-[70px] relative right-0 hover:right-1 group"
                        title="Call Us"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-125 type-shadow"
                            style={{ filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.1))" }}
                        >
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FloatingContactWidget;
