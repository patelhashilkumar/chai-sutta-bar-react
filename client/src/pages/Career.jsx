import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import heroImage from '../assets/founders_office.png'; // Using as placeholder
import { jobs } from '../data/jobs';

const Career = () => {


    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Montserrat']">Careers</h1>
                    <p className="text-xl md:text-2xl font-medium">
                        We are Hiring because seeing layoffs all around is painful.
                    </p>
                </div>
            </div>

            {/* Job Listings */}
            <div className="container mx-auto px-4 py-16 bg-white">
                <div className="max-w-5xl mx-auto space-y-16">
                    {jobs.map((job, index) => (
                        <div key={job.id} className="flex flex-col items-start text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#4a2c2a] mb-6 font-['Montserrat']">
                                {index + 1}) {job.title}
                            </h2>
                            <div className="w-full">
                                <h3 className="text-lg font-bold text-black border-b border-black inline-block mb-4 pb-0.5">Job Description</h3>
                                <p className="text-gray-800 text-lg mb-6 leading-relaxed max-w-3xl">
                                    {job.description}
                                </p>

                                <Link
                                    to={`/career/${job.id}`}
                                    className="bg-[#d3d3d3] text-black px-5 py-2 text-sm font-medium hover:bg-gray-400 transition-colors rounded-sm inline-block"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Career;

