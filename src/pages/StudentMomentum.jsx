import React from 'react';
import Footer from '../components/Footer';
const momentumData = [
    {
        title: 'Smart Commute Systems',
        content: 'Tech-enabled transport for safe, punctual, and comfortable student rides.',
    },
    {
        title: 'Energy-Supportive Environments',
        content: 'Designing school surroundings that boost energy, focus, and well-being.',
    },
    {
        title: 'Seamless Parent Sync',
        content: 'Live tracking and communication tools to keep parents in the loop.',
    },
    {
        title: 'Empowered Learning Access',
        content: 'Transport-supported access to academic events, libraries, and co-curriculars.',
    },
    {
        title: 'Student Wellness Mobility',
        content: 'Mobility solutions built around mental and physical student wellness.',
    },
    {
        title: 'Eco-Smart Ride Choices',
        content: 'Environment-first transport modes to teach responsibility and sustainability.',
    },
]
const StudentMomentum = () => {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center bg-[#D5F5F2] px-4 py-12'>
                <div className="w-full max-w-5xl text-center bg-[#C4EBE5] mt-20 rounded-lg p-6 ">

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-20 text-[#2B2B2B] hover:text-white">Introducing Student Momentum</h1>
                    <p className="text-md mb-10 text-[#444444] ">
                        Student Momentum is a modern framework designed to propel learners through smart, holistic mobility support. It's the energy, ease, and ecosystem every student needs to thrive beyond classrooms.
                    </p>
                    <p className="text-4xl mb-10 text-[#444444] font-bold">
                        Inspired by ZeroRide’s vision.
                    </p>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6'>
                        {
                            momentumData.map((item, index) => (
                                <div key={index} className='bg-[#EAF7F4]rounded-2xl p-6 shadow-lg hover:bg-[#2F8780] transform transition-all duration-300 '>
                                    <h2 className='text-xl text-[#2B2B2B] hover:text-white  font-bold mb-2 '>{item.title}</h2>
                                    <p className='text-md text-[#2B2B2B] hover:text-white font-semibold'>{item.content}</p>
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

export default StudentMomentum