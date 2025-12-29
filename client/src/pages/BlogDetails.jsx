import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { blogPosts } from '../data/blogPosts';

const BlogDetails = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));



    if (!post) {
        return (
            <div className="bg-white min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center pt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
                        <Link to="/blog" className="text-csb-brown hover:underline">Back to Blog</Link>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <div className="bg-white font-sans text-gray-900">
            <Navbar />

            <div className="pt-24 md:pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <article>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black leading-tight">
                        {post.title}
                    </h1>

                    {/* Content Section */}
                    <div
                        className="prose prose-lg max-w-none text-gray-700 space-y-6"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                <div className="mt-16 pt-8 border-t border-gray-200">
                    <Link to="/blog" className="text-csb-brown font-semibold hover:underline flex items-center gap-2">
                        ← Back to all blogs
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default BlogDetails;

