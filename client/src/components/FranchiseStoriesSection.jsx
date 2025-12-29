import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import storyImageSonu from '../assets/franchise_story_sonu.jpg';
import storyImageDeepika from '../assets/franchise_story_deepika.jpg';
import storyImageAnkit from '../assets/franchise_story_ankit.jpg';

const stories = [
    {
        id: 1,
        name: "Meet our Sonu",
        description: "He wanted to do business but Papa चाहते थे की beta एक सरकारी नौकरी कर ले।",
        image: storyImageSonu,
        highlight: "Meet our Sonu, ( Franchise Owner, Agra )"
    },
    {
        id: 2,
        name: "Meet Ankit Gupta & Shweta Asawa",
        description: "Two engineers, who left their profession to open Chai Sutta Bar.",
        image: storyImageAnkit,
        highlight: "Meet Ankit Gupta & Shweta Asawa"
    },
    {
        id: 3,
        name: "Meet Deepika",
        description: "नौकरी छोड़कर women staff के साथ चलाया Chai Sutta Bar",
        image: storyImageDeepika,
        highlight: "Meet Deepika"
    }
];

const FranchiseStoriesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create a circular buffer for smooth sliding effect
    const displayStories = [...stories, ...stories, ...stories];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, itemsPerView]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            // Reset to start if we go too far (simple infinite loop simulation)
            if (prevIndex >= stories.length) return 0;
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex <= 0) return stories.length - 1;
            return prevIndex - 1;
        });
    };

    return (
        <section>
            {/* Re-implementing with consistent dark background for the title part as seen in screenshot */}
            <div className="bg-[#4a180d] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Our Happy <span className="text-yellow-400">Franchise Owners</span>
                    </h2>
                    <p className="text-gray-300 mb-12">You Might Also Be Interested In</p>

                    <div className="relative max-w-7xl mx-auto h-[700px] overflow-hidden rounded-none shadow-2xl">
                        {/* Carousel Slides */}
                        <div
                            className="flex transition-transform duration-700 ease-in-out h-full"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                            }}
                        >
                            {displayStories.map((story, index) => (
                                <div
                                    key={`${story.id}-${index}`}
                                    className="min-w-full md:min-w-[50%] h-full relative px-2"
                                >
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
                        >
                            <FaChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
                        >
                            <FaChevronRight size={24} />
                        </button>

                        {/* Dots Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {stories.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex % stories.length ? "bg-yellow-400" : "bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FranchiseStoriesSection;
