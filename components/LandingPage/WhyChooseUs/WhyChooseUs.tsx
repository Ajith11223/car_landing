'use client'
import React from 'react';
import './WhyChooseUs.css';
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <div>
            <div className='py-10 md:py-12 lg:py-[60px] xl:py-[70px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px] bg-[#000000]'>
                <div className='flex flex-col gap-[34px]'>
                    <h3 className='font-bold text-[30px] md:text-[48px] leading-[40px] md:leading-[58px] text-white text-center'>
                        Why Chose Us
                    </h3>
                    <div className=''>
                        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-[30px] 2xl:gap-[25px]'>
                            <div className='xl:flex xl:w-full xl:justify-end'>
                                <div className='relative overflow-hidden z-0 h-[300px] md:h-[500px] xl:h-[540px] w-full xl:w-[376.5px] bg-[#111111] rounded-[20px]'>
                                    <div className='absolute CardOne-Bg-Image -z-10'></div>
                                    <div className='absolute bottom-[53px] left-12 md:left-[30px] lg:left-12'>
                                        <p className='max-w-[180px] xl:max-w-[220px] font-bold text-[24px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[34.5px] md:leading-[30.5px] lg:leading-[34.5px] xl:leading-[40.5px] text-white'>
                                            Tailored to UAE Conditions
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='2xl:flex 2xl:w-full 2xl:justify-center'>
                                <div className='flex flex-col gap-5 xl:gap-[30px] h-[420px] md:h-full'>
                                    <div className='relative overflow-hidden z-0 h-full w-full 2xl:w-[427.5px] bg-[#111111] rounded-[20px]'>
                                        <div className='absolute CardTwo-Bg-Image -z-10'></div>
                                        <div className='absolute left-[10px] md:left-[40px] lg:left-[10px] 2xl:left-[19px] flex flex-row md:flex-col lg:flex-row gap-3 xl:gap-6 h-full w-fill items-center justify-center'>
                                            <Image src="/WhyChooseUs-CardTwo-Image.svg" alt="Image" width={110} height={178} className="w-[60px] lg:w-[80px] 2xl:w-[110px]" />
                                            <p className='max-w-[200px] xl:max-w-[250px] font-bold text-[24px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[34.5px] md:leading-[30.5px] lg:leading-[34.5px] xl:leading-[40.5px] text-white'>
                                                Wide Database of Car Models
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative overflow-hidden z-0 h-full w-full 2xl:w-[427.5px] bg-[#111111] rounded-[20px]'>
                                        <div className='absolute CardThree-Bg-ImageOne -z-10'></div>
                                        <div className='absolute CardThree-Bg-ImageTwo -z-10'></div>
                                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                            <p className='max-w-[120px] xl:max-w-[150px] font-bold text-[24px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[34.5px] md:leading-[30.5px] lg:leading-[34.5px] xl:leading-[40.5px] text-white'>
                                                Save Time and Effort
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative overflow-hidden z-0 h-[300px] md:h-[500px] xl:h-[540px] w-full xl:w-[376.5px] bg-[#171515B2] rounded-[20px]'>
                                <div className='absolute CardFour-Bg-Image -z-10'></div>
                                <div className='absolute bottom-8 md:bottom-[53px] left-12 md:left-8 xl:left-12 flex flex-col gap-12 md:gap-24 items-center'>
                                    <Image src="/WhyChooseUs-CardFour-Image.svg" alt="Image" width={150} height={170} className="w-[100px] md:w-[110px] lg:w-[130px] xl:w-[170px]" />
                                    <p className='max-w-[190px] xl:max-w-[240px] font-bold text-[24px] md:text-[20px] lg:text-[24px] xl:text-[30px] leading-[34.5px] md:leading-[30.5px] lg:leading-[34.5px] xl:leading-[40.5px] text-white'>
                                        Expert-Driven AI Recommendations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
