import React from 'react'

export const Customers = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-center">

      <div className="max-w-6xl mx-auto mb-20">
        <div className="mb-20 text-center">
            <h4 className="text-[20px] text-[#FF2D59] font-semibold">
                Some of Our Great Customers</h4>
            <h2 className="text-[42px] font-semibold text-[#111029] mt-2">
                Some of the companies we have worked with
            </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
          <img src="/images/amazon.svg" alt="Amazon" className="h-10 object-contain" />
          <img src="/images/jeep.svg" alt="Jeep" className="h-10 object-contain" />
          <img src="/images/careem.svg" alt="Careem" className="h-10 object-contain" />
          <img src="/images/hubspot.svg" alt="HubSpot" className="h-10 object-contain" />
          <img src="/images/jquery.svg" alt="jQuery" className="h-10 object-contain" />
          <div className='w-full'></div>
          <img src="/images/canon.svg" alt="Canon" className="h-10 object-contain" />
          <img src="/images/fedex.svg" alt="FedEx" className="h-10 object-contain" />
          <img src="/images/bitcoin.svg" alt="Bitcoin" className="h-10 object-contain" />
          <img src="/images/pirelli.svg" alt="Pirelli" className="h-10 object-contain" />
          <img src="/images/philips.svg" alt="Philips" className="h-10 object-contain" />
        </div>
      </div>

      {/* Нижняя часть — отзыв 
      <div className="bg-[#FE9602] text-white py-16 relative w-full">
        <div className="max-w-4xl mx-auto px-6">
          <img src='/images/quotes.svg' alt='asd' className="mx-auto block"/>
          <p className="text-[28px] leading-10 tracking-[-0.1px] mb-8">
            We are serious about providing our best service to <br/>
            all the customers we help. Customers satisfaction is <br/>
            our number one priority.
          </p>
          <div>
            <p className="font-semibold text-lg">Mark Garfield</p>
            <p className="text-sm opacity-90">CEO & Head of Product</p>
          </div>
        </div>

        
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <button className="bg-white text-orange-500 rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <span className="text-xl">←</span>
          </button>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <button className="bg-white text-orange-500 rounded-full p-3 shadow-md hover:bg-gray-100 transition">
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
            */}
    </section>
  )
}
