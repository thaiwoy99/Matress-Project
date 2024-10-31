import {FC, useState} from 'react'


interface button {
  type:string,
  id:number
}
const buttons :button[]= [{type:"Royal Foam",id:0},
  {type:"Latex Foam",id:1},
  {type:"Ash Foam",id:2},
  {type:" Foreign Brand",id:3},



]

const Button:FC = () => {
  const colors:string[] =["purple,red,yellow,black"]
  const [ActiveButton,setActiveButton] = useState<null|number>(null)
  const changeColor=(ID:number)=>{
    setActiveButton(ID)
  }
  console.log(ActiveButton)
  return (
    <div className='mt-[200px] w-[90%] mx-auto text-center'>
        <p className='font-bold text-2xl mb-5'>Choose a filter:</p>
        <div className=' flex justify-between flex-wrap w-[80%] border-2 m-auto items-'>
         { buttons.map(({type,id})=>{
          console.log(id)
            return (<button className={`border-2 border-[#f6d00c] py-1 w-[150px] font-bold 
              rounded-lg  mb-4  ${ActiveButton==id?'bg-[colors[id]]':" bg-white"}`} onClick ={()=>{changeColor(id)}}>{type}</button>)
          }) }

        </div>
    </div>
  )
}

export default Button