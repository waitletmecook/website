import React from 'react'
import {Flame, PenTool, Monitor, ArrowRight, Smartphone, Building2, ChartColumnBig} from "lucide-react";

export const Services = () => {
  return (
    <section className="py-20 bg-white text-center px-6 md:px-12">

      <div className="mb-12">
        <h4 className="text-[20px] text-[#FF2D59] font-semibold">
          Our Services</h4>
        <h2 className="text-[42px] md:text-4xl font-semibold text-[#111029] mt-2">
          The various services we provide to make your <br />
          business more powerful</h2>
      </div>

      <cards className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

         <card1 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#4C40F7] hover:drop-shadow-[2px_8px_10px_#4C40F7]">
          
          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#4C40F7] rounded-full mb-6 group-hover:bg-white">
            <Flame className="w-10 h-10 text-white group-hover:text-[#4C40F7]" fill='currentColor'/>
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">Ideate</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We help you develop creative <br/> 
              ideas so that your business can <br/>
              grow more rapidly
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card1>  

        <card2 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#FF2D59] hover:drop-shadow-[2px_8px_10px_#FF2D59]">

          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#FF2D59] rounded-full mb-6 group-hover:bg-white">
            <PenTool className="w-10 h-10 text-white group-hover:text-[#FF2D59]"/>
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">Design</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We provide services with the <br/> 
              best designs than our designer <br/>
              team for your business
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card2>  

        <card3 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#4ADB61] hover:drop-shadow-[2px_8px_10px_#4ADB61]">

          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#4ADB61] rounded-full mb-6 group-hover:bg-white">
            <Monitor className="w-10 h-10 text-white group-hover:text-[#4ADB61] " />
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">Web Development</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We help develop company <br/>
              websites to be more <br/>
              professional and attractive
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card3>

        <card4 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#FFCC00] hover:drop-shadow-[2px_8px_10px_#FFCC00]">

          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#FFCC00] rounded-full mb-6 group-hover:bg-white">
            <Smartphone className="w-10 h-10 text-white group-hover:text-[#FFCC00] " />
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">App Development</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We help develop company <br/>
              mobile apps to be more <br/>
              professional and attractive
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card4>

        <card5 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#007BFF] hover:drop-shadow-[2px_8px_10px_#007BFF]">

          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#007BFF] rounded-full mb-6 group-hover:bg-white">
            <Building2 className="w-10 h-10 text-white group-hover:text-[#007BFF] " />
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">Business Growth</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We also provide services by <br/>
              providing input for your <br/>
              business growth
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card5>

        <card6 className="group bg-white text-white rounded-2xl p-8 flex flex-col justify-between items-center w-[352px] h-[458px] 
         shadow transition transform hover:-translate-y-2 hover:bg-[#FF6800] hover:drop-shadow-[2px_8px_10px_#FF6800]">

          <icon className="w-[97px] h-[97px] flex items-center justify-center  bg-[#FF6800] rounded-full mb-6 group-hover:bg-white">
            <ChartColumnBig className="w-10 h-10 text-white group-hover:text-[#FF6800] " />
          </icon>
          <text className='flex flex-col items-center text-center flex-1 justify-center'>
            <p className="text-xl font-semibold text-[#111029] mb-3 group-hover:text-white">Digital marketing</p>
            <p className="text-[#6B6B6B] leading-8 mb-6 group-hover:text-white">
              We also help you market your <br/>
              products through an online <br/>
              marketplace
            </p>
          </text>

          <button className="w-[45px] h-[45px] flex items-center justify-center text- bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ArrowRight className='w-4 h-4 text-[#4C40F7]'/>
          </button>
        </card6>

      </cards>
    </section>
  )
}
