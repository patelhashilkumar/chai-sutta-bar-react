import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingContactWidget from './components/FloatingContactWidget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Franchise = lazy(() => import('./pages/Franchise'));
const Menu = lazy(() => import('./pages/Menu'));
const Career = lazy(() => import('./pages/Career'));
const JobDetails = lazy(() => import('./pages/JobDetails'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Feedback = lazy(() => import('./pages/Feedback'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Locations = lazy(() => import('./pages/Locations'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Loading Fallback Component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-[#fcf9f2]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4a2c2a]"></div>
    </div>
);

function App() {
    return (
        <Router>
            <div className="App">
                <FloatingContactWidget />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/franchise" element={<Franchise />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/career/:id" element={<JobDetails />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/faqs" element={<FAQs />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
