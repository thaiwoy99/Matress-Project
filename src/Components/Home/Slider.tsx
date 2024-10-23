
import React from 'react'
import Slide1 from "../../assets/Images/slide1.jpg"
import Slide2 from "../../assets/Images/slide2.jpg"
import Slide3 from "../../assets/Images/slide3.jpg"
import Slide4 from "../../assets/Images/slide4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Slider:React.FC = () => {

  return (

    <div className='w-[90%] mx-auto mb-8  mt-[200px]'>
        <Swiper 
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
        
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                autoplay= {{
                    delay: 2500,
                    disableOnInteraction: false
                }}

                className="mySwiper" 
        
        
        >
            <SwiperSlide>

        <div className=' h-[150px] md:h-auto w-full '>
            <img src={Slide1} alt="" className='size-full'/>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-full h-[150px] md:h-auto'>
            <img src={Slide2} alt="" className='size-full'/>

        </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className='w-full h-[150px] md:h-auto'>
            <img src={Slide3} alt="" className='size-full'/>

        </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className='w-full h-[150px] md:h-auto'>
            <img src={Slide4} alt=""  className='size-full'/>

        </div>
        </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Slider
