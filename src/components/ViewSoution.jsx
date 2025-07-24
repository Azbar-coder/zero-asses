import React from 'react';
import { FaPuzzlePiece } from 'react-icons/fa6';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';

const ViewSoution = () => {
    const navigate = useNavigate();

    const handleExploreSolutions = () => {
        navigate('/solutions');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };
    return (
        <>
            <section className="w-full text-[] py-20 px-6 md:px-24" id='solution-section'>
                <Heading
                    title="Smart Mobility, Smarter Solutions"
                    subTitle={`Discover our wide range of tech-powered services designed to improve student transportation.\nFrom instant bookings to route optimization, we make your campus rides safe, seamless, and student-first.`}
                    buttonText="Explore Our Solutions"
                    icon={<FaPuzzlePiece />}
                    onClick={handleExploreSolutions}
                />
            </section>
        </>
    )
}

export default ViewSoution