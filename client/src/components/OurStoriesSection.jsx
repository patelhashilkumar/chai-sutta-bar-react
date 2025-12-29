import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from 'react-type-animation';

// Custom Arrow Components for Slick Carousel
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-l-md"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-r-md"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
    );
};

const OurStoriesSection = () => {
    // Video data with YouTube IDs to fetch thumbnails
    const videos = [
        {
            id: 'FcGcuRXRKn0',
            thumbnail: 'https://i.ytimg.com/vi/FcGcuRXRKn0/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=FcGcuRXRKn0'
        },
        {
            id: 'EP74tSkvbyI',
            thumbnail: 'https://i.ytimg.com/vi/EP74tSkvbyI/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=EP74tSkvbyI'
        },
        {
            id: 'AL8-TiZFgmw',
            thumbnail: 'https://i.ytimg.com/vi/AL8-TiZFgmw/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=AL8-TiZFgmw'
        },
        {
            id: 'KSx9CrKU60o',
            thumbnail: 'https://i.ytimg.com/vi/KSx9CrKU60o/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=KSx9CrKU60o'
        },
        {
            id: 'UhVSrdCNeA4',
            thumbnail: 'https://i.ytimg.com/vi/UhVSrdCNeA4/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=UhVSrdCNeA4'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false // Hide arrows on mobile for cleaner look
                }
            }
        ]
    };

    return (
        <section className="bg-csb-brown py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold text-white inline-block relative border-b-4 border-[#fdd835] pb-2" style={{ fontFamily: 'Montserrat' }}>
                        Our <span className="text-[#fdd835]">
                            <TypeAnimation
                                sequence={[
                                    'Stories',
                                    2000,
                                    'Success',
                                    2000,
                                    'Journey',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </span>
                    </h2>
                </div>

                <div className="px-4 md:px-8">
                    <Slider {...settings}>
                        {videos.map((video, index) => (
                            <div key={index} className="px-2 md:px-4 focus:outline-none">
                                <a href={video.link} target="_blank" rel="noopener noreferrer" className="block relative group rounded-xl overflow-hidden shadow-xl border-2 border-[#fdd835]">
                                    <img
                                        src={video.thumbnail}
                                        alt={`Story ${index + 1}`}
                                        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/640x360?text=Video+Thumbnail';
                                        }}
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OurStoriesSection;
