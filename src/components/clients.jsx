import React from 'react'
import Logo from '../assets/logo/logo.png';
import Logo2 from '../assets/logo/logo2.png';
import Logo3 from '../assets/logo/logo3.png';
import Logo4 from '../assets/logo/logo4.png';
import Logo5 from '../assets/logo/logo5.png';
import Logo6 from '../assets/logo/logo6.png';
import Logo7 from '../assets/logo/logo7.png';

function clients() {
  return (
    <div className='ml-20 mr-20 text-primary'>
        <div className='flex flex-col items-center justify-center mt-8 text-center'>
           <p className='text-[39px] font-bold'>Our Clients</p>
           <p className='mt-3 text-[18px]'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex flex-wrap justify-center w-full gap-4 my-10 sm:gap-6 md:gap-10 lg:gap-20 xl:gap-40'>
          <img src={Logo} alt="logo" />
          <img src={Logo2} alt="logo2" />
          <img src={Logo3} alt="logo3"  />
          <img src={Logo4} alt="logo4"  />
          <img src={Logo5} alt="logo5"  />
          <img src={Logo6} alt="logo6"  />
          <img src={Logo7} alt="logo7"  />
       </div>

    </div>
  )
}

export default clients