import React from 'react'
import { CircleCheck } from 'lucide-react';

export const Documentation = () => {
  return (
    <section className='py-20 px-6 md:px-12'>
        <div>
            <div className='pb-16'>
                <div className="mb-12 text-center">
                    <h4 className="text-[20px] text-[#FF2D59] font-semibold">
                        Our Documentation</h4>
                    <h2 className="text-[42px] md:text-4xl font-semibold text-[#111029] mt-2">
                        See what our profile is like and how we work for your <br/>
                        business
                    </h2>
                </div>

                <div className='flex justify-center'>
                    <img src='image.png' />
                </div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
         <div className="grid grid-cols-2 gap-6 text-center md:text-left">

            <div className='flex flex-col gap-6'>
                <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300 
                        w-[270px] h-[300px] flex items-center justify-center">
                    <div className='text-center'>
                        <h3 className="text-[56px] font-semibold text-[#4C40F7] mb-3">
                            70K+
                        </h3>
                        <p className="text-[#111029] text-[18px] md:text-base opacity-70">
                            We have more than<br /> one customers
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300 
                    w-[270px] h-[300px] flex items-center justify-center">
                    <div className='text-center'>
                        <h3 className="text-[56px] font-semibold text-[#FF2D59] mb-3">
                            10M+
                        </h3>
                        <p className="text-[#111029] text-[18px] md:text-base opacity-70">
                            People who are helped <br/>
                            because of our hard<br/>     work
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6 -mt-6'>
                <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300 
                    w-[270px] h-[300px] flex items-center justify-center">
                    <div className='text-center'>
                        <h3 className="text-[56px] font-semibold text-[#FF6800] mb-3">
                            100+
                        </h3>
                        <p className="text-[#111029] text-[18px] md:text-base opacity-70">
                            Projects we have <br/>completed
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300 
                    w-[270px] h-[300px] flex items-center justify-center">
                    <div className='text-center'>
                        <h3 className="text-[56px] font-semibold text-[#4ADB61] mb-3">
                            200+
                        </h3>
                        <p className="text-[#111029] text-[18px] md:text-base opacity-70">
                            Support from world-<br/>renowned companies
                        </p>
                    </div>
                </div>
            </div>
         </div>


        <div>
          <h2 className="text-[56px] leading-16  font-semibold text-[#111029] mb-6">
            Customer <br/>satisfaction is<br /> our first priority
          </h2>
          <p className="text-[#6B6B6B] mb-6 leading-8">
            We serve many customers, ranging from small <br/>
            businesses, medium enterprises, to world-renowned<br/>
            companies. Their satisfaction is our focus. <br/>
            We strive to provide the best service in every project.
          </p>


          <div className="space-y-3 text-left">
            <div className="flex items-start text-[#6B6B6B]">
                <CircleCheck className='text-white mr-2 mb-2.5' fill='blue'/> Provide ideas support from our creative team
            </div>

            <div className="flex items-start text-[#6B6B6B]">
                <CircleCheck className='text-white mr-2 mb-2.5' fill='blue'/> Provide attractive and professional design <br/>services
            </div>

            <div className="flex items-start text-[#6B6B6B]">
                <CircleCheck className='text-white mr-2 mb-2.5' fill='blue'/> Support for service 24 hours a week
            </div>

            <div className="flex items-start text-[#6B6B6B]">
                <CircleCheck className='text-white mr-2 mb-2.5' fill='blue'/> Helping our customers to grow their business
            </div>

            <div className="flex items-start text-[#6B6B6B]">
                <CircleCheck className='text-white mr-2' fill='blue'/> Provide support to market products through <br/> online marketplace 
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
