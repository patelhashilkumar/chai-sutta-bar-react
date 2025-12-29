import React, { useState } from 'react';
import Navbar from '../components/Navbar';


const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First item expanded by default as per screenshot

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the cost of one outlet?",
            answer: "Costing of each outlet depends upon location and city of where the outlet is going to be opened. Typically, it ranges from 16 to 30 Lakhs depending on the size and condition of the property."
        },
        {
            question: "What is the token money for CSB franchise?",
            answer: "An approximate non-refundable token money of 2 Lakhs is required to initiate the process."
        },
        {
            question: "What is the process of acquiring franchisee?",
            answer: "The process involves: 1. Filling out the franchise inquiry form. 2. Initial screening by our team. 3. Paying the token money. 4. Site survey and approval. 5. Signing the Franchise Agreement. 6. Outlet setup and training."
        },
        {
            question: "How much is the royalty fee?",
            answer: "We charge a royalty fee of 4% on Net Sales."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-['Montserrat']">
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow pt-24 md:pt-32">

                {/* Header Section */}
                <div className="bg-[#4a2c2a] py-16 text-center">
                    <h1 className="text-5xl font-bold text-white mb-2 tracking-wide">FAQs</h1>
                    <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 md:px-24 py-16 text-center">
                    <p className="text-[#4a2c2a] text-lg md:text-xl font-medium mb-1 leading-relaxed">
                        Here, are some common queries regarding our franchise.
                    </p>
                    <p className="text-[#4a2c2a] text-lg md:text-xl font-medium mb-12 leading-relaxed">
                        For more details, you can always contact us through mail or number.
                    </p>

                    {/* Accordion */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="text-left">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`w-full text-left px-8 py-5 text-lg font-semibold text-[#4a2c2a] bg-[#ebe0d6] hover:bg-[#e3d3c4] transition-colors duration-300 flex justify-between items-center ${activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
                                >
                                    <span>{faq.question}</span>
                                    {/* Optional: Add an icon like + or - or chevron */}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-8 text-gray-700 text-lg leading-relaxed border-x border-b border-[#ebe0d6] rounded-b-lg">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </div>
    );
};

export default FAQs;
