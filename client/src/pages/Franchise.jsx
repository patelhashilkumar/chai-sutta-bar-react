import React from 'react';
import Navbar from '../components/Navbar';
import FranchiseHeroSection from '../components/FranchiseHeroSection';
import WhyWeRockSection from '../components/WhyWeRockSection';
import VideoSection from '../components/VideoSection';
import FranchiseModelSection from '../components/FranchiseModelSection';
import FranchiseStoriesSection from '../components/FranchiseStoriesSection';
import FranchiseConsultationSection from '../components/FranchiseConsultationSection';
import Footer from '../components/Footer';

const Franchise = () => {
    return (
        <div className="font-sans text-gray-900 pt-24 md:pt-32">
            <Navbar />
            <FranchiseHeroSection />
            <WhyWeRockSection />
            <VideoSection />
            <FranchiseModelSection />
            <FranchiseStoriesSection />
            <FranchiseConsultationSection />
            <Footer />
        </div>
    );
};

export default Franchise;

