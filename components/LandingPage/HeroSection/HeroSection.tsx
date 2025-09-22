'use client'
import React from "react";
import Link from "next/link";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div>
            {/* <div className="absolute HeroSection-Bg-Image"></div> */}
            <div className="absolute"></div>
            <div className='pt-[140px] md:pt-[170px] lg:pt-[190px] pb-[60px] bg-white w-full'>
                <div className='grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-3'>
                    <div className='hidden xl:block xl:col-span-1'></div>
                    <div className='col-span-1 xl:col-span-3 2xl:col-span-2 pl-3 sm:pl-24 lg:pl-56 xl:pl-14'>
                        <div className='flex flex-col gap-[17px]'>
                            <p className='w-fit px-2.5 py-1 font-medium Medium-text text-[#4D4848] bg-white rounded-[30px] z-10'>
                                4.8 Starts
                            </p>
                            <div className='flex flex-col gap-[32px] z-10'>
                                <div className='flex flex-col gap-[14px]'>
                                    <h1 className='flex flex-col font-bold text-[34px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[62px] leading-[40px] sm:leading-[46px] md:leading-[54px] lg:leading-[62px] xl:leading-[68px]'>
                                        <span className='sm:hidden text-black'>Find Your Perfect</span>
                                        <span className='sm:hidden text-black'>Car with <span className='bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent'>AI </span> </span>
                                        <span className='sm:hidden bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent'>Recommendations!</span>
                                        <span className='hidden sm:block text-black'>Find Your Perfect Car with</span>{" "}
                                        <span className='hidden sm:block bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent'>AI Recommendations!</span>
                                    </h1>
                                    <p className='font-normal Normal-text text-[#4D4848] pr-[10%] xl:pr-0'>
                                        Tell us your needs, and our smart system will suggest the best cars for you in the UAE.
                                    </p>
                                </div>
                                <div className='flex gap-[13px] items-center'>
                                    <Link href="/find-car-by-ai" className='w-fit px-[18px] py-3 Black-button'>
                                    🚗 Find My Car
                                    </Link>
                                    <Link href="#" className='w-fit px-[18px] py-3 border-[1px] border-[#BDB5B5] font-normal Normal-text text-black hover:text-white hover:bg-black transform transition-all duration-300 rounded-[8px] text-center cursor-pointer'>
                                        How It Works
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
