import React from 'react';
import CustomBtn from './CustomBtn';

const Heading = ({ title, subTitle, buttonText, icon, onClick, className }) => {
  return (
    <div className={`max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 ${className}`}>
      <h2 className='text-3xl md:text-5xl font-bold leading-snug text-[#444444]'>
        {title}
      </h2>
      <p className='text-base md:text-xl font-semibold text-[#555555]'>{subTitle}</p>
      {buttonText && (
        <CustomBtn btnText={buttonText} icon={icon} onClick={onClick} />
      )}
    </div>
  );
};
export default Heading;
