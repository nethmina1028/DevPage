import React from 'react'
import Membership from '../assets/membership.png';
import National from '../assets/national.png';
import Club from '../assets/club.png';

function community() {
  return (
    <div className='ml-20 mr-20 text-primary '>
        
        <div className='flex flex-col items-center justify-center mt-8 text-center'>
           <p className='text-[39px] font-bold'>Manage your entire community <br/>in a single system</p>
           <p className='mt-3 text-[18px]'>Who is Nextcent suitable for?</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-10 mt-6 lg:flex-row lg:gap-32'>

        <div className="shadow-xl card bg-base-100 w-80">

          <figure className="px-10 pt-10">
             <img src={Membership} alt="logo" className="relative z-10 mb-10 ml-20 top-20" /> 
             <div className="mx-auto rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-md bg-iconbg w-14 h-14 rounded-br-3xl"></div>

          </figure>  {/*absolute top-0 left-0 w-32 h-32 -ml-8 */}

          <div className="items-center text-center card-body">
          <h2 className="text-[26px] font-bold card-title">Membership <br/>Organisations</h2>
          <p className='mb-6 ml-5 mr-5'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
       </div>

        <div className="shadow-xl card bg-base-100 w-80">
          <figure className="px-10 pt-10">
          <img src={National} alt="logo" className="relative z-10 mb-10 ml-20 top-20" />
          <div className="mx-auto rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-md bg-iconbg w-14 h-14 rounded-br-3xl"></div>
          </figure>
          <div className="items-center text-center card-body">
          <h2 className="text-[26px] font-bold card-title">National<br/>Associations</h2>
          <p className='mb-6 ml-5 mr-5'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
       </div>

        <div className="shadow-xl card bg-base-100 w-80">
          <figure className="px-10 pt-10">
          <img src={Club} alt="logo" className="relative z-10 mb-10 ml-20 top-20" />
          <div className="mx-auto rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-md bg-iconbg w-14 h-14 rounded-br-3xl"></div>
          </figure>
          <div className="items-center text-center card-body">
          <h2 className="text-[26px] font-bold card-title">Clubs And<br/> Groups</h2>
          <p className='mb-6 ml-5 mr-5'>Our membership management software provides full automation of membership renewals and payments</p>
         </div>
       </div>

        </div>

    </div>
  )
}

export default community