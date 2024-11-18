
import {prodProp} from  "../../utilities/utility"
import { useNavigate } from 'react-router-dom';


const Product:React.FC <prodProp> = (props) => {
  const navigate = useNavigate()

  const handleNavigate = (id:number) => {
    navigate(`/matress/${id}`);
  }

  
  const Brand:string= props.category_id==1? "Royal foam": props.category_id==2? "Latex foam": props.category_id==3 ? 'AshFoam':props.category_id==4 ?"ForeignBrand" : ""
   const Price:string=props.prices[0].price < props.prices[1].price ? ` GH₵${props.prices[0].price} - GH₵${props.prices[1].price}`: ` GH₵${props.prices[1].price} - GH₵${props.prices[0].price}`
  const colors:string[] =['bg-purple-700', 'bg-red-500', 'bg-yellow-600', 'bg-black'];



  // Limit description length for preview
  const previewLength:number = 100;
  const preview = props.description.length > previewLength 
    ? props.description.slice(0, previewLength) + "..." 
    : props.description;

  


  

    const imgUrl:string =` ${import.meta.env.VITE_APP_API_URL}/${props.pictures[0].image_path}`
     
 
  return (
    <div  onClick={()=>{handleNavigate(props.id)}} className=' w-[85%]  mx-auto  md:w-[40%] lg:w-[23%]  mb-8 shadow-2xl rounded-xl md:h-[110vh] relative transform transition-transform duration-300 hover:scale-105 '>
        <div className='w-full h-[250px] mb-3 ' >
            <img src={imgUrl} alt=""  className='w-full h-full rounded-t-xl'/>
        </div>
        <div className='pl-5 flex flex-col'>
        <p className='text-[18px] md:text-base font-medium mb-3 lg:text-xl text-left w-[95%] mx-auto md:w-auto'>{props.name}</p>
        <p className='text-xl md:text-base font-semibold mb-3 text-red-500 '>{Price}</p>
        <p className="text-gray-700 text-[17px] mb-6 text-left  pr-3">{preview}</p>
        
        </div>
        <div className="pl-5">
        <button onClick={()=>{handleNavigate(props.id)}} className="bg-gray-700 px-4 py-2 text-white rounded-md mb-7
         hover:bg-gray-800 md:absolute bottom-0 ">View Products</button>
        </div>
        <div className={`${colors[props.category_id-1]} text-white inline-block px-1 py-1 rounded-md absolute top-0 `} >
          <p>{Brand}</p>
        </div>
    </div>
  )

}

export default Product