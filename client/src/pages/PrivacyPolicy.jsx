import React from 'react';
import Navbar from '../components/Navbar';


const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pt-28 md:pt-36 pb-12">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#4a2c2a] font-['Montserrat'] mb-4 text-center">Privacy Policy</h1>
                    <p className="text-gray-500 text-center mb-12 font-medium">Last updated on July 04, 2024</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed text-xl font-light text-justify">
                        <section>
                            <p>
                                At Chai Sutta Bar, we are committed to protecting the privacy of our customers and visitors to our website. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding the use of your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Information We Collect</h2>
                            <p>
                                We collect information about you when you visit our website or use our services. This may include personal information such as your name, email address, phone number, and address. We may also collect information about your browsing behavior, location data, and device information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">How We Use Your Information?</h2>
                            <p>
                                We use your information for a variety of purposes, including to provide you with our products and services, to communicate with you, to process your orders, and to improve our website and services. We may also use your information for marketing and advertising purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Sharing Your Information</h2>
                            <p>
                                We may share your information with our affiliates, service providers, and business partners. We may also share your information if we are required to do so by law, or if we believe that such action is necessary to protect our rights, property, or safety.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Your Choices</h2>
                            <p>
                                You have the right to control how your information is used. You can choose to opt-out of marketing communications from us at any time. You can also request that we delete your information from our records.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Cookies and Similar Technologies</h2>
                            <p>
                                We use cookies and similar technologies to collect information about your use of our website. These technologies help us personalize your experience and improve our website and services. You can control how cookies are used by adjusting your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Security</h2>
                            <p>
                                We take the security of your information seriously and take measures to protect it from unauthorized access, use, or disclosure. However, no system can be completely secure, so we cannot guarantee the security of your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-[#4a2c2a] mb-4 border-b border-[#fdd835] pb-2 inline-block">Changes to this Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our website and services after any changes to this policy will be deemed acceptance of those changes.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PrivacyPolicy;
