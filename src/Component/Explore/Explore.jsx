import React, { useState } from 'react'
import "./Explore.css"
import Design from '../Design/Design';
import Marketing from '../Marketing/Marketing';
import Finance from '../Finance/Finance';
import Music from '../Music/Music';
import Education from '../Education/Education';
const Explore = () => {
    const [status , setStatus] = useState("design");
    

    const handleDesign = () => {
        setStatus("design");
    }

    const handleMarketing = () =>{
        setStatus("marketing")
    }

    const handleFinance = () =>{
        setStatus("finance")
    }

    const handleMusic = () =>{
       setStatus("music")
    }

    const handleEducation = () =>{
        setStatus("education")
    }
  return (
    <section className='explore-section flex justify-center py-16 '>
      <div className="container    ">
          <div className="row  p-2 w-6/6 flex flex-col gap-y-8 ">
               <div className="browse text-center text-5xl text-black font-extrabold">
                  Browse Topics
               </div>
            <div>
                 <ul className='flex  border-black justify-center gap-x-12'>
                    <li className='explore-topic text-lg hover:cursor-pointer ' onClick={handleDesign}>Design</li>
                    <li className='explore-topic text-lg hover:cursor-pointer' onClick={handleMarketing}>Marketing</li>
                    <li className='explore-topic text-lg hover:cursor-pointer' onClick={handleFinance}>Finance</li>
                    <li className='explore-topic text-lg hover:cursor-pointer' onClick={handleMusic}>Music</li>
                    <li className='explore-topic text-lg hover:cursor-pointer' onClick={handleEducation}>Education</li>
                 </ul>
            </div>
            <div className='p-2'>
                <hr />
            </div>
            <div>
                {status === "design" && <Design/>}
                {status === "marketing" && <Marketing/>}
                {status === "finance" && <Finance/>}
                {status === "music" && <Music/>}
                {status === "education" && <Education/>}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Explore