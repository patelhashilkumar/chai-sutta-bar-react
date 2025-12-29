import React from 'react';
import storyImg from '../assets/Website-Creative.png';

const StorySection = () => {
    return (
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Left Content - wider text for bigger fonts */}
                <div className="md:w-3/5 mb-10 md:mb-0 md:pr-12 text-left">
                    <h4 className="text-2xl md:text-3xl font-bold text-csb-brown mb-3 tracking-wide uppercase" style={{ fontFamily: 'Montserrat' }}>
                        Welcome To Chai Sutta Bar
                    </h4>
                    <h2 className="text-6xl md:text-8xl font-black text-[#672717] mb-8 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Montserrat' }}>
                        Cuddle The Kulhad
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed text-xl md:text-2xl font-medium">
                        With over 6 Lakh Kulhad Chai every day, we brew the perfect experience of happiness and create soulful memories. We are synonymous with aromatic Kulhad Chai and platterful of cool vibes.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed text-xl md:text-2xl font-medium">
                        We are India's fastest growing chai-chain & franchise that started its journey back in 2016. We envision blending Kulhad's health benefits with the most go-to-beverage "Chai" in India. Hailing from the commercial capital of Madhya Pradesh, we're well known for our uniqueness and world-class service. We have a mission to serve a wishful cup of tea in every corner of the world.
                    </p>

                    <p className="text-gray-700 mb-10 font-bold text-xl md:text-2xl">
                        Always Welcome To Join Us & Fall In Love With Tea Again.
                    </p>

                    <button className="bg-black text-white px-14 py-6 rounded-full font-bold hover:bg-gray-900 transition duration-300 text-base md:text-lg tracking-widest shadow-xl">
                        READ OUR STORY
                    </button>
                </div>

                {/* Right Image - 2/5 width */}
                <div className="md:w-2/5 flex justify-center md:justify-end">
                    <div className="rounded-2xl overflow-hidden w-full">
                        <img src={storyImg} alt="Cuddle The Kulhad" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
