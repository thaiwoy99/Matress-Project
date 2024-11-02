import {FC, useState} from 'react'
import {prodProp} from  "../../utilities/utility"
interface Props {
setData: React.Dispatch<React.SetStateAction<prodProp[]|[]>>;
data:prodProp[]|[]
displayData:prodProp[]|[]
}



interface button {
  type:string,
  id:number
}
const buttons :button[]= [{type:"Royal Foam",id:1},
  {type:"Latex Foam",id:2},
  {type:"Ash Foam",id:3},
  {type:" Foreign Brand",id:4},



]

const Button:FC<Props> = (props) => {
  console.log(props.displayData)
 

  const colors:string[] =['bg-purple-700', 'bg-red-500', 'bg-yellow-600', 'bg-black'];
  

  const [ActiveButton,setActiveButton] = useState<null|number>(null)
  

  const showSelected =(ID:number):void=>{
    setActiveButton(ID)
   // props.showBrand(ID)
   props.setData(props.displayData.filter((data)=> data.category_id ===ID))



  }
  console.log(ActiveButton)
  return (
    <div className='mt-[200px] w-[90%] mx-auto text-center'>
        <p className='font-bold text-2xl mb-5'>Choose a filter:</p>
        <div className=' flex justify-center flex-wrap w-[90%]  min-[500px]:w-[73%] gap-3 m-auto md:w-[80%] lg:w-[60%]'>
         { buttons.map(({type,id})=>{
          
            return (<button key={id} className={`border-2 border-[#f6d00c] py-1 w-[150px] font-bold 
              rounded-lg  mb-4  ${ ActiveButton==id ? `${colors[id-1]} text-white `: " bg-white"}`} onClick ={()=>{showSelected(id)}}>{type}</button>)
          }) }

        </div>
    </div>
  )
}

export default Button