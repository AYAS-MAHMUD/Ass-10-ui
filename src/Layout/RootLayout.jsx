import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast';
const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-130'>
            <Outlet/>
        </main>
        <Footer/>
      <Toaster/>
    </div>
  )
}

export default RootLayout