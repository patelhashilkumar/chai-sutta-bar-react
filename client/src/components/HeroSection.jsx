import React from 'react';
const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-csb-bg flex items-center justify-center overflow-hidden">
            {/* Animation moved to Navbar */}
            <div className="w-full max-w-4xl p-4">
                {/* Content intentionally left empty for now as animation is moved */}
            </div>
            <div className="absolute bottom-10 animate-bounce">
                <span className="text-white text-lg">Scroll Down</span>
            </div>
        </div>
    );
};

export default HeroSection;
