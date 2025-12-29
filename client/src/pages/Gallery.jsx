import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';


// Importing gallery images
import img1 from '../assets/gallery/0W1A7728-scaled.jpg';
import img2 from '../assets/gallery/0W1A8171-scaled.jpg';
import img3 from '../assets/gallery/0W1A8372-scaled.jpg';
import img4 from '../assets/gallery/Aaj-Samaj-Pg-2-Nov-12-2021.-300x281-min.jpeg';
import img5 from '../assets/gallery/Aap-ka-Faisla_Page-7-11-11-2021-300x259-min.jpg';
import img6 from '../assets/gallery/Action-India_P_03_17-nov-300x142-min.jpg';
import img7 from '../assets/gallery/IMG_1306_1563307933463-e1652267171229.png';
import img8 from '../assets/gallery/IMG_1468_1563569854987.png';
import img9 from '../assets/gallery/IMG_2970-scaled.jpg';
import img10 from '../assets/gallery/IMG_3039-scaled.jpg';
import img11 from '../assets/gallery/csb-coffee-kolkotar-ondormahol.jpg';
import img12 from '../assets/gallery/pizza-poster.png';

const Gallery = () => {


    const [activeFilter, setActiveFilter] = useState('ALL');
    const [visibleCount, setVisibleCount] = useState(6);

    const categories = [
        "ALL",
        "FOOD PHOTOGRAPHY",
        "MEDIA COVERAGE",
        "OUTLETS PHOTOS",
        "COMING SOON OUTLETS"
    ];

    // Mapped images from user provided directory
    const allImages = [
        { id: 1, src: img1, category: "FOOD PHOTOGRAPHY", title: "Maggie" },
        { id: 2, src: img2, category: "FOOD PHOTOGRAPHY", title: "Chai & Bun Maska" },
        { id: 3, src: img3, category: "FOOD PHOTOGRAPHY", title: "Kulhad Chai" },
        { id: 4, src: img12, category: "FOOD PHOTOGRAPHY", title: "Pizza" },

        { id: 5, src: img7, category: "OUTLETS PHOTOS", title: "Outlet Ambience" },
        { id: 6, src: img8, category: "OUTLETS PHOTOS", title: "Exterior View" },
        { id: 7, src: img9, category: "OUTLETS PHOTOS", title: "Night View" },
        { id: 8, src: img10, category: "OUTLETS PHOTOS", title: "Crowd & Vibe" },
        { id: 9, src: img11, category: "OUTLETS PHOTOS", title: "Kolkata Outlet" },

        { id: 10, src: img4, category: "MEDIA COVERAGE", title: "Aaj Samaj Feature" },
        { id: 11, src: img5, category: "MEDIA COVERAGE", title: "Aap Ka Faisla" },
        { id: 12, src: img6, category: "MEDIA COVERAGE", title: "Action India" },

        { id: 13, src: img1, category: "COMING SOON OUTLETS", title: "Coming Soon" },
    ];

    const filteredImages = activeFilter === 'ALL'
        ? allImages
        : allImages.filter(img => img.category === activeFilter);

    const visibleImages = filteredImages.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div>
            <Navbar />
            <div className="pt-24 min-h-screen bg-white font-['Montserrat']">
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#4a2c2a] mb-8">
                        Take A Peek Inside Our Wonderworld
                    </h1>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setVisibleCount(6); // Reset visible count on category change
                                }}
                                className={`text-sm md:text-base font-medium tracking-wide transition-colors ${activeFilter === category
                                    ? "text-black border-b-2 border-black pb-1"
                                    : "text-gray-500 hover:text-gray-800"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                        {visibleImages.map((image) => (
                            <div key={image.id} className="relative group overflow-hidden aspect-square">
                                <img
                                    src={image.src}
                                    alt={`Gallery item ${image.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                    <span className="text-white text-xl font-bold font-['Montserrat'] text-center">
                                        {image.title || "Chai Sutta Bar"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < filteredImages.length && (
                        <button
                            onClick={handleLoadMore}
                            className="bg-[#333] text-white px-8 py-3 text-sm font-medium hover:bg-black transition-colors rounded-sm"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Gallery;

