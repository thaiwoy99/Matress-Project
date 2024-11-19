import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png"
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


const Nav:React.FC= () => {


  const[closeMobile,setClosembile] =useState<boolean>(true)
  return (

    
    
    <nav className='bg-[#f40000] font-[Montserrat] fixed w-full z-30 top-0'>

      {/*Desktop*/} 
        <div className=' w-[95%] justify-between text-white pl-8 py-2  items-center pr-10 hidden md:flex'>

       {/*Image logo*/} 
        <div className='w-[130px] bg-[#f40000]'>
            <img src={Logo} alt="" className='size-full ' />
        </div>
        
        {/*link and Input*/}
        <div className='  w-[60%] '>
            
            {/*Links*/} 
            <div className='w-[60%] flex justify-between text-[1.2rem] mx-auto  mt-10 font-semibold  '>
            <Link to ='/' className={`${location.pathname === "/" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 px-3 rounded-lg`}>Home</Link>
            <Link to ='/shop' className={`${location.pathname === "/shop" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 px-3 rounded-lg`}>Shop</Link>
            <Link to ='/service' className={`${location.pathname === "/service" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 px-3 rounded-lg`}>Service</Link>
            <Link to ='/about' className={`${location.pathname === "/about" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 px-3 rounded-lg`}>About</Link>
            <Link to ='/contact' className={`${location.pathname === "/contact" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 px-3 rounded-lg`}>Contact</Link>
                

            </div>
          


            
       </div> 
         {/*Call logo*/}
         <div>
            <span className='text-[40px]'><FiPhoneCall /></span>
         </div>

         </div>
         

         {/*Mobile*/} 
         <div className='text-white py-3 w-[90%] mx-auto md:hidden'>


            <div className='flex  justify-between items-center mb-2'>

          {/*hamburger and closemenu*/} 
          <div className='text-[1.8rem]'>
              { closeMobile?       <span className="text-3xl ">
         <GiHamburgerMenu onClick={()=>{setClosembile(false)}}/>
        </span>:
        <span  className="text-3xl ">
          <MdClose onClick={()=>{setClosembile(true)}}/>
        </span>}

          </div>

          {/*Logo*/}
          <div className='w-[130px]'>
            <img src={Logo} alt="" className='size-full' />
        </div>

        
         {/*Call logo*/}
         <div>
            <span className='text-[40px]'><FiPhoneCall /></span>
         </div>



          </div>




             {/*Links*/} 
              
             
             <div className ={`text-[1.2rem] mx-auto flex flex-col space-y-4 font-semibold ${closeMobile ? "hidden " :" block"}`}>
                
           <Link to ='/' className={`${location.pathname === "/" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 block rounded-lg`}>Home</Link>
            <Link to ='/shop' className={`${location.pathname === "/shop" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 block rounded-lg`}>Shop</Link>
            <Link to ='/service' className={`${location.pathname === "/service" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 block rounded-lg`}>Service</Link>
            <Link to ='/about' className={`${location.pathname === "/about" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 block rounded-lg`}>About</Link>
            <Link to ='/contact' className={`${location.pathname === "/contact" ? " text-[#f6d00c] border-b" : "text-white "} hover:text-[#f6d00c] hover:border-b border-[#f6d00c] mb-1 pb-2 block rounded-lg`}>Contact</Link>
   

              </div> 
          


          

         </div>
           


    </nav>
  )
}

export default Nav