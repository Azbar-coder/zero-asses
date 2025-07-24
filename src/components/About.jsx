import React from 'react';
import Heading from './Heading';
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleMomentumClick = () => {
        navigate('/student-momentum');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <section className='w-full bg-[#E8FAF6] text-[#444444] py-20 px-6 md:px-24'>

            <Heading
                title="Redefining Student Mobility with Purpose and Power"
                subTitle={`Innovate. Ride. Empower. Transform with ZeroRide. \nWe’re building a smarter, safer, and more empowering way for students to commute with confidence and care.`}
                buttonText="Introducing Student Momentum"
                icon={<FaArrowTrendUp />}
                onClick={handleMomentumClick}
            />

            <div className='w-12 h-1 bg-gray-800 mt-12 rounded-full mx-auto'></div>
        </section>
    );
};

export default About;

