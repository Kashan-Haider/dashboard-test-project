import React from 'react'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import MobileNavbar from './components/navbar/MobileNavbar'
import Sidebar from './components/sidebar/Sidebar'

const page = () => {
  return (
    <div className={`flex`} >
      <div>
        <Sidebar/>
      </div>
    <div className='w-full' >
      <Navbar/>
      <MobileNavbar />
      <Dashboard/>
    </div>
    </div>
  )
}

export default page