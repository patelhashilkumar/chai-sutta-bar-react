import React from 'react';
import videoMap from '../assets/video.mp4';

const StatsCounter = () => {
    return (
        <section className="bg-white py-4 md:py-8 w-full">
            <div className="w-full">
                <div className="flex justify-center items-center w-full">
                    <video
                        className="w-full h-auto object-cover"
                        src={videoMap}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controlsList="nodownload"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
