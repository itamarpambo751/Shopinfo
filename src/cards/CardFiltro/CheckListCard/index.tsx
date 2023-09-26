
import React from 'react'

interface CheckListCardProps{
  item: string
}

export const CheckListCard:React.FC<CheckListCardProps> =(
  {item}:CheckListCardProps
)=>{
    return(
        <div className='w-[100%] p-2  mt-[5px] flex items-center'>
        <div className='border-[2px] border-[red] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
        <input className='w-[100%] bg-[#111]' type='checkbox'/>
        </div>
        <p className='ml-[3px]'>{item}</p>
      </div>
    )
}