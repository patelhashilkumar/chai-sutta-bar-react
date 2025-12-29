import React from 'react';
import mascot from '../assets/mascot.png'; // Using the authenticated mascot image

const MissionVisionSection = () => {
    return (
        <section className="bg-csb-brown text-white py-16 md:py-24 font-sans">
            <div className="container mx-auto px-6 md:px-12">

                {/* Top Section: Title & Description */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    {/* Left Title Area */}
                    <div className="md:w-1/3">
                        <p className="text-2xl font-light mb-2">At</p>
                        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Chai Sutta Bar
                        </h2>
                        <p className="text-3xl md:text-4xl text-[#fdd835] font-handwriting italic font-semibold">
                            What we strive for...
                        </p>
                    </div>

                    {/* Right Description Area */}
                    <div className="md:w-1/2">
                        <p className="text-xl md:text-2xl font-normal leading-relaxed">
                            Chai Sutta Bar has always kept our people at the centre of
                            our services. We believe and understand that the whole
                            being of humankind depends on the food they consume.
                            Food that is affordable, reliable, and connected to their
                            culture and ethos. Our chai is the medium of connection
                            between friends, families and strangers. We strive to make
                            everyone taste the soil of India through our Kulhad chai.
                            Yet, we are more than a good Kulhad Chai.
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Mascot & Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

                    {/* Column 1: Mascot Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={mascot}
                            alt="Chai Sutta Bar Mascot"
                            className="h-64 w-auto object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Column 2: Mission */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-3xl font-semibold text-[#fdd835]">Mission</h3>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-100">
                            We're on a mission to spread
                            our Kulhad Chai across the
                            world and get people to try it
                            globally & taste the aroma of
                            India's soil with their every sip
                            from Kulhad.
                        </p>
                    </div>

                    {/* Column 3: Vision */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-3xl font-semibold text-[#fdd835]">Vision</h3>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-100">
                            Our vision is simply to bring
                            Indian cultural values from
                            the roots and blend them with
                            the world-class ambience to
                            serve people with aromatic
                            experiences and cheerful
                            memories.
                        </p>
                    </div>

                    {/* Column 4: Expansion */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-3xl font-semibold text-[#fdd835]">Expansion</h3>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-100">
                            We are in our expansion
                            mode, i.e. to be present in all
                            the cities of India and all the
                            countries across the globe.
                            Currently present in 370+
                            cities of India and three
                            countries apart from India.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MissionVisionSection;
