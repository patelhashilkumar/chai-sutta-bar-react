import React from 'react';

const mediaLogos = [
    { name: 'Business Inc', url: 'https://via.placeholder.com/120x40/ffffff/333333?text=Business+Inc' },
    { name: 'India Today', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/India_Today_logo.svg/200px-India_Today_logo.svg.png' },
    { name: 'Brut', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Brut_%28media_company%29_logo.svg/200px-Brut_%28media_company%29_logo.svg.png' },
    { name: 'Free Press', url: 'https://via.placeholder.com/120x40/ffffff/cc0000?text=FREE+PRESS' },
    { name: 'Josh Talks', url: 'https://via.placeholder.com/120x40/ffffff/00a0dc?text=JoshTalks' }
];

const MediaMentionsSection = () => {
    return (
        <>
            {/* Media Mentions */}
            <section className="bg-csb-brown py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        <span className="text-[#fdd835]">Media</span>{' '}
                        <span className="text-white">Mentions</span>
                    </h2>

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {mediaLogos.map((logo, index) => (
                            <div key={index} className="bg-white rounded-lg px-4 py-2 shadow-md">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 md:h-10 w-auto object-contain"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/120x40/ffffff/333333?text=${logo.name.replace(' ', '+')}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Franchise Consultation */}
            <section className="bg-gray-100 py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-12 text-center">

                    <p className="text-gray-500 text-sm md:text-base mb-2">Want To Franchise With Us?</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        Request A Franchise Consultation
                    </h2>

                    <button className="bg-csb-brown hover:bg-[#3a140a] text-white font-semibold py-3 px-10 rounded-full transition duration-300 shadow-md">
                        Apply Now
                    </button>

                </div>
            </section>
        </>
    );
};

export default MediaMentionsSection;
