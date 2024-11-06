import React from 'react'
import conImage from "../assets/Images/contactImage.png"
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"

const ContactPage = () => {
  return (
    <>
    <Nav/>
    <section className='w-[90%] mx-auto mt-[250px] lg:flex justify-center  lg:mb-10'>
      <div className='w-full relative  lg:w-[46%] mb-10'>
        <img src={conImage} className='w-full rounded-lg lg:size-full'/>
        <h1 className='text-2xl absolute top-3 text-white font-semibold left-10'>Contact US</h1>
        <div className='space-y-5 p-7 bg-white shadow-lg  w-[90%] mx-auto pl-5  rounded-lg absolute bottom-10 left-[50%] translate-x-[-50%] lg:bottom-40 '>
          <div className='flex space-x-4 items-center'>
          <span className='text-purple-600 text-3xl'> < IoCallOutline/></span>
            <span>+233 24 428 1122</span>
            
          </div>
          <div className='flex space-x-4 items-center'>
          <span className='text-purple-600 text-3xl'> < LuMail/></span>
            <span>wconsult@yahoo.com
            </span>
            
          </div>
 
          <div className='flex space-x-4 items-center'>
          <span className='text-purple-600 text-3xl'>  < IoLocationOutline/></span>
            <span>Kumasi, Ghana </span>
          </div>
          

        </div>
      </div>
      
      <div className='bg-white shadow-2xl w-full py-7 mb-8 rounded-lg lg:w-[50%] '>
      <h2 className='text-yellow-400  text-3xl md:text-4xl font-semibold mb-11 w-[90%] lg:mb-5  mx-auto text-left'>Send Us A Message </h2>

         <form action="" className='w-[90%] mx-auto'>
        <input type="text"  placeholder='Name' className=' mb-10  lg:mb-5  focus:border-2 focus:border-blue-500 focus:outline-none border pl-4  border-gray-200 w-full rounded-full py-2   text-lg text-gray-600 placeholder:text-gray-400' />

        <input type="text"  placeholder='Email' className=' mb-10  lg:mb-5  focus:border-2 focus:border-blue-500 focus:outline-none border pl-4  border-gray-200 w-full rounded-full py-2   text-lg text-gray-600 placeholder:text-gray-400' />
          <input type="text" placeholder='Phone' className=' mb-10 lg:mb-5  focus:border-2 focus:border-blue-500 focus:outline-none border pl-4  border-gray-200 w-full rounded-full py-2   text-lg text-gray-600 placeholder:text-gray-400' />

          <p className='text-lg font-normal text-gray-500 mb-2'>Preferred method of communication </p>
          
          <input type="radio" id="email" name="contact" className=''/>
           <label htmlFor="email" className='text-lg text-gray-500 pl-2 pr-8'>Email</label>
  <input type="radio" id="Phone" name="contact" />
   <label htmlFor="Phone"  className='text-lg text-gray-500 pl-2'>Phone</label>

   <textarea name="" id="" className='  focus:outline-none border h-[30vh]  lg:h-[20vh] border-gray-200 w-full 
   rounded-lg py-2 text-lg text-gray-600 mt-9  mb-5'></textarea>
   <button className='w-full py-3 rounded-full bg-yellow-300 hover:bg-yellow-400 text-white text-[18px] font-semibold transition-all duration-700 '>Send</button>

          
          


        
                
        </form>
        

      </div>
    </section>

   <Footer/>  
    </>
    
  )
}

export default ContactPage
