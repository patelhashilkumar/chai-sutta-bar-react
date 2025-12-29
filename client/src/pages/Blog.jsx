import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {


    return (
        <div className="bg-white">
            <Navbar />

            {/* Header Section */}
            <div className="bg-[#4a2c2a] pt-24 pb-12 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold font-['Montserrat']">Blog</h1>
            </div>

            {/* Blog Grid Section */}
            <div className="container mx-auto px-4 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="bg-[#f5f7fa] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group hover:-translate-y-1"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover Overlay with Arrow */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <FaArrowRight className="text-white text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-start">
                                <h3 className="text-gray-800 text-[17px] font-semibold leading-snug group-hover:text-[#4a2c2a] transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Blog;

