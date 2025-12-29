import React from 'react';
import founderImage from '../assets/founders.png';

const UntoldStorySection = () => {
    return (
        <section className="bg-csb-brown text-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: 'Montserrat' }}>
                            Chai Sutta Bar - <br />
                            Untold Story
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
                            "I remember the initial days of CSB where each new customer brought tons of joy
                            and smiles to my and other team members' face. And when any customer praised us
                            for tasty chai, use of kulhad, or ambience, we were over nine clouds. At CSB,
                            we always want that fire inside every member of CSB and crave that smile.
                            Now, I love to hear stories from different corners of the world."
                        </p>
                        <p className="text-xl md:text-2xl font-bold mb-10">
                            - Anubhav Dubey
                        </p>
                        <button className="bg-[#fdd835] hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300">
                            Know More!
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <div className="rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl">
                            <img
                                src={founderImage}
                                alt="Chai Sutta Bar Founders"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UntoldStorySection;
