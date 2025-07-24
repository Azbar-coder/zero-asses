import React from 'react';
import { IoMdContacts } from "react-icons/io";
import Heading from '../components/Heading';

const ContactUs = () => {
    return (
        <>

            <Heading
                title="Need help?"
                subTitle={`We're here to support you with any issue you face on ZeroRide. Whether it's booking, ride-sharing, or technical glitches — just reach out. We'll respond swiftly!`}
                buttonText="Enquire Now"
                icon={<IoMdContacts />}
                onClick={() => {
                    window.open("https://wa.me/917048937609", "_blank");
                }}
            />

        </>
    )
}

export default ContactUs