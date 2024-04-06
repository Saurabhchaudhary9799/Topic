import React from 'react'

const ContactForm = () => {
  return (
    <section className='contact-form-section flex justify-center py-16'>
        <div className="container flex   justify-center gap-x-8 px-16">
            <div className='w-3/6'>
                <h1 className='text-3xl text-black font-bold'>We'd love to hear from you</h1>
                <div>
                    <div className=' p-2 flex flex-col gap-y-2'>
                        <div className=' p-2 flex justify-center gap-x-2'>
                            <input className=' border w-3/6 h-[50px] rounded-[25px] pl-3 ' type="text" placeholder='Name'/>
                            <input className='border  w-3/6 h-[50px] rounded-[25px] pl-3' type="email"  placeholder='Email Address'/>
                        </div>
                        <div className=' p-2'>
                           <input type="text" placeholder='Subject' className='border w-full h-[50px] rounded-[25px] pl-3' />
                        </div>
                        <div className=' p-2'>
                          <textarea className='border  rounded-[25px] pl-3' name="feedback" id="feedback" cols="55" rows="5" placeholder='Tell me about the project'></textarea>
                        </div>
                        <div className='flex justify-end  p-2'>
                            <div className='border  w-[150px] flex justify-center items-center bg-sky-300  py-2 rounded-[30px] text-lg text-white font-bold'>submit</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/6 flex flex-col gap-y-10 justify-center items-center'>
            <iframe className='rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13394.545337626036!2d74.95593654160163!3d32.9342052480909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssmvdu!5e0!3m2!1sen!2sin!4v1712395452356!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='flex flex-col gap-y-2 px-16'>
                <h1 className='text-3xl font-extrabold'>Topic Listing Center</h1>
                <p className='text-xl'>Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm