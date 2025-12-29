import React, { useState } from 'react';
import franchisePromo from '../assets/franchise_promo.jpg';

import { API_BASE_URL } from '../utils/api';

const FranchiseHeroSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        area: '',
        address: '',
        message: '',
        budget: ''
    });

    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            // Map form data to match backend schema expecting 'contactNumber'
            const payload = {
                ...formData,
                contactNumber: formData.contact // Mapping 'contact' to 'contactNumber'
            };

            const response = await fetch(`${API_BASE_URL}/api/franchise`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong');
            }

            setStatus({ loading: false, error: null, success: true });

            // Clear form
            setFormData({
                name: '',
                contact: '',
                email: '',
                area: '',
                address: '',
                message: '',
                budget: ''
            });

            alert('Thank you for your interest! We will contact you soon.');

        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Side - Promotional Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={franchisePromo}
                            alt="Join Chai Sutta Bar Franchise"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            Get a Franchise
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown"
                                required
                            />
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact Number"
                                value={formData.contact}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your-email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown"
                                required
                            />
                            <input
                                type="text"
                                name="area"
                                placeholder="Area in which you want to open CSB outlet?"
                                value={formData.area}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown resize-none"
                            ></textarea>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-csb-brown text-gray-600"
                                required
                            >
                                <option value="">Budget Rs. 22-25 Lacs</option>
                                <option value="22-25">Rs. 22-25 Lacs</option>
                                <option value="25-30">Rs. 25-30 Lacs</option>
                                <option value="30-35">Rs. 30-35 Lacs</option>
                                <option value="35+">Rs. 35+ Lacs</option>
                            </select>

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-csb-brown hover:bg-[#3a140a] text-white font-semibold py-3 px-12 rounded-md transition duration-300 shadow-md uppercase tracking-wider"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FranchiseHeroSection;
