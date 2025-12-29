import React from 'react';
import defaultImage from '../assets/founders_office.png';
import { FaBullseye, FaBullhorn, FaCheckCircle, FaCrown } from 'react-icons/fa';

const WhyWeRockSection = ({ image }) => {
    return (
        <section className="bg-white text-gray-900 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left Column: Text + Image */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-csb-brown" style={{ fontFamily: 'Montserrat' }}>
                            Why We Rock?
                        </h2>
                        <p className="text-2xl leading-relaxed mb-8 text-gray-700">
                            Take the first step and become a part of the family that is ever-growing.
                            Partner with the Most Trusted Tea Franchise in the market. The vision of
                            <span className="font-bold"> Chai Sutta Bar franchise</span> is to deliver our unique cultural blend and values
                            to each corner of this world. Started 8 years back, we have accomplished
                            great tasks and achieved incredible milestones. <span className="font-bold">600+ Outlets, 370+ cities,
                                countless kulhads</span>, and global presence say it all.
                        </p>
                        <div className="rounded-xl overflow-hidden shadow-lg w-[90%] mx-auto">
                            <img
                                src={image || defaultImage}
                                alt="Founders in office"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Feature Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 content-center">

                        {/* Feature 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-csb-brown text-white p-4 rounded-full mb-4">
                                <FaBullseye size={40} />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 text-gray-800">Target Audience</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We are a major attraction for youths who are spending more
                                than 6,00,000 minutes in our outlets. In the coming years, we
                                are targeting to reach more cities and to serve more people.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-csb-brown text-white p-4 rounded-full mb-4">
                                <FaBullhorn size={40} />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 text-gray-800">Prominence</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We have been covered by major media houses with our success
                                story of becoming a 100-crore company within 6 years of the
                                establishment without any outside investment.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-csb-brown text-white p-4 rounded-full mb-4">
                                <FaCheckCircle size={40} />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 text-gray-800">Fresh Concept</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our concept of 'Taste The Kulhad Chai' in a bar-like setting
                                where smoking is completely prohibited has been a new
                                concept that focuses on the health of both the brand and our
                                consumers.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-csb-brown text-white p-4 rounded-full mb-4">
                                <FaCrown size={40} />
                            </div>
                            <h3 className="text-3xl font-bold mb-3 text-gray-800">Brand Value</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At present, Chai Sutta Bar have culminated into a brand that
                                resonates with youth through our vision and mission. Chai
                                Sutta Bar have also marked presence in more than 370+
                                cities in India as well as Dubai and Oman with our 600+
                                outlets.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeRockSection;
