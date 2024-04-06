import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section flex justify-center bg-sky-200 py-16">
        <div className="container flex  flex-col justify-center  gap-y-10">
            <div className='text-center text-5xl font-extrabold'>Get In Touch </div>
            <div className='flex gap-x-5'>
            <div className='w-3/6 flex justify-center'>
            <iframe className='rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13394.545337626036!2d74.95593654160163!3d32.9342052480909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssmvdu!5e0!3m2!1sen!2sin!4v1712395452356!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex w-3/6  p-5 gap-x-10'>
                <div className=' p-5  flex flex-col gap-y-2'>
                    <h1 className='text-2xl text-black font-bold'>Head Office</h1>
                    <p className='text-lg'>Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
                    <hr />
                    <p className='text-lg '>Phone <span className='text-sky-500'>302-456-7892</span></p>
                    <p className='text-lg '>Email <span className='text-sky-500'>info@company.com</span></p>
                </div>
                <div className=' p-5 flex flex-col gap-y-2'>
                <h1 className='text-2xl text-black font-bold'>Dubai Office</h1>
                    <p className='text-lg'>Burj Park, Downtown Dubai, United Arab Emirates</p>
                    <hr />
                    <p className='text-lg '>Phone <span className='text-sky-500'>125-852-4525</span></p>
                    <p className='text-lg '>Email <span className='text-sky-500'>info@company.com</span></p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;