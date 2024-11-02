import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Image from "../assets/Images/AboutIMage.avif"

const AboutPage = () => {
  return (
    <main>
      <Nav/>
      <div className='w-[80%] mt-[200px] mx-auto font-[Montserrat] lg:w-[95%] lg:flex  justify-between '>
        <div className='w-full mb-5 lg:w-[45%]' >
          <img src={Image} className='w-full'/>
        </div>

        <div className='lg:w-[45%] lg:mt-7'>
          <h2 className='font-bold text-2xl mb-5'>About Matress Home</h2>
          <div className='font-medium text-base text-gray-500 space-y-5 mb-5'>
          <p className=' mb-4'>Welcome to Mattress Home, your ultimate sleep partner and solution.
             We specialize in providing high-quality new mattresses 
            and offer expert restoration services for your old ones. Our mission 
            is to ensure you get the best sleep possible, tailored to your unique needs.</p>

<p>At Mattress Home, we understand that a good night's sleep is essential for a healthy and 
productive life. That’s why we offer a diverse range of mattresses from top brands such
 as Royal Foam, Latex Foam, Ashfoam, and various foreign brands. Whether you're looking for a 
 new mattress or need to rejuvenate your existing one, we've got you covered.</p>

<p >We are here to solve your sleep needs. Give us a call or 
chat with us today to find the perfect 
mattress that suits you. Experience the difference with Mattress Home, where your comfort 
and satisfaction are our top priorities.</p>
</div>
        </div>

      </div>


      <Footer/>


    </main>
    


    
  )
}

export default AboutPage