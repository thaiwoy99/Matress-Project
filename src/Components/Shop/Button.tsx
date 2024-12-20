import {FC, useState} from 'react'
import {prodProp} from  "../../utilities/utility"
interface Props {
setData: React.Dispatch<React.SetStateAction<prodProp[]|[]>>;
data:prodProp[]|[]
displayData:prodProp[]|[]
id:number
}



interface button {
  type:string,
  iD:number
}
const buttons :button[]= [{type:"Royal Foam",iD:1},
  {type:"Latex Foam",iD:2},
  {type:"Ash Foam",iD:3},
  {type:" Foreign Brand",iD:4},



]

const Button:FC<Props> = (props) => {
  
 

  const colors:string[] =['bg-purple-700', 'bg-red-500', 'bg-yellow-600', 'bg-black'];

  
  

  const [ActiveButton,setActiveButton] = useState<null|number>(null)
  

  const showSelected =(ID:number):void=>{
    
    setActiveButton(ID)
   // props.showBrand(ID)
   props.setData(props.displayData.filter((data)=> data.category_id ===ID))



  }
  
  return (
    <div className='mt-[200px] w-[90%] mx-auto text-center '>
        <p className='font-bold text-xl mb-5'>Choose a mattress:</p>
        <div className=' flex justify-center flex-wrap w-[90%]   min-[500px]:w-[73%] gap-3 m-auto md:w-[80%] lg:w-[60%]'>
         { buttons.map(({type,iD})=>{
          
            return (<button key={iD} className={`border-2 border-[#f6d00c] py-1 w-[130px] min-[410px]:w-[150px]  font-bold  hover:bg-yellow-300
              rounded-lg  mb-4  ${ ActiveButton && ActiveButton==iD ?`${colors[iD-1]} text-white `:props.id==iD && !ActiveButton ?`${colors[iD-1]} text-white` :" bg-white"}`} onClick ={()=>{showSelected(iD)}}>{type}</button>)
          }) }

        </div>
    </div>
  )
}

export default Button