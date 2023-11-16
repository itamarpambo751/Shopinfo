import { Banner, Categories, Hr, Section, Settings } from '@/components/_ui';
import React from 'react';
import { ChevronRightDown } from '@/components/_ui/ChevronRightDown';
import { BsChevronDown } from 'react-icons/bs';
import { categories } from '@/pages/api/data';
import { PublicityCardV6 } from '../PublicityCard/v6';

const listDown = [
  {
    "name":"Marca",
    "items": [
      "Neologic",
    ]
  },
  {
    "name":"Processador",
    "items": [
      "i3-8100",
      "i3-9100F",
      "i5-7400",
      "i5-7640X",
      "i7-8700",
      "Ryze 3 2200G",
    ]
  },
  {
    "name":"Placa de Vídeo",
    "items": [
      "Amd Radeon RX 560 2GB",
      "Amd Radeon RX 560 4GB",
      "Amd Radeon RX 570 4GB",
      "Geforce GT 1030 2GB",
      "Geforce GTX 1050 Ti 4GB",
      "Geforce GTX 1060 3GB",
    ]
  },
  {
    "name":"Memória",
    "items": [
      "8GB",
      "16GB",
      "32GB",
      "16GB Dual Channel",
      "16GB Single Channel",
      "16GB DDR5",
    ]
  },
  {
    "name":"HD",
    "items": [
      "1TB",
      "2TB",
    ]
  },
  {
    "name":"SSD",
    "items": [
      "120GB",
      "240GB",
      "480GB",
      "1TB",
      "SSD 120GB M.2 NVME",
      "SSD 240GB M.2 NVME",
    ]
  },
  {
    "name":"Wifi",
    "items": [
      "Sim",
    ]
  },
  {
    "name":"Faixa de preço",
    "items": [
      "R$-R$2000,00",
      "R$2000,00-R$3500,00",
      "R$3500,00-R$5000,00",
      "R$5000,00-R$10000,00",
    ]
  }
]

interface PageComponentProps {
  banner_img: string
  title: string
  subtitle: string
  paragraph: string
  section: string
}

export default function PageComponent()  {
  return (
    <div>
      <Banner.Gradient.Root>
				<Banner.Image url="/assets/img/choosepc-gmer.webp"/>
				<div className='absolute top-0 left-10 m-auto'>
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
        <div className='mt-[-70px]'>
          <Section.Content>
            <Settings />
            <div className='flex justify-start items-center gap-5 mt-10'>
              <h1 className='text-[24px]'>Principais Categorias</h1>
              <Hr className='w-[65%]'/>
            </div>
            <div className='mt-5'/>
            <Categories categories={categories}/>
            <div className='mt-5 flex flex-col'>
              <div className='flex justify-between items-end'>
                <h2 className="font-bold text-[17px] text-[var(--text-light)] mb-5">Filtros</h2>
                <form className='px-5 border w-[230px] h-[60px] flex justify-between items-center'>
                  <div className='flex flex-col'>
                    <span className='uppercase text-[14px]'>Ordenar por:</span>
                    <small className='text-sm text-[var(--border-color)]'>Selecione</small>
                  </div>
                  <i>
                    <BsChevronDown />
                  </i>
                </form>
              </div>
              <div className='flex gap-8 mt-6'>
                <div className="min-w-[230px] max-w-[230px]">                    
                  <div  className="b-top">
                    <ul>
                      {listDown.map((item, index) => 
                        <ChevronRightDown item={item} key={index}/>
                      )}
                    </ul>
                  </div>
                </div>
                <div>
                  <ul className='flex-1 grid grid-cols-4 gap-7'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 2, 2, 2, 2].map((n, i) => <PublicityCardV6 key={i}/>)}
                  </ul>
                  <div className='mt-20 flex justify-center items-center'>
                    <button className='bg-[var(--red-text-color)] w-96 font-bold text-[1rem] p-2 rounded-md'>Carregar mais produtos</button>
                  </div>
                </div>
              </div>
            </div>
          </Section.Content>
        </div>
      </Section.Root>
      <section className='h-[1000px]'></section>
    </div>
  )
}