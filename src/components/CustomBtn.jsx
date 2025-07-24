import React from 'react';


const CustomBtn = ({ btnText, icon, onClick }) => {
    return (
        <div>
            <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl bg-[#56C596]  hover:bg-[#FF6B35] transform transition duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg' onClick={onClick}>

                {btnText}
                {icon}
            </button>
        </div>
    )
}

export default CustomBtn