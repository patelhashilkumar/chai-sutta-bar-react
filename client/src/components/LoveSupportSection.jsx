import React, { useState, useEffect } from 'react';

// Import custom stat icons
import iconOutlets from '../assets/stats/outlets.png';
import iconCities from '../assets/stats/cities.png';
import iconKulhads from '../assets/stats/kulhads.png';
import iconMilk from '../assets/stats/milk.png';

// Counter Component
const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const start = 0;

        // Parse end value if it's a number, otherwise handle text separately
        // For this usage, we expect 'end' to be the numeric target

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function (easeOutQuad)
            // const easeProgress = 1 - Math.pow(1 - progress, 3); 

            setCount(Math.floor(progress * (end - start) + start));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

const LoveSupportSection = () => {
    const stats = [
        {
            img: iconOutlets,
            target: 600,
            suffix: "+",
            label: "Outlets"
        },
        {
            img: iconCities,
            target: 370,
            suffix: "+",
            label: "Cities"
        },
        {
            img: iconKulhads,
            target: 6,
            suffix: " Lakh",
            label: "Kulhads/Day"
        },
        {
            img: iconMilk,
            target: 20000,
            suffix: " Litre",
            label: "Milk Used/Day"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#672717]" style={{ fontFamily: 'Montserrat' }}>
                    With Your Love & Support
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="h-24 md:h-28 mb-6 flex items-end">
                                <img src={stat.img} alt={stat.label} className="h-full w-auto object-contain" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                                <Counter end={stat.target} suffix={stat.suffix} />
                            </h3>
                            <p className="text-xl md:text-2xl font-bold text-[#672717]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoveSupportSection;
