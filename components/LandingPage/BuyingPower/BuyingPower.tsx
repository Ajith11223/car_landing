'use client'
import React from 'react';
import SelectPicker from 'rsuite/SelectPicker';
import 'rsuite/SelectPicker/styles/index.css';
import Image from "next/image";
import './BuyingPower.css'; 

const BuyingPower = () => {

    const lookingData = ['Used Car', 'Compact City Cars', 'Family-Friendly SUVs', 'Off-Road Vehicles', 'EV s'].map(item => ({ label: item, value: item }));

    const CreditData = ['10-50', '50-100', '100-300', '300-500', '500+'].map(item => ({ label: item, value: item }));

    return (
        <div>
            <div className='relative overflow-hidden z-0 pt-8 sm:pt-10 lg:pt-[60px] xl:pt-[70px] pb-20 xl:pb-[100px] bg-white'>
                <div className='absolute BuyingPower-Bg-Image -z-10'></div>
                <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-2'>
                    <div className='col-span-1 sm:col-span-2 xl:col-span-1 px-3 sm:px-0 sm:pl-5 md:pl-[30px] lg:pl-[50px] xl:pl-[80px] 2xl:pl-[100px] flex flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-10 w-full'>
                        <div className='flex flex-col gap-2  md:gap-3 xl:gap-5 z-10'>
                            <h3 className='font-bold text-[30px] md:text-[40px] lg:text-[48px] leading-[38.8px] md:leading-[48.8px] lg:leading-[56.8px] text-black'>
                                Know Your Buying Power
                            </h3>
                            <p className='font-normal Normal-text text-black'>
                                Find out what fits your financial plan and discover cars that align with your budget.
                            </p>
                        </div>
                        <div className='p-2.5 sm:p-5 xl:p-6 flex flex-col gap-5 md:gap-7 lg:gap-[34px] bg-white shadow-effect rounded-[16px] z-10'>
                            <div className='p-3 border-[1px] border-[#DBDBDB] flex flex-col gap-1.5 items-center rounded-[16px]'>
                                <h3 className='font-bold text-black'>
                                    <span className='text-[22px] md:text-[26px] lg:text-[30px] xl:text-[35px] leading-[30.25px] md:leading-[34.25px] lg:leading-[40.25px] xl:leading-[44.25px]'>AED</span>
                                    <span className='text-[28px] md:text-[34px] lg:text-[40px] xl:text-[45px] leading-[36.75px] md:leading-[42.75px] lg:leading-[49.75px] xl:leading-[55.75px]'>123456</span>
                                </h3>
                                <p className='font-normal Normal-text text-black'>
                                    Est. Buying Power
                                </p>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 xl:gap-6'>
                                <div className='flex flex-col gap-1.5 md:gap-2'>
                                    <label htmlFor='lookingfor' className='font-medium text-[16px] leading-[21.6px] text-black'>Looking For</label>
                                    <SelectPicker
                                        data={lookingData}
                                        placeholder="Select looking item"
                                        className='w-full'
                                    />
                                </div>
                                <div className='flex flex-col gap-1.5 md:gap-2'>
                                    <label htmlFor='downpayment' className='font-medium text-[16px] leading-[21.6px] text-black'>Down Payment</label>
                                    <input
                                        placeholder='Enter down payment'
                                        className='w-full p-2.5 border-[1px] border-black font-normal text-[16px] leading-[21.6px] text-[#626262] placeholder:text-[#626262] focus:outline-none rounded-[8px]'
                                    />
                                </div>
                                <div className='flex flex-col gap-1.5 md:gap-2'>
                                    <label htmlFor='creditscore' className='font-medium text-[16px] leading-[21.6px] text-black'>Credit Score</label>
                                    <SelectPicker
                                        data={CreditData}
                                        placeholder="Select credit score"
                                        className='w-full'
                                    />
                                </div>
                                <div className='flex flex-col gap-1.5 md:gap-2'>
                                    <label htmlFor='monthlypayment' className='font-medium text-[16px] leading-[21.6px] text-black'>Monthly Payment</label>
                                    <input
                                        placeholder='Enter monthly payment'
                                        className='w-full p-2.5 border-[1px] border-black font-normal text-[16px] leading-[21.6px] text-[#626262] placeholder:text-[#626262] focus:outline-none rounded-[8px]'
                                    />
                                </div>
                            </div>
                            <button className='Orange-border-button-main'>
                                <p className='px-[26px] py-3 Orange-border-button'>
                                    See Matches
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 -bottom-[100px] sm:-bottom-[90px] lg:-bottom-[110px] xl:-bottom-[170px] 2xl:-bottom-[200px]'>
                    <Image src="/BuyingPower-Couple-Image.avif" alt="Image" width={675} height={940} className='w-[375px] sm:w-[300px] lg:w-[370px] xl:w-[575px] 2xl:w-[675px] -z-10' />
                </div>
            </div>
        </div>
    )
}

export default BuyingPower