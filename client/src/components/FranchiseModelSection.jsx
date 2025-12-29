import React from 'react';
import mascotImage from '../assets/mascot_new.png';
import { FaStore } from 'react-icons/fa';

const FranchiseModelSection = () => {
    return (
        <section className="bg-csb-brown text-white">
            <div className="flex flex-col md:flex-row min-h-[500px]">

                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center items-center text-center">
                    <h2 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">Franchise Model</h2>

                    <div className="bg-[#fbbf24] w-28 h-28 rounded-full flex items-center justify-center mb-6 text-csb-brown shadow-lg">
                        <FaStore size={56} />
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-[#fbbf24] mb-2 uppercase tracking-wide">FOFO</h3>
                    <p className="text-[#fbbf24] text-xl font-bold mb-8 uppercase tracking-wide max-w-2xl mx-auto">
                        (Franchise Owned Franchise Operated)
                    </p>

                    <p className="text-white text-xl md:text-2xl max-w-3xl leading-relaxed font-medium mx-auto">
                        In this model, the Company just rents out the Brand Name to the Franchise
                        operator for a particular non-refundable sum also said to be - Franchise
                        Fee for an agreed interval of time.
                    </p>
                </div>

                {/* Right Side: Mascot Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
                    {/* Background glow/effect can be added here if needed */}
                    <img
                        src={mascotImage}
                        alt="Chai Sutta Bar Mascot"
                        className="w-auto h-3/4 object-contain relative z-10 hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default FranchiseModelSection;
