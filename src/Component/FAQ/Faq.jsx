import React, { useState } from 'react'
import "./Faq.css"
import Accordion from './Accordion';

const items = [
    {
      title: 'What is React?',
      content: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'
    },
    {
      title: 'Why use React?',
      content: 'React allows developers to create large web applications that can change data, without reloading the page.'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components.'
    }
  ];


const Faq = ({title,content}) => {
    const [isOpen , setIsOpen] = useState(false);
  return (
    <section className='faq-section flex justify-center'>
        <div className="container flex flex-col gap-y-8">
             <div className='faq  text-5xl font-extrabold text-center'>Frequently Asked Questions</div>
             <div className='flex justify-center gap-x-8  px-16 py-2'>
                <div className=' w-3/6 '>
                    <img  src="https://templatemo.com/templates/templatemo_590_topic_listing/images/faq_graphic.jpg" alt="faq" />
                </div>
                <div className=' w-3/6    gap-y-2 '>
                    
                <Accordion items={items} />
                </div>
             </div>
        </div>
    </section>
  )
}

export default Faq