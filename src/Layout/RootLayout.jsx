import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-130'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout