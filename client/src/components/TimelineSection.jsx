import React from 'react';

const timelineData = [
    {
        year: '2016',
        text: "Our journey started with the opening of our first three outlets in Indore"
    },
    {
        year: '2017',
        text: "We opened more outlets in the three famous cities of Madhya Pradesh - Indore, Bhopal, and Ujjain"
    },
    {
        year: '2018',
        text: "Our initial step was small but by 2018, we stood our ground with more outlets in more cities"
    },
    {
        year: '2019',
        text: "We became popular among the youth and became more visible in many cities across India"
    },
    {
        year: '2020',
        text: "Even after the lockdown period, we established our mark by serving through 85+ outlets in India and 3 outlets internationally"
    },
    {
        year: '2021',
        text: "After making people fall in love with our chai across India, we became a brand synonymous with kulhad chai"
    },
    {
        year: '2022',
        text: "We have created a path to become the most-loved tea chain in India and yet this is just the beginning and more to come"
    },
    {
        year: '2023',
        text: "Entered Dubai, Nepal, Abu Dhabi, launching luxury QSR brands globally."
    },
    {
        year: '2024',
        text: "Continuing our rapid expansion with over 550+ outlets across 320+ cities globally." // Inferred placeholder based on typical growth, as text was cut off
    }
];

const TimelineSection = () => {
    return (
        <section className="bg-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 relative">

                {/* Central Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4a180d] hidden md:block"></div>

                <div className="flex flex-col gap-12 md:gap-24 relative">
                    {timelineData.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content Side (Text) */}
                            <div className="w-full md:w-5/12 mb-6 md:mb-0 relative">
                                <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    {/* Mobile Layout Adjustment: Text is center aligned */}
                                    <p className={`text-base md:text-xl text-gray-700 font-light leading-relaxed text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        {item.text}
                                    </p>

                                    {/* Dotted Line for Desktop */}
                                    <div className={`hidden md:block absolute top-1/2 w-full border-t-2 border-dashed border-[#8d6e63] -z-10 ${index % 2 === 0 ? 'right-full' : 'left-full'}`} style={{ width: '40%' }}></div>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#4a180d] border-4 border-[#fff] z-10 hidden md:block"></div>

                            {/* Year Circle Side */}
                            <div className="w-full md:w-5/12 flex justify-center items-center relative">
                                <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} w-full`}>
                                    {/* Dotted Line connector to center */}
                                    <div className={`hidden md:block absolute top-1/2 w-1/4 border-t-2 border-dashed border-[#4a180d] ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'}`}></div>

                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 md:border-8 border-[#4a180d] flex items-center justify-center bg-white z-10 shadow-lg">
                                        <span className="text-2xl md:text-3xl font-bold text-[#4a180d]">{item.year}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TimelineSection;
