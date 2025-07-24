import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Heading from '../components/Heading';
import { RiEBikeFill } from "react-icons/ri";
import FAQ from '../components/FAQ';
import ViewSoution from '../components/ViewSoution';
import Footer from '../components/Footer';
import leftVectorImg from '../assets/1.png';
import StatsSection from '../components/StatsSection';
function Home() {

    return (
        <div>
            {/* Hero Section */}
            <div className='relative h-[125vh] flex items-start justify-center pt-32 md:pt-40 bg-[#F5F0EC] text-center text-[#444444]' id="hero-section" >

                <img
                    src={leftVectorImg}
                    alt="Student Ride"
                    className="absolute top-[400px] sm:top-[350px] md:top-[300px] lg:top-[420px] left-[120px] sm:left-[180px] md:left-[250px] lg:left-[500px] w-[200px] sm:w-[220px] md:w-[280px] lg:w-[350px] h-[200px] sm:h-[220px] md:h-[280px] lg:h-[350px] opacity-90 animate-fade-in-slow 
                    transform rotate-[30deg]"
                />

                <Heading
                    title="Ride Smarter. Go Further with ZeroRide"
                    subTitle="Eco-friendly, reliable rides — anywhere, anytime with ZeroRide"
                    variant="hero"
                    showButton={true}
                    buttonText="Try ZeroRide"
                    icon={<RiEBikeFill />}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                />
            </div>

            {/* About Section */}
            <section id="about-section" className='pt-32 bg-[#E8FAF6] text-white'>
                <About />
            </section>

            {/* Explore Solution */}
            <section id="solutions" className='pt-32 bg-[#F1EDFD]  pb-20'>
                <ViewSoution />
            </section>

            <section id="stats-section" className='pt-32 bg-[#E6F9F6] text-white pb-20'>
                <StatsSection />
            </section>


            {/* FAQs */}
            <section id="faq-section" className='pt-32 bg-[#E6F9F6] text-white pb-20'>
                <FAQ />
            </section>


            {/* Contact Section */}
            <section id="contact-section" className='pt-32 bg-[#E6F9F6] text-[#444444] pb-20'>
                <ContactUs />
            </section>

            {/* Footer Section */}
            <section id="footer-section" className='pt-32 bg-[#197F77] text-[#555555] pb-20 hover:text-[#1561AD]'>
                <Footer />
            </section>

        </div >
    );
}

export default Home;
