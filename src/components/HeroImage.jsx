import React from 'react';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        src='/Photo Mathis.PNG' 
        alt='Mathis' 
        className='rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg'
      />
    </div>
  );
};

export default HeroImage;