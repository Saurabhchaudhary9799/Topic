import React from 'react'
import "./TrendingTopics.css"
const TrendingTopics = () => {
  return (
    <section style={{backgroundColor:"#f0f8ff"}} className='trending-topics-section flex justify-center py-16'>
         <div className="container flex flex-col gap-y-10">
             <div className='flex justify-center'>
                <h1 className='text-5xl font-extrabold'>Trending Topics</h1>
             </div>
             <div className='flex justify-center px-16  gap-x-10  '>
             <div className="design flex flex-col gap-y-2  p-2 w-3/6 justify-between ease-in-out duration-300 hover:-translate-y-[5px]" >
            <div className='flex gap-x-2  p-2'>
                <div className='flex flex-col gap-y-1  p-2'>
                    <h1 className='text-2xl text-black font-extrabold'>Investment</h1>
                    <p className='text-xl '>Topic Listing Template based on bootstrap 5</p>
                </div>
                <div className=' p-2'>
                    <span className="bg-purple-500 text-white rounded-sm p-1">
                        30
                    </span>
                </div>
            </div>
            <div className=' flex justify-center items-center'>
                <img className='h-48 w-48' src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/colleagues-working-cozy-office-medium-shot.png" alt="" />
            </div>
        </div>
        <div className=" design feature feature-2  p-3 rounded-3xl flex flex-col justify-between ease-in-out duration-300 hover:-translate-y-[5px] w-3/6">
            <div className="flex   p-2 gap-x-2 ">
              <div className="flex flex-col justify-start gap-y-2  p-2">
                <h1 className="feature-name text-white text-2xl font-bold">Finance</h1>
                <p className="feature-description text-white text-xl">
                  Topic listing templates includes homepage , listing page ,
                  details page and contact page . You can feel free to edit and
                  adapt your CMS requirements.
                </p>
                <div className=" learn-more flex justify-center items-center rounded-3xl text-lg text-white   w-32  py-1 hover:bg-sky-700 ">
                    Learn More
                </div>
              </div>
              <div className=" badge p-2">
                <span className="bg-sky-500 text-white rounded-sm p-1">25</span>
              </div>
            </div>
            <div className="social-media flex">
              <div className="share text-white text-xl font-semibold  flex justify-start items-center">
                 Share : 
              </div>
              <div className="social-icon flex gap-x-2  p-2 justify-start items-center">
                <span className=" p-2 rounded-full bg-sky-400 text-white flex justify-center items-center hover:bg-sky-700">
                <i className="bi bi-twitter"></i>
                </span>
                <span className=" p-2 rounded-full bg-sky-400 text-white flex justify-center items-center hover:bg-sky-700">
                <i className="bi bi-facebook"></i>
                </span>
                <span className=" p-2 rounded-full bg-sky-400  text-white flex justify-center items-center hover:bg-sky-700">
                <i className="bi bi-facebook"></i>
                </span>
              </div>
              <div className="bookmark grow  flex justify-end items-center">
              <i className="bi bi-bookmark hover:text-sky-400"></i>
              </div>
            </div>
        </div>
             </div>
         </div>
    </section>
  )
}

export default TrendingTopics