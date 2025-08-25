import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const handleAdminClick = () => {
    window.open('https://mediconnect-admin-p49fsjja5-nilesh-goyals-projects.vercel.app', '_blank');
  };

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.medu} alt="MediConnect Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            At <strong>MediConnect</strong>, we believe healthcare should be simple, accessible, and stress-free.  
            Our platform connects you with top doctors, streamlines appointment booking, and ensures timely care for you and your loved ones.  
            Because your health matters, we bring technology and compassion together for a better tomorrow.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            <li 
              className='cursor-pointer hover:text-primary transition-colors duration-200'
              onClick={handleAdminClick}
            >
              🏥 Admin Panel
            </li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>mediconnect@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; 2025 <strong>MediConnect</strong> | Your Health, Our Priority. All Rights Reserved.
        </p>
      </div>

    </div>
  );
}

export default Footer;
