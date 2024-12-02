
const footer = () => {
  return (
    <div className="p-10 mt-5 text-white bg-gray-800">
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-5 " >
                    <img src="src/assets/Icon.png" alt="" /><h1 className="flex flex-row pb-4 text-2xl">Nexcent   </h1>
                    <p>
                   Copyright © 2020 Nexcent ltd.<br></br> All rights reserved</p>
                   <div className="flex flex-row gap-4 p-6">
                    <img src="src/assets/inster.png" alt="" />
                    <img src="src/assets/global.png" alt="" />
                    <img src="src/assets/twitter.png" alt="" />
                    <img src="src/assets/youtube.png" alt="" />
                   </div>
                </div>
                <div className="mb-5 ">
                    <h4 className="pb-4 text-2xl">Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>

                    </ul>
                    
                    
                </div>
                <div className="mb-5">
                    <h4 className="pb-4 text-2xl">Support</h4>
                    <ul>
                        <li>Help center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>

                    </ul>
                    
                    
                </div>
                <div className="mb-5">
                    <h4>Stay up to date</h4><br></br>
                    <form className="flex px-2 py-1 font-normal border-1 bg-slate-50 rounded-2xl ">
                        
                        <input type="text" name="" id=""  placeholder="Your email address " >
                        
                        </input>
                        <div className="ml-10 bg-white ">
                        <img src="src/assets/send.png" alt="" /></div>
                    </form>
                    
                </div>
                
            </div>
            
        </div>

    </div>

   
    
  )
}

export default footer