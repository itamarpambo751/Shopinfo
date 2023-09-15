import React from 'react';
import { Shopinfo } from "../../components";
import { Banner, Categories,Footer,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";
import { categories } from '@/pages/api/data';
import { BsFire } from "react-icons/bs";
import { Card } from '@/cards';
import {inform} from '@/pages/api/data'

export const metadata = {
  title: 'PC Gamer'
}
export default function PcGamer(){
  return (
    <div className='w-screen'>

      <Banner.Gradient.Root>
				<Banner.Image url="./assets/img/choosepc-gmer.webp"/>
				<div className='absolute top-0 left-0'>
					<Banner.Gradient.Container section='Home > Computadores Gamer'>
						<Banner.Gradient.Content
							title='PC Gamer'
							subtitle='A Nova era de PC Gamer chegou! Teste as suas Habilidades e jogue com um Neologic Gamer.'
							paraghraph='No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e'
							/>
					</Banner.Gradient.Container>
				</div>
      </Banner.Gradient.Root>

      <Section.Root>
        <div className='w-[100%] mt-[-70px]'>
          <Section.Content>
            <Settings />
            <div className='flex justify-start items-center gap-5 mt-10'>
              <h1 className='text-[24px]'>Principais Categorias</h1>
              <Hr className='w-[65%]'/>
            </div>
            <div className='mt-5'/>
            <Categories categories={categories}/>
          </Section.Content>
        </div>
      </Section.Root>
<div className='flex flex-col w-[100%] px-[8%]'>

<div className='flex items center  justify-between w-[100%]'>
  <div className='flex font-bold text-[13px] items-end'>
    <p>Filtro</p>
  </div>
   <div className='w-[100%] flex justify-end items-center mt-[60px]'>
           <div className='w-[250px] p-2 h-[80px] border-[1px] border-[white] flex flex-col justify-start items-center'>
             <p className='uppercase text-[14px] w-[100%]'>ordenar por:</p>
               <select className='w-[100%] border-none bg-transparent'>
                 <option>selecione</option>
               </select>
           </div>
      </div>
</div>
     
<main className='flex w-[100%] mt-[10px]'>

<div className='w-[20%]'>
 
 <Card.CardFiltro label='Produto'
    
    options={
      inform.map((i)=>
      (<Card.CheckListCard item={i.toString()} />))
    }
    
    />
 
</div>


<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4'>
{
    inform.map((i)=>
    (<Card.SuperCard />))
}
    
    
</div>
<div className='w-[100%] flex items-center justify-center mt-[20px] h-[300px]'>
       <PublicityLabel.Root expires={true}>
               <PublicityLabel.Icon icon={BsFire}/>
               <PublicityLabel.Content bigText="Carregar mais produtos" bold/>
      </PublicityLabel.Root>
</div>
</div>
</main>

</div>
      </div>
  )
}