
import { useEffect, useState,FC } from "react"
import Product from "./Product"
import axiosInstance from "../../Axios/axiosInstance"
import {prodProp,dataObj} from  "../../utilities/utility"




const Products:FC = () => {
    const [data,setData] = useState<prodProp[]|null>(null)
    const [error,setError] =useState<string|null>(null)


    useEffect(()=>{
        const fetchInfo = async()=>{
            try{
                const response = await axiosInstance.get<dataObj>("/products/limit/8") 
                console.log(response.data.products)
                setData(response.data.products)

            }
            catch(err){
                console.log(err)

            }


        }
        fetchInfo()

    }, [])


  return (
    <section className="w-[90%] mx-auto  bg-white shadow-lg font-[Montserrat] py-7">
        <div className=" w-[80%] md:w-[40%] mx-auto ">
    <h2 className="text-center text-3xl md:text-2xl font-semibold text-gray-900 mb-6">Our featured products</h2>
    <p className="text-gray-600  text-xl md:text-[17px] text-center mb-5">Take a look at our trending products. Browse through and see what other people are buying</p>
    </div>

    <div className=" w-full md:flex md:flex-wrap  justify-around">
    {
        data?.map((data)=>{
            return(
                
                    <Product {...data} key ={data.id} />

                
            )
        })

    }
    
    </div>

    </section>
  )
}

export default Products