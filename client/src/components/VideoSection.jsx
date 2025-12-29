import React from 'react';

const VideoSection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="w-full px-2 md:px-4">
                <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/HAsBtOjGOYQ?autoplay=0&rel=0"
                        title="Building a MILLION DOLLAR Global Brand from Madhya Pradesh: How?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
