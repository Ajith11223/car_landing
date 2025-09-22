'use clent'
import React from 'react'
import './HowWorks.css'
import Link from 'next/link'

const HowWorks = () => {
    return (
        <div className='relative overflow-hidden z-0'>
            <div className='absolute HowWorks-Bg-Image -z-10 mt-[5px] md:mt-[10px]'></div>
            <div className='pt-8 md:pt-10 lg:pt-12 xl:pt-[60px] 2xl:pt-[70px] pb-[50px] px-3 sm:px-5 lg:px-[50px] xl:px-[80px] 2xl:px-[100px]'>
                <div className='flex flex-col gap-[70px]'>
                    <div className='flex flex-col gap-5 md:gap-7 lg:gap-12'>
                        <h3 className='font-bold text-[30px] md:text-[36px] lg:text-[40px] xl:text-[48px] leading-[38px] md:leading-[44px] lg:leading-[48px] xl:leading-[56px] text-black'>
                            How It Works
                        </h3>
                        <div className='flex flex-col md:flex-row md:w-full md:justify-between gap-5 md:gap-3 lg:gap-7'>
                            <div className='flex gap-6 md:gap-3 lg:gap-4 xl:gap-7 items-start'>
                                <h5 className='font-light text-[24px] lg:text-[28px] xl:text-[34px] leading-[35.9px] lg:leading-[40px] xl:leading-[45.9px] text-black'>
                                    01
                                </h5>
                                <div className='flex flex-col gap-3 lg:gap-4'>
                                    <p className='font-bold text-[20px] lg:text-[22px] xl:text-[24px] leading-[27.4px] lg:leading-[29.4px] xl:leading-[32.4px] text-black'>
                                        Input Your Needs
                                    </p>
                                    <p className='max-w-[210px] font-normal text-[16px] lg:text-[18px] leading-[22.3px] lg:leading-[24.3px] text-black'>
                                        Type or choose your car preferences.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-5 md:gap-3 lg:gap-4 xl:gap-7 items-start'>
                                <h5 className='font-light text-[24px] lg:text-[28px] xl:text-[34px] leading-[35.9px] lg:leading-[40px] xl:leading-[45.9px] text-black'>
                                    02
                                </h5>
                                <div className='flex flex-col gap-3 lg:gap-4'>
                                    <p className='font-bold text-[20px] lg:text-[22px] xl:text-[24px] leading-[27.4px] lg:leading-[29.4px] xl:leading-[32.4px] text-black'>
                                        AI Analyzes Options
                                    </p>
                                    <p className='max-w-[250px] font-normal text-[16px] lg:text-[18px] leading-[22.3px] lg:leading-[24.3px] text-black'>
                                        Our smart system compares hundreds of cars.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-5 md:gap-3 lg:gap-4 xl:gap-7 items-start'>
                                <h5 className='font-light text-[24px] lg:text-[28px] xl:text-[34px] leading-[35.9px] lg:leading-[40px] xl:leading-[45.9px] text-black'>
                                    03
                                </h5>
                                <div className='flex flex-col gap-3 lg:gap-4'>
                                    <p className='font-bold text-[20px] lg:text-[22px] xl:text-[24px] leading-[27.4px] lg:leading-[29.4px] xl:leading-[32.4px] text-black'>
                                        Get Recommendations
                                    </p>
                                    <p className='max-w-[280px] font-normal text-[16px] lg:text-[18px] leading-[22.3px] lg:leading-[24.3px] text-black'>
                                        Receive a tailored list of the best cars for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <Link href="#" className='Orange-border-button-main'>
                            <p className='px-[26px] py-3 Orange-border-button'>
                                Try it Now!
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks
