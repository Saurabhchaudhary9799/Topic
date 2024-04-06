import React from 'react'
import "./Design.css"
const Design = () => {
  return (
    <section className='design-section'>
        <div className="container flex justify-center gap-x-10 px-16">
            <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between" >
                <div className='flex gap-x-2  p-2'>
                    <div className='flex flex-col gap-y-1  p-2'>
                        <h1 className='text-2xl text-black font-extrabold'>Web Design</h1>
                        <p className='text-xl '>Topic Listing Template based on bootstrap 5</p>
                    </div>
                    <div className=' p-2'>
                        <span className="bg-sky-500 text-white rounded-sm p-1">
                            14
                        </span>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Remote_design_team_re_urdx.png" alt="" />
                </div>
            </div>
            <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between">
                <div className='flex gap-x-2  p-2'>
                    <div className='flex flex-col gap-y-1  p-2'>
                        <h1 className='text-2xl text-black font-extrabold'>Graphic</h1>
                        <p className='text-xl '>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className=' p-2'>
                        <span className="bg-sky-500 text-white rounded-sm p-1">
                            75
                        </span>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Redesign_feedback_re_jvm0.png" alt="" />
                </div>
            </div>
            <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between" >
                <div className='flex gap-x-2  p-2'>
                    <div className='flex flex-col gap-y-1  p-2'>
                        <h1 className='text-2xl text-black font-extrabold'>Logo Design</h1>
                        <p className='text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, id.</p>
                    </div>
                    <div className=' p-2'>
                        <span className="bg-sky-500 text-white rounded-sm p-1">
                            100
                        </span>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/colleagues-working-cozy-office-medium-shot.png" alt="" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Design