import React, { useState,useEffect } from 'react'
import {Mattress} from  "../../utilities/utility"
import { useNavigate } from "react-router-dom";
import { IoArrowUndo } from "react-icons/io5";

import { GoStarFill } from "react-icons/go";





interface dataobj {
    data:Mattress|undefined

}

const Product:React.FC<dataobj> = ({data}) => {
  const Navigate = useNavigate()




    const colors:string[] =['bg-purple-700', 'bg-red-500', 'bg-yellow-600', 'bg-black'];

    const Brand:string= data?.category_id==1? "Royal foam": data?.category_id==2? "Latex foam": data?.category_id==3 ? 'AshFoam':data?.category_id==4 ?"ForeignBrand" : ""

const [displayImage, setDisplayImage] = useState<string>("");

const maxRating = 5;
const [displayPrice,setDisplayPrice] = useState<string>('')
const [activeButton ,setActiveButton] = useState(0)

const changeActiveButton = (id:number,price:string):void=>{
  setActiveButton(id)
  setDisplayPrice(price)
  
}
const changeActiveImage =(img:string)=>{
  setDisplayImage(img)
}




useEffect(() => {
  if (data?.pictures?.[0]?.image_path) {
    setDisplayImage(`${import.meta.env.VITE_APP_API_URL}/${data.pictures[0].image_path}`);
    console.log(displayImage)
  }

  
  const price= data?.sizes.map(({pivot})=> pivot.price)

  console.log(price)
  
  if(price){
    setDisplayPrice(price[0])
  }
}, [data])




    



 
  return (
<section className='mt-[230px] bg-[honeydew] py-8 mb-10'>
  <button className='bg-yellow-500 hover:bg-yellow-400 px-8 py-2 rounded-lg flex justify-center items-center space-x-2 ml-7 'onClick={()=>{Navigate('/shop')}}><IoArrowUndo className='text-2xl text-purple-600' /><span>Back</span></button>


    <div className=' bg-white shadow-2xl w-[90%] mx-auto py-7 lg:flex mt-8 lg:mb-11'>
        <div className='lg:w-[55%] '>
            <div className='w-[80%] bg-white h-[50vh] md:h-[100vh] md:w-[95%] flex justify-center items-center shadow-2xl rounded-2xl  mx-auto mb-6' >
                <img src={displayImage}  className=' w-[80%] md:w-[90%] h-auto max-h-[90%] object-contain md:object-cover'  />
                </div>
                <div className=" w-[85%] mx-auto flex justify-center space-x-3 mb-5">
                {data?.pictures.map(({image_path},index)=>{
                  const Img= `${import.meta.env.VITE_APP_API_URL}/${image_path}`
                  console.log(Img)
                  
               
                return(
                <div key={index} onClick={()=>{changeActiveImage(Img)}} className='w-[30%] h-[100px] bg-white shadow-lg flex justify-center items-center rounded-lg border border-yellow-400'>

                  <img src={Img} className='w-[70%] h-[80px]'  />

                </div>

                )

              })}

                </div>
            
        </div>


        <div className='w-[90%] mx-auto lg:w-[40%]  lg:px-6 lg:space-y-7'>
            <p className='font-extrabold text-2xl mb-8 text-gray-950 lg:mb-4 '>{data?.name}</p>
            <div className='flex flex-col space-y-4 items-start mb-5 md:flex-row md:justify-between md:items-center lg:w-full '>
                <div className='flex space-x-2 mb-8 lg:mb-0 '>
                {[...Array(maxRating)].map((_, index) => (
    <span key={index}           className={ index < (data?.stars ?? 0) ? "text-blue-800": "text-gray-300"}>
      <GoStarFill className='text-xl'/>
    </span>
  ))}
                </div>
                <span className={`${colors[data?.category_id ? data.category_id - 1 : 0]}  ${data?.category_id==4 ?'text-white' :"text-black"} py-2 px-8 rounded-md`}>{Brand}</span>
            

            </div>

            {/*sizes with price */}
            <div className=''>
              <p  className='text-3xl font-semibold text-gray-950 mb-5 lg:mb-8'> GH₵  {displayPrice}</p>
              <p className='text-xl font-semibold text-gray-950 mb-5 '>Select Size:</p>
              <div className='mb-6 w-full  lg:mb-8 flex justify-between lg:block lg:space-x-3'>
              {data?.sizes.map(({name,pivot},index)=>{
               // console.log(pivot.price)
                return(
                  <button className={ ` text-gray-700 ${activeButton===index?"bg-yellow-600 hover:bg-yellow-400" : " bg-gray-300 hover:bg-gray-400 "}  
                   py-2 px-3 md:px-4 rounded-full font-bold mr-2 `} key ={index} onClick={()=>{changeActiveButton(index,pivot.price)}}>
                    {name}
                  </button>

                )

              })}
              </div>
              


            </div>
            <div className=''>
              <button className='bg-yellow-600 py-2 px-2  rounded-md  w-full lg:block'> Buy now</button>
              <p className = 'text-lg font-semibold text-gray-800 mt-4 mb-4 lg:text-2xl lg:font-bold lg:mt-8'>About this product</p>
              <p className='text-gray-500 text-base lg:text-lg font-normal'>Made with a combination of soft and firm TEMPUR® Material for the perfect medium feel, our TEMPUR-Cloud® Medium features superior 
                conforming comfort and motion isolation so you can sleep soundly and get more restorative rest.</p>
            </div>
        </div>
    </div>

</section>
  )
}

export default Product