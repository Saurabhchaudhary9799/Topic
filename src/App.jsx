import React from 'react'
import Layout from './Component/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopicListing from './Component/Pages/TopicListing/TopicListing'
import ContactUs from './Component/Pages/ContactUs/ContactUs'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
   
    <>
  
    <Navbar/>
     <Routes>
       <Route path='/' element={<Layout/>}/>
       <Route path='/topic-listing' element={<TopicListing/>}/>
       <Route path='/contact-us' element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    
    </>
   
  )
}

export default App