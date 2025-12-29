import React from 'react';
import Navbar from '../components/Navbar';
import StorySection from '../components/StorySection';
import FranchiseSection from '../components/FranchiseSection';
import ImageCarousel from '../components/ImageCarousel';
import VideoSection from '../components/VideoSection';
import LoveSupportSection from '../components/LoveSupportSection';
import UntoldStorySection from '../components/UntoldStorySection';

import OurStoriesSection from '../components/OurStoriesSection';
import FranchiseConsultationSection from '../components/FranchiseConsultationSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 pt-24 md:pt-32">
            <Navbar />
            <StorySection />
            <ImageCarousel />
            <VideoSection />
            <LoveSupportSection />
            <UntoldStorySection />
            <FranchiseSection />
            <OurStoriesSection />
            <FranchiseConsultationSection />
            <Footer />
        </div>
    );
};

export default Home;

