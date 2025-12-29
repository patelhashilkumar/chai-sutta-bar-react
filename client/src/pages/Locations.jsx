import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Locations = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow pt-28 md:pt-36">
                <div className="container mx-auto px-4 md:px-12 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4a2c2a] font-['Montserrat'] mb-2">Our Locations</h1>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Find your nearest Chai Sutta Bar and enjoy the taste of tradition.</p>

                    {/* Map Container */}
                    <div className="w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#4a2c2a]/10">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1600ugfVPKB7nsrBHHzTWY89v96_x2-w&ehbc=2E312F&ll=14.219613443680968%2C65.88103682921941&z=4"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Chai Sutta Bar Locations"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Locations;
