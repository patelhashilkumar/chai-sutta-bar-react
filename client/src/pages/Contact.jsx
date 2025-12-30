import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import { Link, useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../utils/api';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
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
            const response = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit contact inquiry');
            }

            setStatus({ loading: false, error: null, success: true });
            setFormData({ name: '', contactNumber: '', email: '', message: '' });
            navigate('/thank-you');
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
        }
    };
    return (
        <div className="flex flex-col min-h-screen font-['Montserrat']" >
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow pt-24 md:pt-[104px]" >

                {/* Header Section */}
                < div className="bg-[#4a2c2a] py-16 md:py-20 text-center relative overflow-hidden" >
                    {/* Background decorations could go here if needed */}
                    < h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide" > Let's Talk</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#fdd835] tracking-wider" > We're Here</h2>
                </div >

                <div className="container mx-auto px-4 md:px-12 py-12">

                    {/* Info Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center mb-16">
                        {/* Our Location */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-[#4a2c2a] mb-3">Our Location</h3>
                            <p className="text-gray-600 mb-6 font-medium">We May Be Just A Click Away Find nearest Outlet</p>
                            <Link to="/locations" className="bg-[#fdd835] text-[#4a2c2a] font-bold py-3 px-8 rounded-full hover:bg-[#eac428] transition-colors shadow-md">
                                Find Nearest Outlet
                            </Link>
                        </div>

                        {/* Get In Touch */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-[#4a2c2a] mb-3">Get In Touch</h3>
                            <div className="text-gray-600 font-medium space-y-1">
                                <p>+91 6262 3000 31</p>
                                <p>info@chaisuttabarindia.com</p>
                                <p>business@chaisuttabarindia.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Map and Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

                        {/* Map */}
                        <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.086938956627!2d75.89964587595562!3d22.72500892735787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd039da58f55%3A0x6794680877995a9e!2sChai%20Sutta%20Bar%20Private%20Limited%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1719263456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chai Sutta Bar Head Office"
                            ></iframe>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-2">
                            <h3 className="text-3xl font-bold text-[#4a2c2a] mb-2">Touch Base With Us!</h3>
                            <p className="text-[#d8abaa] mb-8 font-medium">For all enquiries, Please email us using form below!</p>

                            <div className="space-y-6">
                                {status.success && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Success!</strong>
                                        <span className="block sm:inline"> Your message has been sent successfully.</span>
                                    </div>
                                )}
                                {status.error && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <strong className="font-bold">Error!</strong>
                                        <span className="block sm:inline"> {status.error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-[#d8abaa] mb-1 font-medium">Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contact" className="block text-[#d8abaa] mb-1 font-medium">Contact Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="contact"
                                            name="contactNumber"
                                            placeholder="Contact Number"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-[#d8abaa] mb-1 font-medium">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-[#d8abaa] mb-1 font-medium">Message <span className="text-red-500">*</span></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#4a2c2a] text-gray-700 resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status.loading}
                                        className={`w-full bg-[#4a2c2a] text-white font-bold py-4 rounded hover:bg-[#3b2322] transition-colors text-lg mt-4 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {status.loading ? 'Sending...' : 'Send'}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div >


        </div >
    );
};

export default Contact;
