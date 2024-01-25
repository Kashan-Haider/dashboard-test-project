import React from 'react'
import TransactionItem from './TransactionItem'
import { SlCreditCard } from 'react-icons/sl'

const Transactions = () => {
  return (
    <div className='md:h-[170px] lg:h-[200px]' >
        <h1 className='text-headingColor text-xl lg:text-2xl font-semibold mb-3' >Recent Transactions</h1>
        <div className='p-3 lg:p-5 bg-white rounded-3xl flex flex-col gap-1 lg:gap-3 justify-between h-full' >
        <TransactionItem icon = '/images/card.png'  iconBg='FFF5D9' title='Deposit from my Card' date='28 january 2021' price={-850} />
        <TransactionItem icon = '/images/payPal.png'  iconBg='E7EDFF' title='Deposit from PayPal' date='28 january 2021' price={2500} />
        <TransactionItem icon = '/images/jemiWilson.png'  iconBg='DCFAF8' title='Jemi Wilson' date='28 january 2021' price={5400} />
        </div>
    </div>
  )
}

export default Transactions