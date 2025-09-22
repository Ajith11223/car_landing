'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import './Financing.css';

const Financing = () => {
    return (
        <div className='relative overflow-hidden z-0 bg-gradient-to-b from-[#FFF8E8] to-[#FFFFFF]'>
            <div className='absolute Financing-Bg-Image -z-10'></div>
            <div className='px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10'>
                    <div className='pt-10 md:pt-12 lg:pt-[60px] xl:pt-[70px] flex flex-col gap-5 xl:gap-0'>
                        <div className='flex flex-col gap-[29px]'>
                            <div className='flex flex-col gap-[15px]'>
                                <h4 className='max-w-[310px] font-bold text-[28px] lg:text-[32px] xl:text-[36px] leading-[36.6px] lg:leading-[38.6px] xl:leading-[48.6px] text-black'>
                                    Flexible Financing Options
                                </h4>
                                <p className='max-w-[570px] font-normal Normal-text text-black'>
                                    Explore financing plans offered by our trusted partners. Quick approvals, low interest rates, and tailored solutions for every budget.
                                </p>
                            </div>
                            <Link href="" className='w-fit py-3 px-[18px] Black-button'>
                                View Finance Options
                            </Link>
                        </div>
                        <div>
                            <Image src="/Financing-Family-Image.svg" alt="Image" width={590} height={432} />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute top-0 right-0 hidden sm:block'>
                            <Image src="/Financing-Globe-Image.svg" alt="Image" width={434} height={323} />
                        </div>
                        <div className='pb-10 md:pb-12 lg:pb-[60px] xl:pb-[70px] flex flex-col h-full justify-end'>
                            <div className='flex flex-col gap-[29px]'>
                                <div className='flex flex-col gap-[15px]'>
                                    <h4 className='max-w-[340px] font-bold text-[28px] lg:text-[32px] xl:text-[36px] leading-[36.6px] lg:leading-[38.6px] xl:leading-[48.6px] text-black'>
                                        Comprehensive Car Insurance
                                    </h4>
                                    <p className='max-w-[460px] font-normal Normal-text text-black'>
                                        Compare insurance plans from top providers for coverage that fits your needs.
                                    </p>
                                </div>
                                <Link href="" className='w-fit py-3 px-[18px] Black-button'>
                                    View Insurance Options
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financing