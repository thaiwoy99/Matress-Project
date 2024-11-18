import { useState,FC ,useEffect} from "react"
import {prodProp,dataObj} from  "../../utilities/utility"
import axiosInstance from "../../Axios/axiosInstance"
import Product from "./Product"
import Button from "./Button"



const Products:FC = () => {
    const [data,setData] = useState<prodProp[]|[]>([])
    
    const[displayData,setDisplay]= useState<prodProp[]|[]>  ([])
    
    const [currentPage, setCurrentPage] = useState<number>(0);
    const itemsPerPage:number = 8;
    
  


    useEffect(()=>{
        const fetchInfo = async()=>{
            try{
                const response = await axiosInstance.get<dataObj>("/products")
              
              
             //  GET /products/search/{query}

  
                
                setData(response.data.products)
                setDisplay (response.data.products)

            }
            catch(err){
                console.log(err)
 
            }


        }
        fetchInfo()

    }, [])

    
    

    const startIndex:number = currentPage * itemsPerPage;
    const currentItems:prodProp[]|[] = data?.slice(startIndex, startIndex + itemsPerPage);
  
    const totalPages:number = Math.ceil(data?.length / itemsPerPage);
  
    const handleNextPage = ():void => {
      if ((currentPage + 1) * itemsPerPage < data.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = ():void => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handlePageClick = (pageIndex:number):void => {
      setCurrentPage(pageIndex);
    };
  




  return (
    <div className=" border-black">
        <Button setData={setData} data={data} displayData={displayData}/>
         <div className=" w-full md:flex md:flex-wrap  justify-around">
    {
        currentItems?.map((data)=>{
            return(
                
                    <Product {...data} key ={data.id} />

                
            )
        })

    }
    
    </div>
    <div className=" flex justify-center">
    <div className="mt-4 flex gap-2 mb-10 ">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="px-3 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        {/* Page buttons */}
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageClick(pageIndex)}
            className={`px-3 py-2 rounded ${
              currentPage === pageIndex ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * itemsPerPage >= data.length}
          className="px-3 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

      </div>

    </div>
  )
}

export default Products