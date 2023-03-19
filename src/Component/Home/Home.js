import React from 'react';
import bg from '../../img/bg.jpg'
import Button from '../Button/Button';

const Home = () => {
    return (
        <div className='h-screen w-full container mx-auto grid sm:grid-cols-1 sm:py-4 sm:space-y-4 md:grid-cols-2 items-center'>
           <div>
            <h1  className='text-[14px] text-[red]'>Sale up to 70% off</h1>
             <h1 className='text-[20px] md:text-[50px] font-bold'>New Collection For Fall</h1>
             <h3 className='text-[14px] md:text-[17px]'>Discover all the new arrivals of ready-to-wear collection.</h3>
             <Button style='bg-[#3ea2ea]'>Shop Now</Button>
           </div>
           <div className='md:w-full'><img src={bg}/></div>
        </div>
    );
};

export default Home;