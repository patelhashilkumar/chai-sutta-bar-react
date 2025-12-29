import React from 'react';

// Importing all menu images
import chai from '../assets/menu/Chai-1.webp';
import hotCoffee from '../assets/menu/Hot-Coffee.webp';
import coldCoffee from '../assets/menu/Cold-Coffee.webp';
import shake from '../assets/menu/Shake.webp';
import mojito from '../assets/menu/Mojito-1.webp';
import iceTea from '../assets/menu/Ice-Tea-1.webp';
import iceCrusher from '../assets/menu/Ice-Crusher.webp';
import bites from '../assets/menu/Bites.webp';
import sandwich from '../assets/menu/Sandwich.webp';
import burger from '../assets/menu/Burger-1.webp';
import pizza from '../assets/menu/Pizza.webp';
import pasta from '../assets/menu/Pasta.webp';
import maggi from '../assets/menu/Maggi.webp';
import momo from '../assets/menu/Momo.webp';

const menuItems = [
    { id: 1, img: chai, alt: 'Chai Menu' },
    { id: 2, img: hotCoffee, alt: 'Hot Coffee Menu' },
    { id: 3, img: coldCoffee, alt: 'Cold Coffee Menu' },
    { id: 10, img: burger, alt: 'Burger Menu' },
    { id: 11, img: pizza, alt: 'Pizza Menu' },
    { id: 12, img: pasta, alt: 'Pasta Menu' },
    { id: 14, img: momo, alt: 'Momo Menu' },
    { id: 13, img: maggi, alt: 'Maggi Menu' },
    { id: 9, img: sandwich, alt: 'Sandwich Menu' },
    { id: 8, img: bites, alt: 'Bites Menu' },
    { id: 4, img: shake, alt: 'Shake Menu' },
    { id: 7, img: iceCrusher, alt: 'Ice Crusher Menu' },
    { id: 5, img: mojito, alt: 'Mojito Menu' },
    { id: 6, img: iceTea, alt: 'Ice Tea Menu' },
];

const MenuHighlightSection = () => {
    return (
        <section className="bg-[#fdfbf6] pb-12">
            <div className="w-full">
                {menuItems.map((item) => (
                    <div key={item.id} className="w-full shadow-none mb-0 leading-none">
                        <img
                            src={item.img}
                            alt={item.alt}
                            className="w-full h-auto block"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuHighlightSection;
