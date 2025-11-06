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
    </section>
  )
}
