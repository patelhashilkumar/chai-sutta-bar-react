import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Feedback = () => {
    return (
        <div className="flex flex-col min-h-screen font-['Montserrat'] bg-[#fcf9f2]">
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow pt-24 md:pt-36 flex items-center justify-center mb-12">
                <div className="container mx-auto px-4 md:px-12 w-full max-w-4xl">

                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#212529] mb-4">Feedback</h1>

                    <p className="text-center text-[#721c24] text-lg md:text-xl font-medium mb-10 tracking-wide">
                        Do You Have Some Feedback For Us? Your Feedback Matters To Us.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                            />

                            {/* Contact No */}
                            <input
                                type="text"
                                placeholder="Contact No"
                                className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                        />

                        {/* Message */}
                        <textarea
                            rows="6"
                            placeholder="Message"
                            className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg resize-none"
                        ></textarea>

                        {/* Send Button */}
                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                className="bg-[#4a2c2a] text-white font-bold py-3 px-12 rounded-full hover:bg-[#3b2322] transition-colors text-lg shadow-md"
                            >
                                Send
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Feedback;
