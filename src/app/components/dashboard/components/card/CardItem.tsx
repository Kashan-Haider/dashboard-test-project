import Image from 'next/image'
import React from 'react'
import { FcSimCardChip } from 'react-icons/fc'

const CardItem = (props:{theme:string}) => {
  return (
    <div className={`${props.theme == 'light'? 'bg-white text-headingColor' :'bg-[#4C49ED] text-white'} rounded-3xl flex flex-col gap-3 md:gap-1 pt-5 justify-between md:text-xs xl:text-base md:h-[170px] lg:h-[200px] min-w-[280px] md:min-w-[170px]`} >
        <div className='flex items-center justify-between px-5 md:px-3 lg:px-5 gap-5' >
            <div>
                <h1 className='text-xs lg:text-sm' >Balance</h1>
                <h1 className='' >$5,756</h1>
            </div>
            <div className='' >
                <Image className='w-[25px] lg:w-[50px]'  src={`/images/card-chip-${props.theme == 'light'?'black':'white'}.png`} alt='card chip' height={100} width={100}/>
            </div>
        </div>
        <div className='grid grid-cols-5 items-center justify-between px-5 md:px-3 lg:px-5 gap-2' >
            <div className='col-span-3' >
                <h1 className={`capitalize ${props.theme == 'light'? 'text-[#696969b2]' : 'text-[#ffffffb2]'}`} >Card Holder</h1>
                <p className='' >Eddy Cusuma</p>
            </div>
            <div className='flex justify-start flex-col col-span-2' >
                <h1 className={`text-xs capitalize ${props.theme == 'light'? 'text-[#696969b2]' : 'text-[#ffffffb2]'}`} >Valid thru</h1>
                <p className='' >12/22</p>
            </div>
        </div>
        <div className={`${props.theme == 'light'?'border-t-[1px] border-t-textColor':'bg-[#ffffff2a] border-t-[1px] border-t-[#4C49ED]'} flex items-center justify-between p-3 lg:p-5`} >
            <h1 className='' >3778 **** **** 1234</h1>
            <Image className='w-[20px] lg:w-[30px]' src={`/images/card-circles-${props.theme == 'light'? 'black' : 'white'}.png`} alt='card-circles' height={100} width={100} />
        </div>
    </div>
  )
}

export default CardItem