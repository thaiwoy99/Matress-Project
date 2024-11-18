import React, { useState } from 'react'
import { Link,useLocation } from "react-router-dom";
import Logo from "../assets/Images/Mattress.jpg"
import { IoSearchSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


const Nav:React.FC= () => {


  const[closeMobile,setClosembile] =useState<boolean>(true)
  return (

    
    
    <nav className='bg-[#f40000] font-[Montserrat] fixed w-full z-30 top-0'>

      {/*Desktop*/} 
        <div className=' w-[95%] justify-between text-white pl-8 py-6 items-center pr-10 hidden md:flex'>

       {/*Image logo*/} 
        <div className='w-[130px]'>
            <img src={Logo} alt="" className='size-full' />
        </div>
        
        {/*link and Input*/}
        <div className='  w-[60%] '>
            {/*Input*/} 
            <form className='w-[350px] relative mx-auto mb-5'>
                <input type="text"  placeholder='Search'  className='w-full py-2 border-2 text-black border-gray-300 bg-white  focus:outline-none rounded-lg pl-3 focus:border-[blue] focus:border-[3px]'/>
                <button className='text-[30px] text-black absolute right-4 top-2'><IoSearchSharp /></button>
                

            </form>
            {/*Links*/} 
            <div className='w-[60%] flex justify-between text-[1.2rem] mx-auto  font-semibold  '>
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

          <form className={`w-[350px] relative mx-auto mb-5 ${closeMobile ? "block " :" hidden"}`}>
                <input type="text"  placeholder='Search'  className='w-full py-2 border-2 border-gray-300 bg-white text-black focus:outline-none rounded-lg pl-3 focus:border-[blue] focus:border-[3px]'/>
                <button className='text-[30px] text-black absolute right-4 top-2'><IoSearchSharp /></button>

            </form>



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