import React from 'react'
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-[#F9F9FD] text-center">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">

        <div className="mb-12">
            <h1 className="text-[20px] text-[#FF2D59] font-semibold">
                Testimonials
            </h1>
            <h2 className="text-[42px] md:text-4xl font-semibold text-[#111029] mt-2">
                Some testimonials from our customers
            </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user1.png" alt="" className="w-[120px] h-[120px] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Ronald Richards</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Google Inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user2.png" alt="" className="w-[120px] h-[120px] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Guy Hawkins</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Paypal inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user3.png" alt="" className="w-[120px] h-[120px] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Kristin Watson</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Microsoft inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user4.png" alt="" className="w-[120px] h-[120] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Robert Fox</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Google Inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user5.png" alt="" className=" w-[120px] h-[120px] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Savannah Nguyen</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Twitter inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="flex justify-center mb-4">
                    <img src="/images/user6.png" alt="" className="w-[120px] h-[120] rounded-full object-cover"/>
                </div>
                <h3 className="text-2xl font-semibold">Courtney Henry</h3>
                <p className="text-[#ABAFC7] text-[16px] mb-4">Apple Inc.</p>
                <p className="text-[#ABAFC7] text-[16px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
                <div className="flex justify-center space-x-1 text-[#4C40F7]" >
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                    <Star className="w-4 h-[15px]" fill='currentColor'/>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}
