import React, { useState } from 'react';
import Navbar from '../components/Navbar';


import { API_BASE_URL } from '../utils/api';

const Feedback = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            const response = await fetch(`${API_BASE_URL}/api/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            setStatus({ loading: false, error: null, success: true });
            setFormData({ fullName: '', contactNumber: '', email: '', message: '' });
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
        }
    };
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

                    <div className="space-y-6">
                        {status.success && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Your feedback has been sent successfully.</span>
                            </div>
                        )}
                        {status.error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Error!</strong>
                                <span className="block sm:inline"> {status.error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                                    required
                                />

                                {/* Contact No */}
                                <input
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Contact No"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg"
                                required
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-400 rounded-lg px-6 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 placeholder-gray-400 text-lg resize-none"
                                required
                            ></textarea>

                            {/* Send Button */}
                            <div className="flex justify-center mt-8">
                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className={`bg-[#4a2c2a] text-white font-bold py-3 px-12 rounded-full hover:bg-[#3b2322] transition-colors text-lg shadow-md ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status.loading ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Feedback;
