import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
// Import images
import img1 from '../assets/carousel/Indore-Grand-Opening-Poster.webp';
import img2 from '../assets/carousel/mysuru-grand-opening-webp.webp';
import img3 from '../assets/carousel/Noida-GOPoster-.webp';
import img4 from '../assets/carousel/utraula-grand-opening.png';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [img4, img1, img2, img3];

    return (
        <div className="py-16 md:py-20 bg-csb-brown">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Montserrat' }}>
                    Up To The Minute
                </h2>
                <div className="px-4 md:px-12">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} className="px-4 focus:outline-none">
                                <div className="rounded-2xl overflow-hidden shadow-2xl transition hover:scale-105 duration-300">
                                    <img src={img} alt={`Event ${index + 1}`} className="w-full h-auto object-cover block" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default ImageCarousel;
