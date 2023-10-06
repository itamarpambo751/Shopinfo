

import React from 'react';
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";
import {VscHeart} from 'react-icons/vsc'

interface SuperCardProps {
    name: string
    price: string
    id:string
    desconto:string
    imgLink:string
  }

export const SuperCard: React.FC<SuperCardProps> = ({
    name,price,id,desconto,imgLink
  }: SuperCardProps) => {
  return (
<PublicityCard.Root id={id}  resize>
  <div className="flex justify-between items-center p-1">
             <PublicityLabel.Root>
               <PublicityLabel.Content small={true} bigText={desconto}/>
             </PublicityLabel.Root>
             <div className='flex items-center justify-center'>
              <p className='text-[20px]'><VscHeart/></p>
             </div>
</div>
           <div className='w-[80%] flex items-center justify-center relative'>
             <PublicityCard.Image url={ imgLink }/>
             <div className='absolute right-[50px] top-[67%] text-[11px]'>
              <div className='px-1 w-[80%] bg-black uppercase'>
                <p className=''>RyZen 5 4500</p></div>
              <div className=' px-1 w-[80%] bg-black uppercase font-bold mt-[5px] text-[var(--green-color)]'>
                <p >geforce rtx 3050</p></div>
             </div>
           </div>
           <div className="w-[100%] mt-[3px]">
                <PublicityCard.Content.Product name={name} subtring={52} noBold/>
            </div>
           
<div className='flex mt-[10px] h-[30px] items-center text-[12px]'>
				<div className='flex items-center'>
					<img className='w-[10px] h-[10px]' src='../assets/icons/memory.png'/><p className='uppercase'>16GB</p>
				</div>
        <div className='ml-[10px] flex items-center'>
					<img className='w-[10px] h-[10px]' src='../assets/icons/ssd.png'/>
          <p className='uppercase'>HD</p>
        </div>
        
</div>

  <PublicityCard.Content.Root>
             <PublicityCard.Content.Price text10x_in_price={true} resize={true} price={price} color/>
           </PublicityCard.Content.Root>
          <div className="w-[100%] flex items-center mt-2">
          <div className='border-[2px] border-[var(--first-color)] bg-transparent w-[20px] h-[20px] flex items-center justify-center'>
           <input className='w-[100%] bg-[#111]' type='checkbox'/>
         </div>
         <p>Compare</p>
          </div>
</PublicityCard.Root>
  )
}











{/*  */}