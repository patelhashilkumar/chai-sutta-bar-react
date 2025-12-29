import React from 'react';
import mascot from '../assets/mascot_throne.png';

const uspData = [
    {
        title: 'Great Ambience',
        description: 'We aim to serve traditional chai in a bar-like setting without serving \'Sutta\'.',
        icon: '☕'
    },
    {
        title: 'Made with love menu',
        description: 'Our menu has varieties of most loved food items and beverages that satiate both taste and appetite.',
        icon: '🍴'
    },
    {
        title: 'Orphan Employment',
        description: 'We believe in serving society by allowing bringing the potential of the less fortunate in front of the world.',
        icon: '💼'
    },
    {
        title: 'Pocket-Friendly',
        description: 'Everyone loves chai and thus everyone should be able to afford our kulhad chai.',
        icon: '💰'
    },
    {
        title: 'Eco-Friendly',
        description: 'We serve our beverages in kulhads which are much more eco-friendly than plastics or other alternatives.',
        icon: '🌱'
    },
    {
        title: 'No-Smoking',
        description: 'We want people especially the youth to enjoy eco-friendly \'Kulhad Chai Breaks\' rather than \'Sutta Breaks\'.',
        icon: '🚭'
    }
];

const OurUSPSection = () => {
    const leftItems = uspData.slice(0, 3);
    const rightItems = uspData.slice(3, 6);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">Our USP's</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-csb-brown" style={{ fontFamily: 'Georgia, serif' }}>
                        Brewing Goodness
                    </h2>
                </div>

                {/* USP Grid with Mascot */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

                    {/* Left Column */}
                    <div className="flex flex-col gap-6 w-full md:w-1/3">
                        {leftItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-csb-brown mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Mascot */}
                    <div className="w-full md:w-1/4 flex justify-center my-8 md:my-0">
                        <img
                            src={mascot}
                            alt="Chai Sutta Bar Mascot"
                            className="h-64 md:h-80 w-auto object-contain"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 w-full md:w-1/3">
                        {rightItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-csb-brown mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OurUSPSection;
