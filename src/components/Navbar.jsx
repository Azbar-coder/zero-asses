import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../assets/favicon.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleScrollOrRedirect = (id) => {
        if (location.pathname === '/') {
            scrollToSection(id);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(id), 300);
        }
        setIsOpen(false);
    };

    const handleScrollToSolutions = () => {
        if (location.pathname === '/') {
            // Already on Home, scroll directly
            const section = document.getElementById('solution-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to Home first, then scroll
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('solutions-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
        setIsOpen(false);
    };

    return (
        <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl shadow-lg z-50 rounded-xl bg-[#00A693]'>
            <div className='container px-4 flex justify-between items-center h-16'>
                <div className='flex justify-center'>     
                    <img src={logo} alt="" height={28} width={40}/>
                    <h3 className='text-2xl font-bold text-[#000000]'>Ride</h3>
                </div>

                {/* Desktop Nav */}
                <div className='hidden md:flex space-x-5 text-sm font-bold items-center '>
                    <button onClick={() => handleScrollOrRedirect('hero-section')} className=' text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none  focus:ring-[#FFB400] 
                   transition-all duration-300'>Home</button>

                    <button onClick={() => handleScrollOrRedirect('about-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Why ZeroRide?</button>

                    <button onClick={handleScrollToSolutions} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Solutions</button>
                    <button onClick={() => handleScrollOrRedirect('faq-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>FAQs</button>
                    <button onClick={() => {
                        const section = document.getElementById('contact-section');
                        if (location.pathname === '/') {
                            section?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            navigate('/');
                            setTimeout(() => {
                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }
                    }} className="text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300">Support</button>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className='md:hidden flex flex-col items-center space-y-4 py-4'>
                    <button onClick={() => handleScrollOrRedirect('hero-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Home</button>

                    <button onClick={() => handleScrollOrRedirect('about-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Why ZeroRide?</button>

                    <button onClick={() => navigate('/solutions')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Solutions</button>

                    <button onClick={() => handleScrollOrRedirect('faq-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>FAQs</button>

                    <button onClick={() => handleScrollOrRedirect('contact-section')} className='text-white px-5 py-2 rounded-md hover:bg-[#FFB400] 
                   focus:outline-none focus:ring-2 focus:ring-[#FFB400] 
                   transition-all duration-300'>Support</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
