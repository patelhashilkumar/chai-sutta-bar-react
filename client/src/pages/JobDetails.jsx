import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import heroImage from '../assets/founders_office.png'; // Placeholder image
import { jobs } from '../data/jobs';

const JobDetails = () => {
    const { id } = useParams();
    const job = jobs.find(j => j.id === parseInt(id));



    if (!job) {
        return (
            <div>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <h2 className="text-2xl">Job not found</h2>
                    <Link to="/career" className="ml-4 text-csb-brown underline">Back to Careers</Link>
                </div>

            </div>
        );
    }

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4 font-['Montserrat']">
                    <p className="text-sm md:text-base font-medium mb-2 tracking-wide text-gray-200">
                        {job.subtitle || "Chai Sutta Bar India"}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {job.title}
                    </h1>
                    <p className="text-sm md:text-base font-light text-gray-300">
                        Location- {job.location || "Indore, India"}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white py-16 px-4 md:px-16 container mx-auto">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4a2c2a] mb-8 font-['Montserrat']">
                        Job Description
                    </h2>

                    {job.responsibilities && job.responsibilities.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-lg font-bold text-black mb-4">Responsibilities:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-sm md:text-base">
                                {job.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                        <div>
                            <h3 className="text-lg font-bold text-black mb-4">Requirements:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed text-sm md:text-base">
                                {job.requirements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default JobDetails;

