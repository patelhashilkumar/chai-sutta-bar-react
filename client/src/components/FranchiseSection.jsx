import React from 'react';
import franchiseImg from '../assets/Business-Opportunities-e1737096995311.jpg';

const FranchiseSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Centered Heading with Underline */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#672717] inline-block relative pb-4" style={{ fontFamily: 'Montserrat' }}>
                        Why Choose Us?
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#672717]"></span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-gray-800 text-xl md:text-2xl leading-relaxed">
                        <p className="mb-6">
                            The vision of Chai Sutta Bar(CSB) is to deliver our unique cultural blend and values to each corner of the
                            world. We started 8 years back, and we have accomplished great tasks and achieved incredible
                            milestones. The <span className="font-bold">600+ franchise outlets, 370+ cities</span>,
                            countless <em>kulhads</em>, and global presence say it all.
                            Without any boundaries, Chai Sutta Bar is now spreading with wings made of people’s love and affection.
                        </p>
                        <p className="mb-6">
                            Franchise partners of Chai Sutta Bar(CSB) are enjoying massive margins and impeccable growth every year.
                            It’s super easy to start a journey with a tested, tried, and high-ROI-driven business model. With tea
                            becoming the most consumed beverage, this industry has vast growth potential.
                        </p>
                        <p className="font-bold mb-8">
                            Take the first step and become a part of the family that is ever-growing. Partner with the most trusted
                            brand in the market.
                        </p>
                        <button className="bg-[#1a1a1a] hover:bg-black text-white font-bold py-3 px-8 rounded-full transition duration-300 uppercase tracking-wide text-base">
                            Know More!
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={franchiseImg}
                                alt="Chai Sutta Bar Franchise"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FranchiseSection;
