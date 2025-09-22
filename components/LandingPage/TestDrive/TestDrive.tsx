'use client'
import React from 'react';
import Image from "next/image";
import './TestDrive.css';
import Link from 'next/link';

const TestDrive = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute w-full -top-[100px] sm:-top-[125px] md:-top-[135px] lg:-top-[160px] xl:-top-[165px] 2xl:-top-[185px] z-10'>
          <div className='relative overflow-hidden z-0 px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px]'>
            <div className='absolute Yellow-Bg-Image z-10'></div>
            <div className='bg-[#000000] rounded-[16px]'>
              <div className='relative overflow-hidden'>
                <div className='py-10 sm:py-14 md:py-16 lg:py-20 2xl:py-[100px] px-3 md:px-5 lg:px-8 xl:px-[45px] flex flex-col sm:flex-row gap-8 sm:gap-5 items-center justify-between'>
                  <h2 className='max-w-[270px] sm:max-w-[320px] lg:max-w-[400px] font-bold text-[30px] sm:text-[36px] lg:text-[45px] leading-[45.75px] sm:leading-[51.75px] lg:leading-[60.75px] text-white z-10'>
                    Ready to Find Your Perfect Car?
                  </h2>
                  <Link href="#" className='w-fit p-2.5 White-button z-10 whitespace-nowrap'>
                    🚗 Find My Car
                  </Link>
                </div>
                <div className='absolute bottom-0 sm:top-0 sm:right-0 xl:right-[250px]'>
                  <Image src="/FindCar-BlackCar-Image.svg" alt="Image" width={520} height={348} className="sm:w-[370px] md:w-[400px] lg:w-[470px] 2xl:w-[520px] rounded-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 bg-black'>
          <div className='relative overflow-hidden z-0 hidden lg:block'>
            <div className='absolute Car-Bg-Image'></div>
            <div className='absolute Cover-Bg-Image'></div>
          </div>
          <div className='relative overflow-hidden z-0'>
            <div className='absolute Gradient-Bg-Image -z-10'></div>
            <div className='absolute Cover-Bg-Image -z-10'></div>
            <div className='flex w-full justify-center pt-[185px] sm:pt-[130px] lg:pt-[190px] xl:pt-[200px] pb-[60px] lg:pb-[100px] xl:pb-[120px]'>
              <div className='flex flex-col gap-6 px-3'>
                <div className='flex flex-col gap-3'>
                  <h3 className='font-bold text-[35px] md:text-[54px] leading-[55px] md:leading-[74px] text-white'>
                    Book a test drive
                  </h3>
                  <p className='font-normal Normal-text text-[#FFF8E8]'>
                    Type or choose your car preferences.
                  </p>
                </div>
                <Link href="#" className='w-fit p-2.5 White-button'>
                  Book Test drive Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestDrive
