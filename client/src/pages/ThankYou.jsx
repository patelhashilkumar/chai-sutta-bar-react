import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-[#fcf9f2] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-[#4a180d]">
                <div className="mb-6 flex justify-center">
                    <FaCheckCircle className="text-[#4a180d] w-20 h-20" />
                </div>

                <h1 className="text-3xl font-bold text-[#4a180d] mb-4 font-['Oswald']">
                    Thank You!
                </h1>

                <p className="text-gray-600 mb-8 text-lg">
                    Your form details have been submitted successfully. We will get back to you soon.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-[#4a180d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5d1e11] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
