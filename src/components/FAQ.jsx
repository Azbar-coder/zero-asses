import { React, useState } from 'react';

const faqsData = [
    {
        question: 'What is ZeroRide?',
        answer: 'ZeroRide is a student-centric mobility platform offering affordable, safe, and eco-friendly rides for college students.',
    },
    {
        question: 'Who can use ZeroRide services?',
        answer: 'Our services are exclusively designed for college and university students with valid student IDs.',
    },
    {
        question: 'How do I book a ride?',
        answer: 'Simply sign in to the ZeroRide app, select your pickup and destination, and choose a ride option to book instantly.',
    },
    {
        question: 'Is ZeroRide safe?',
        answer: 'Yes, all rides are monitored with safety checks, verified riders, and SOS support built-in.',
    },
    {
        question: 'What are the ride timings?',
        answer: 'We operate from 6 AM to 10 PM daily, tailored to student schedules.',
    },
    {
        question: 'Are rides affordable for students?',
        answer: 'Absolutely. We offer student-only pricing that’s budget-friendly and sometimes even subsidized.',
    },
    {
        question: 'Can I schedule a ride in advance?',
        answer: 'Yes, ZeroRide lets you pre-book rides up to 24 hours in advance.',
    },
    {
        question: 'What if I face an issue during the ride?',
        answer: 'Use the in-app SOS or support option for quick help and emergency assistance.',
    },
    {
        question: 'Is ZeroRide available in my college?',
        answer: 'Check availability in your area on the app or website. We’re rapidly expanding to new campuses!',
    },
    {
        question: 'Do I need to share my student ID?',
        answer: 'Yes, verification ensures student-only access to the platform and pricing.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className="w-full bg-[#E6F9F6] text-[#444444] py-16 px-6 md:px-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#444444]">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqsData.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-xl p-4 bg-[#F1EDFD] shadow-sm transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left font-semibold text-lg flex justify-between items-center trans transition-all duration-300"
                                >
                                    {faq.question}
                                    <span className="ml-2">{openIndex === index ? '−' : '+'}</span>
                                </button>


                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] mt-3' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-700">
                                        {faq.answer}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className='w-12 h-1 bg-gray-800 mt-12 rounded-full mx-auto'></div>
        </>
    )
}

export default FAQ