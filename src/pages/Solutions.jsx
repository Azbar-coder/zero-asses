import React from 'react'
import { FaRoute } from "react-icons/fa";
import { MdOutlineDomainVerification } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";
import { MdContactEmergency } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import Footer from '../components/Footer';

const solutionData = [
    {
        title: "Smart Route Optimization",
        icon: <FaRoute />,
        text: "AI-powered routing system ensures shortest, safest, and most fuel-efficient rides"
    },
    {
        title: "Student Verification System",
        icon: <MdOutlineDomainVerification />,
        text: "Only verified college students can join the platform — with OTP or college email-based login",
    },
    {
        title: "Eco-Friendly Fleet Integration",
        icon: <FaEarthAfrica />,
        text: "ZeroRide supports electric scooters and cycles to reduce carbon footprint",
    },
    {
        title: "Instant Ride Sharing",
        icon: <FcCollaboration />,
        text: "Let students carpool with peers nearby for reduced costs and safer rides",
    },
    {
        title: "Emergency Support",
        icon: <MdContactEmergency />,
        text: "One-tap SOS alert to notify friends and local authorities instantly",
    },
    {
        title: "Affordable Subscription Model",
        icon: <IoPricetags />,
        text: "Pocket-friendly pricing plans made just for students — from daily to monthly passes",
    },
]

const Solutions = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center  px-4 py-12 bg-[#D5F5F2] ' >
                <div className="w-full max-w-5xl text-center bg-[#C4EBE5] mt-20 rounded-lg p-6 ">
                    <h2 className='text-3xl md:text-5xl font-bold mb-14 mt-20 text-[#2B2B2B] hover:text-white'>Powering the Future of Student Rides</h2>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 '>
                        {
                            solutionData.map((item, index) => (
                                <div key={index} className='bg-[#EAF7F4] rounded-2xl p-10 shadow-lg hover:bg-[#2F8780] transform transition-all duration-300 flex flex-col items-center justify-center' >
                                    <div className='flex items-center justify-center gap-8'>
                                        <h2 className='text-2xl text-[#2B2B2B] hover:text-white font-bold mb-2'>{item.title}</h2>
                                        <p className='text-4xl text-[#FF6B35]'>{item.icon} </p>
                                    </div>
                                    <p className='text-sm text-[#2B2B2B] hover:text-white'>{item.text}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

            <section id="footer-section" className='pt-32 bg-black text-white pb-20'>
                <Footer />
            </section>
        </>
    )
}

export default Solutions;