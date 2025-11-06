import React from 'react'


export const Workingspace = () => {
  return (
    <section>
            <div className="mb-12 text-center">
                <h4 className="text-[20px] text-[#FF2D59] font-semibold">
                    Working space
                </h4>
                <h2 className="text-[42px] md:text-4xl font-semibold text-[#111029] mt-2">
                    Let’s meet our interior room decoration
                </h2>
            </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[400px] ">
            <img src='/images/image1.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Front working space
            </p>
        </div>

        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[530px] ">
            <img src='/images/image2.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Meeting corner
            </p>
        </div>

        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[450px] ">
            <img src='/images/image3.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Guest meeting room
            </p>
        </div>

        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[550px]  bottom-[130px]">
            <img src='/images/image4.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Guest rest room
            </p>
        </div>

        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[420px] ">
            <img src='/images/image5.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Single working space
            </p>
        </div>

        <div className="relative overflow-hidden rounded-[10px] w-[350px] h-[500px] bottom-20">
            <img src='/images/image6.jpg' alt="" className="absolute inset-0 w-full h-full object-cover " /> 
            <p className="absolute bottom-4 left-5 text-white text-[18px]">
                Kitchen room
            </p>
        </div>

      </div>
    </section>
  )
}
