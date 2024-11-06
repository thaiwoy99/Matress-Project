
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

import { IoMdCloudUpload } from "react-icons/io";
import { RiToolsFill } from "react-icons/ri";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import Image from "../assets/Images/ServicePage.avif"

import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {

  const navigate = useNavigate()

  return (
    <>
    <Nav/>
    <section  className='w-[90%] mx-auto mt-[200px] lg:flex justify-between'>
      <div className='w-full lg:w-[50%] '>
        <h3 className='text-2xl font-semibold leading-7 text-yellow-300 text-left mb-3'>Sleep Better</h3>
        <p className='class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5'>Our Services | Matress Home</p>
        <p className='text-lg leading-8 text-gray-600 mb-6'>At Mattress Home, we are dedicated to providing top-notch services that cater to your sleep needs.
           Whether you need a new mattress or wish to restore your old one,
            we have the perfect solution for you.</p>

            <div className='space-y-4'>
              <div className='flex space-x-4'>
                <span className='text-yellow-300 text-2xl'><HiMiniSquare3Stack3D/></span>
                <p className='text-[18px] font-normal text-gray-600'><span className='font-semibold pr-2 text-gray-900'> New Mattresses  </span>Choose from our wide range of high-quality mattresses from popular 
                   brands like Royal Foam, Latex Foam, Ashfoam, and other foreign brands.
                </p>

              </div>
              <div className='flex space-x-4'>
                <span className='text-yellow-300 text-2xl'><IoMdCloudUpload/></span>
                <p className='text-[18px] font-normal text-gray-600'><span className='font-semibold pr-2 text-gray-900'> RestorationServices  </span> ServicesGive your old mattress 
                a new life with our professional restoration services, ensuring comfort and durability
                </p>

              </div>

              <div className='flex space-x-4 '>
                <span className='text-yellow-300 text-2xl'>< RiToolsFill/></span>
                <p className='text-[18px] font-normal text-gray-600  mb-6'><span className='font-semibold pr-2 text-gray-900'>  Customer Support </span>  We are here to solve your sleep needs. 
                Give us a call or chat with us for personalized recommendations and assistance
                </p>
                </div>

               </div>
               <div className='flex space-x-6 mb-8'>
                <button className='text-base bg-yellow-400 py-2 px-3 text-white rounded-md hover:bg-yellow-500' onClick={()=>{navigate('/contact')}}>Contact Us</button>
                <button className='flex s items-center text-sm font-semibold text-gray-700'><span className=' '>Learn More </span> <span className='pt-1'>< IoArrowForwardOutline/>  </span></button>
               </div>


      </div>


      <div className='w-full mb-10 lg:w-[45%]'>
        <img src ={Image} alt=""  className='rounded-lg'/>
      </div>
      
    </section>
    <Footer/>
    </>
  )
}

export default ServicePage