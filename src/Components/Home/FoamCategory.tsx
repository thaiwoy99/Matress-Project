import React from 'react'
import Ashfoam from "../../assets/Images/ashfoam.jpg"
import latexfoam from "../../assets/Images/latexfoam.jpg"
import RoyalFoam from "../../assets/Images/royalfoam.jpg"
import OtherBrand from "../../assets/Images/sleepscience.jpg"
import { DiVim } from 'react-icons/di'


const Images = [
    { Img: Ashfoam,
      content:" Ash foam mattresses for premium comfort",
      type:" Ash Foam"

    },
    { Img: latexfoam,
      content:" Latex foam mattresses for your comfort",
      type:" Latex Foam"

    },
    { Img: RoyalFoam,
    content:" Royal foam mattresses for luxurious sleep",
    type:" Royal Foam"

  },
  { Img: OtherBrand,
    content:" Other brand mattresses for various needs",
    type:" Other Brand"

  },
    
    
]




const FoamCategory = () => {
  return (
    <div>
        <div className=' md:flex md:w-[90%] flex-wrap mx-auto  md:justify-between '>
            {
                Images.map(({Img,content,type})=>{
                    return (
                        <div className='w-[80%] mx-auto bg-white rounded-[15px] text-white pb-8 shadow-2xl mb-5  md:flex   md:w-[45%] md:mx-0  md:pb-0'>
                            <div className=' mb-4 w-full md:w-[50%] h-full  md:mb-0'>
                                <img src={Img} className='rounded-t-[10px] size-full md:rounded-tr-none'/>
                                </div>
                                <div className='px-5 text-black md:mt-10 md:mb-8 '>
                                    <p className='text-xl font-medium mb-3' >{type}</p>
                                    <p className=' mb-11  md:mb-13 lg:mb-16'>{content}</p>

                                    <button className='border-black  border-[1px] px-7 py-3 rounded-lg hover:bg-gray-600 hover:text-white text-lg '>Explore brand</button>
                                    
                                </div>


                        </div>
            


                    )
                })
            }

        </div>



    </div>
  )
}

export default FoamCategory
