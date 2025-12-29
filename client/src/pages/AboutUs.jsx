import React from 'react';
import Navbar from '../components/Navbar';
import WhyWeRockSection from '../components/WhyWeRockSection';
import MissionVisionSection from '../components/MissionVisionSection';
import TimelineSection from '../components/TimelineSection';
import OurLeadersSection from '../components/OurLeadersSection';
import OurUSPSection from '../components/OurUSPSection';
import MediaMentionsSection from '../components/MediaMentionsSection';

import foundersBw from '../assets/founders_bw.png';

const AboutUs = () => {
    return (
        <div className="font-sans text-gray-900 pt-24 md:pt-32">
            <Navbar />
            <WhyWeRockSection image={foundersBw} />
            <MissionVisionSection />
            <TimelineSection />
            <OurLeadersSection />
            <OurUSPSection />
            <MediaMentionsSection />

        </div>
    );
};

export default AboutUs;

