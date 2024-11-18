
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { useParams } from 'react-router-dom';
import axiosInstance from "../Axios/axiosInstance"
import { useState ,useEffect} from 'react';
import {MatressObj,Mattress} from  "../utilities/utility"
import Product from '../Components/Matress/Product';
import { ClipLoader } from "react-spinners";






const MatressPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);


      const { id } = useParams();
      const [data,setData] = useState<Mattress|undefined>()
      
  
  
      useEffect(()=>{
          const fetchInfo = async()=>{
              try{
                setIsLoading(true); 

                  const response = await axiosInstance.get<MatressObj>(`/products/${id}`) 
                  console.log(response.data.product)
                  setData(response.data.product)
  
              }
              catch(err){
                  
   
              }
              finally {
                setIsLoading(false); 
              }
  
  
          }
          fetchInfo()
  
      }, [id])

  return (
    <>
    <Nav/>
    <section>
    {isLoading ? (
        
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="red" size={100} />
        </div>
      ) :
     

  ( <Product  data= {data} />) }

      


    </section>
    <Footer/>
    </>
  )
}

export default MatressPage