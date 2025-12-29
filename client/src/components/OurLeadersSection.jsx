import React from 'react';
import leaderAnubhav from '../assets/leader_anubhav.png';
import leaderAnand from '../assets/leader_anand.png';
import leaderRahul from '../assets/leader_rahul.png';

const leadersData = [
    {
        name: 'Anubhav Dubey',
        image: leaderAnubhav,
        quote: `"I remember the initial days of CSB where each new customer brought tons of joy and smiles to my and other team members' face. And when any customer praised us for tasty chai, use of kulhad, or ambience, we were over nine clouds. At CSB, we always want that fire inside every member of CSB and crave that smile. Now, I love to hear stories from different corners of the world."`
    },
    {
        name: 'Anand Nayak',
        image: leaderAnand,
        quote: `"Chai Sutta Bar is not just an idea, it's a vision of our team, bringing the culture combinations and delivering unique experiences is and will always remain our USP. Now, we are targeting global expansion with messages of environmental protection along with it."`
    },
    {
        name: 'Rahul Patidar',
        image: leaderRahul,
        quote: `"With Anubhav and Anand, we have come a long way. From selling chai in Kulhad for more five people to becoming people's favourite brand. We want to continue this legacy irrespective of time and distance. CSB was about high-quality food and care for people, and it will remain that way."`
    }
];

const OurLeadersSection = () => {
    return (
        <section className="bg-csb-brown py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#fdd835] mb-16 text-center" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Our Leaders
                </h2>

                {/* Leaders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {leadersData.map((leader, index) => (
                        <div key={index} className="flex flex-col items-center">

                            {/* Photo */}
                            <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden mb-6 shadow-lg">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/224x288?text=${leader.name.split(' ')[0]}`;
                                    }}
                                />
                            </div>

                            {/* Decorative Line */}
                            <div className="w-16 h-1 bg-[#fdd835] mb-4"></div>

                            {/* Name */}
                            <h3 className="text-2xl md:text-3xl font-bold text-[#fdd835] mb-4">
                                {leader.name}
                            </h3>

                            {/* Quote */}
                            <p className="text-sm md:text-base text-gray-200 leading-relaxed text-center font-light">
                                {leader.quote}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurLeadersSection;
