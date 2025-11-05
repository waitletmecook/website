import React from 'react'
import { MoveRight } from 'lucide-react';
import pic from '/pic.png'

export const Hero = () => {
  return (
    <section className="flex flex-col mt-20 md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-4 bg-white">
      
        <div className="md:w-1/2 space-y-6">
            <h1 className="text-[56px] md:text-5xl font-semibold text-gray-900 leading-tight">
                Make your business <span className="text-orange-500">more powerful</span> <br/> with us
            </h1>

            <p className="text-gray-500 max-w-md text-[18px]">
                We provide various services to make <br/>your business grow and get bigger.
                Your <br/>satisfaction is our first priority.
            </p>

            <button className="w-[200px] h-16 bg-[#4C40F7] hover:bg-indigo-700 ransition text-white  font-semibold px-9 py-4 rounded-xl 
            shadow-md t flex items-center">
                Get Started  <MoveRight className='w-6 ml-2'/>
            </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
            <img src={pic} alt=''className="" />
        </div>
    </section>
  )
}
