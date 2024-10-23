import React from 'react'
import {prodProp} from  "../../utilities/utility"




const Product:React.FC <prodProp> = (props) => {
     const imgUrl:string =` ${import.meta.env.VITE_APP_API_URL}/${props.pictures[0].image_path}`
     console.log(imgUrl)
 
  return (
    <div className='border-[1px] border-red-600 w-[90%] mx-auto shadow-2xl md:w-[23%] mb-4 '>
        <div className='w-full h-[250px] mb-3'>
            <img src={imgUrl} alt=""  className='w-full h-full'/>
        </div>
        <div className='pl-5 flex flex-col'>
        <p className='text-xl md:text-[12px] font-medium mb-3 lg:text-xl'>{props.name}</p>
        <p className='text-xl md:text-base font-semibold mb-3  '>{props.prices[0].price}GH₵</p>
        
        </div>

    </div>
  )
}

export default Product