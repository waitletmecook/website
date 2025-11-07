import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Questions = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 overflow-hidden">

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-20 text-center">
            <h4 className="text-[20px] text-[#FF2D59] font-semibold">
                Frequently Ask Question
            </h4>
            <h2 className="text-[42px] font-semibold text-[#111029] mt-2">
                Some of our frequently asked questions
            </h2>
        </div>


        <div className="space-y-4 text-left relative">

          <div className="border-2 border-[#4C40F7] rounded-xl shadow-md p-6 bg-white relative">
            <div>
                <h1 className="text-lg mb-3">
                    What are the services provided to customers?
                </h1>
                <div className='border border-[#D8D8D8] mb-2'></div>
                <p className="text-[#6B6B6B] leading-8 text-[16px]">
                    Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,<br/>
                    develop websites and mobile applications, provide support for the growth of business ideas, to help customers<br/>
                    market their products online through the marketplace.
                </p>
                <button className='absolute right-5 top-6'>
                    <ChevronUp/>
                </button>
            </div>
          </div>

            <div className=" border border-[#D8D8D8] rounded-xl shadow-sm p-6 bg-white cursor-pointer hover:shadow-md transition relative">
                <h1 className="text-lg">
                    How can I submit a proposal for cooperation?
                </h1>
                <button className='absolute right-5 top-7'>
                    <ChevronDown/>
                </button>
            </div>

            <div className=" border border-[#D8D8D8] rounded-xl shadow-sm p-6 bg-white cursor-pointer hover:shadow-md transition relative">
                <h1 className="text-lg ">
                    I come from a faraway place, can collaboration be done full time online through several meeting applications?
                </h1>
                <button className='absolute right-5 top-7'>
                    <ChevronDown/>
                </button>
            </div>

            <div className=" border border-[#D8D8D8] rounded-xl shadow-sm p-6 bg-white cursor-pointer hover:shadow-md transition relative">
                <h1 className="text-lg ">
                    How do I get the payment complete?
                </h1>
                <button className='absolute right-5 top-7'>
                    <ChevronDown/>
                </button>
            </div>

            <div className=" border border-[#D8D8D8] rounded-xl shadow-sm p-6 bg-white cursor-pointer hover:shadow-md transition relative">
                <h1 className="text-lg ">
                    How long can the collaboration last?
                </h1>
                <button className='absolute right-5 top-7'>
                    <ChevronDown/>
                </button>
            </div>

        </div>
      </div>
    </section>
  )
}
