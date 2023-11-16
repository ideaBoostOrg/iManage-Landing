import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-58 xl:max-w-[520px]">Get in Touch with Us - Let's Talk Clean!</h2>
          <p className="regular-16 text-gray-10">Ready to embark on a journey towards cleaner, more efficient operations? We're just a message away. Contact us today to discuss how we can transform your cleaning business with our innovative solutions.</p>
          <p className="regular-16 text-gray-10">Whether you have questions, need assistance, or want to explore the possibilities, we're here. Drop us a line, and let's redefine clean together!</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp