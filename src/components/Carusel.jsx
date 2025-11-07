import React from 'react'
import {ArrowRight, ArrowLeft} from "lucide-react";
export const Carusel = () => {
  return (
    <section className='text-center'>
        <div className="bg-[#FE9602] text-white py-16 relative h-[54 0px]">
            <div className="max-w-4xl mx-auto px-6">
                <img src='/images/quotes.svg' alt='' className="mx-auto block"/>
                <p className="text-[28px] leading-10 tracking-[-0.1px] mb-15">
                    We are serious about providing our best service to <br/>
                    all the customers we help. Customers satisfaction is <br/>
                    our number one priority.
                </p>
                <div>
                    <p className="font-semibold text-[20px] leading-7 mb-5">
                        Mark Garfield <br/> CEO & Head of Product
                    </p>
                </div>
                <div>
                    <img src='/images/group.svg' alt='' className='mx-auto block ' />
                </div>
            </div>

        
            <div className="absolute left-40 top-1/2 -translate-y-1/2 group">
                <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-white rounded-full group-hover:bg-[#4C40F7] transition duration-300">
                    <ArrowLeft className='w-4 h-4 text-[#ABAFC7] group-hover:text-white duration-300'/>
                </button>
            </div>
            <div className="absolute right-40 top-1/2 -translate-y-1/2 group">
                <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-white rounded-full group-hover:bg-[#4C40F7] transition duration-300">
                    <ArrowRight className='w-4 h-4 text-[#ABAFC7] group-hover:text-white duration-300'/>
                </button>
            </div>

      </div>
    </section>
  )
}
