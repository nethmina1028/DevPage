import React from 'react'
import Rafiki from '../assets/rafiki.png';

function unlock() {
  return (
    <div className="flex flex-col justify-between gap-20 mx-10 mt-10 mb-10 ml-20 mr-20 lg:flex-row lg:items-center text-primary ">
       
       <div className="flex justify-center mt-10 ">
         <img src={Rafiki} alt="rafiki" className='className="w-full max-w-[400px] lg:max-w-[600px] lg:ml-24'/>
       </div>


        <div className="mt-20">
        <h1 className="text-4xl font-bold leading-normal lg:text-[38px]">
        The unseen of spending three <br/> years at Pixelgrade
        </h1>
       
        <div className="">
        <p className="mt-4 mr-4 lg:mr-44">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p></div>
        
        <div className="flex flex-col gap-3 mt-10 md:flex-row">
          <a href="#" className="items-center inline px-7 py-3 font-medium text-white duration-300 rounded-lg bg-secondary text-[17px]">
          Learn More
          </a>
        </div>
        
      </div>
      
    
      
    </div>
  )
}

export default unlock