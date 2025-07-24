import React from "react";

const footerData = [
    {
        title: "Links",
        items: [{ label: "FAQ", linkId: "faq-section" }, { label: "Contact Us", linkId: "contact-section" }, { label: "Solution", linkId: "solution-section" }],

    },
    {
        title: "Company",
        items: [{ label: "About ZeroRide", linkId: "about-section" }, "Careers", "Partnerships"],
    },
];

const Footer = () => {
    const handleScrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className=" text-white py-16 px-6 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 ">

                {/* Newsletter */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
                    <p className="text-sm text-white mb-4">
                        Sign up to our mailing list and be the first to know about new updates.
                        Don't worry, we hate spam too.
                    </p>
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-1/2 px-4 py-2 rounded-xl bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
                    />
                </div>

                {/* Footer Links */}
                {footerData.map((section, index) => (
                    <div key={index} >
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {section.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleScrollTo(item.linkId)}
                                    className="hover:text-white cursor-pointer transition duration-200"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer bottom */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-white ">
                <p>Created by <span className="text-white font-medium">Mohd Azbar Khan</span></p>
                <p className="mt-1">&copy; {new Date().getFullYear()} ZeroRide. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
