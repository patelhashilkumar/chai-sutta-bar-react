import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHighlightSection from '../components/MenuHighlightSection';
import FranchiseConsultationSection from '../components/FranchiseConsultationSection';

const Menu = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="pt-24 min-h-screen bg-[#fdfbf6]">
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-csb-brown mb-8 font-['Montserrat']">Our Menu</h1>
                    <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto">
                        Explore our wide range of tea, coffee, and snacks. Quality and taste in every sip.
                    </p>
                </div>

                {/* Reusing the Highlight Section as the main banner for now */}
                <MenuHighlightSection />
                <FranchiseConsultationSection />

                {/* Additional menu content can be added here in the future */}
            </div>
            <Footer />
        </div>
    );
};

export default Menu;

