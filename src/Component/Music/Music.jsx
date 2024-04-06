import React from 'react'
import "./Music.css"
const Music = () => {
  return (
    <section className='design-section'>
    <div className="container flex justify-center gap-x-10 px-16">
        <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between" >
            <div className='flex gap-x-2 justify-between p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Composing Songs</h1>
                    <p className='text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sit.</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-orange-500 text-white rounded-sm p-1">
                        45
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_online_ad_re_ol62.png " alt="" />
            </div>
        </div>
        <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between">
            <div className='flex gap-x-2  justify-between p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Online Music</h1>
                    <p className='text-xl '>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-orange-500 text-white rounded-sm p-1">
                        45
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Group_video_re_btu7.png" alt="" />
            </div>
        </div>
        <div className="design flex flex-col gap-y-2  p-2 w-2/6 justify-between" >
            <div className='flex gap-x-2 justify-between  p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Podcast</h1>
                    <p className='text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, id.</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-orange-500 text-white rounded-sm p-1">
                        20
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_viral_tweet_gndb.png" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Music