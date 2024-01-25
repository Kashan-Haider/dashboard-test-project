'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import SidebarItem from './components/SidebarItem'
import { GoHomeFill } from 'react-icons/go'
import { IconType } from 'react-icons'
import { BiMoneyWithdraw, BiUser } from 'react-icons/bi'
import { PiCurrencyDollarSimpleFill, PiUserFill } from 'react-icons/pi'
import { TbUserFilled } from 'react-icons/tb'
import { BsCreditCardFill } from 'react-icons/bs'
import { FaHandHolding } from 'react-icons/fa'
import { RiServiceFill, RiSettingsFill } from 'react-icons/ri'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import sideBarStore from '@/store/zustand'

const Sidebar = () => {
    const [selected, setSelected] = useState('Dashboard')
    const sidebarItemsList = [
        {
            icon : GoHomeFill,
            title: 'Dashboard',
            selected: selected,
        },
        {
            icon : BiMoneyWithdraw,
            title: 'Transaction',
            selected: selected,
        },
        {
            icon : TbUserFilled,
            title: 'Accounts',
            selected: selected,
        },
        {
            icon : PiCurrencyDollarSimpleFill,
            title: 'Investment',
            selected: selected,
        },
        {
            icon : BsCreditCardFill,
            title: 'Credit Cards',
            selected: selected,
        },
        {
            icon : FaHandHolding,
            title: 'Loans',
            selected: selected,
        },
        {
            icon : RiServiceFill,
            title: 'Services',
            selected: selected,
        },
        {
            icon : RiSettingsFill,
            title: 'Settings',
            selected: selected,
        },
    ]
    const isOpen:boolean = sideBarStore((state:any)=> state.isOpen)
  const handleIsOpen = sideBarStore((state: any) => state.handleIsOpen);
  return (
    <div className={`absolute bg-white z-10 md:relative ${isOpen?'left-0':'-left-full'} md:left-0 transition-all duration-500 h-screen shadow-2xl shadow-gray-300 md:shadow-none`} >
        <div className='absolute z-20 right-4 top-8 md:hidden' onClick={()=> handleIsOpen()} >
            <CgClose/>
        </div>
        <div className='py-8 w-[200px] md:w-[170px] xl:w-[250px] flex flex-col gap-10'>
        <Link href={'./'} className='flex items-center gap-2 px-5' >
            <Image className='w-[15px] md:w-[30px]' src={'/images/logo.png'} alt='logo image' width={100} height={100} />
            <Image className='w-[80px] md:w-[150px]' src={'/images/logo-title.png'} alt='logo image' width={100} height={100} />
        </Link>
        <div className='flex flex-col gap-4' >
            {sidebarItemsList.map((item:{icon:IconType, title:string, selected:string} , index:number)=>{
                return(
                    <div key={index} onClick={()=> setSelected(item.title)} >
                        <SidebarItem icon={item.icon} title={item.title} selected={item.selected} />
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Sidebar