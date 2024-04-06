import React from 'react'
import "./Education.css"
const Education = () => {
  return (
    <section className='design-section'>
    <div className="container flex justify-center gap-x-10 px-16">
        <div className="design flex flex-col gap-y-2  p-2 w-3/6 justify-between" >
            <div className='flex gap-x-2 justify-between p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Advertising</h1>
                    <p className='text-xl '>Topic Listing Template based on bootstrap 5</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-pink-500 text-white rounded-sm p-1">
                        14
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_online_ad_re_ol62.png " alt="" />
            </div>
        </div>
        <div className="design flex flex-col gap-y-2  p-2 w-3/6 justify-between">
            <div className='flex gap-x-2  justify-between p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Video Content</h1>
                    <p className='text-xl '>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-pink-500 text-white rounded-sm p-1">
                        75
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Group_video_re_btu7.png" alt="" />
            </div>
        </div>
       
    </div>
</section>
  )
}

export default Education