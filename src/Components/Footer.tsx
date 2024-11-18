
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
  <footer className='text-white'>


    <div className='bg-[#f40000] font-[Montserrat] pb-7'>


      <div className='w-[60%] mx-auto text-left space-y-7 md:flex md:w-[90%] justify-between items-start md:space-y-0'>
      

   
   
   <div className='md:w-[30%]'>
   <p className='text-[20px] font-medium mb-6 border-b-[1px] border-b-white py-7'>Quick Links</p>

   <div className='flex flex-col'>
   
    <Link to ='/shop' className='hover:text-[#f6d00c]  mb-1 pb-2 px-3 rounded-lg'>View products</Link>
    
    <Link to ='/about' className='hover:text-[#f6d00c]  mb-1 pb-2 px-3 rounded-lg'>About Us</Link>
    <Link to ='/service' className='hover:text-[#f6d00c]  mb-1 pb-2 px-3 rounded-lg'>Service</Link>
    <Link to ='/contact'className='hover:text-[#f6d00c]  mb-1 pb-2 px-3 rounded-lg'>Contact Us</Link>
    </div> 
    </div>

    <div className='md:w-[30%]'>
      <p className='text-[20px] font-medium mb-6 border-b-[1px] border-b-white py-7'>Follow Mattress Home</p>
      <div className='flex space-x-6'>
      <span className='text-3xl'><FaFacebook /></span>
      <span className='text-3xl'><  FiInstagram /></span>
      <span className='text-3xl'><FaLinkedin /></span>
      <span className='text-3xl'><FaTwitter /></span>
      </div>
      
    </div>    

    <div className='md:w-[30%]'>
      <p className='text-xl font-medium mb-6 border-b-[1px] border-b-white py-7'>About Us</p>
      <p className='text-[14px]'>Mattress Home is dedicated to providing quality and affordable mattresses for your best rest. 
      Our mission is to ensure that everyone can enjoy a good night's sleep with our wide range of products.</p>
      

    </div>    

   

    </div>
    </div>

    <div className='bg-gray-700 border-t-2 border-t-white px-2 py-4'>
      <p className='w-[60%] text-center mx-auto text-[1rem]'>
        <span><FaRegCopyright className='inline mr-2' /></span>
        <span>2024 MATTRESS HOME Developed By</span>
        <span className='text-blue-400'> ABESIN TAIWO MUSA</span>
        
      </p>
    </div>
    </footer>
  )
}

export default Footer