import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
   
  return (
    <section className='breadcrumb py-16  flex justify-center' style={{ backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)"}}>
    <div className="container flex flex-col  gap-y-2">
        <span style={{color:"#13547a"}} className='text-lg '><Link className='hover:text-white-500' to={"/"}>Homepage</Link> <span className='text-white'> / Contact Form</span></span>
        <span className='text-5xl text-white font-extrabold'>Contact Form</span>
    </div>
    </section>
  )
}

export default Breadcrumb