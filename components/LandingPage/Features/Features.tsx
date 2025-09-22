'use client'
import React from 'react';
import './Features.css';
import Link from 'next/link';
import FeatureOne from './FeatureOne/FeatureOne';
import FeatureTwo from './FeatureTwo/FeatureTwo';

const featureCarousel = [
    {
        component: <FeatureOne />,
        heading: "Guided Match",
        description: "Type in what you’re looking for, and our smart system will suggest cars that match your requirements.”",
        href: "#",
        button: "Try it Now!",
    },
    // {
    //     component: <FeatureTwo />,
    //     heading: "Smart Search",
    //     description: "Type in what you’re looking for, and our smart system will suggest cars that match your requirements.”",
    //     href: "#",
    //     button: "Try it Now!",
    // },
];

const Features = () => {
    return (
        <div className='relative overflow-hidden z-0'>
            <div className='absolute Features-Bg-Image'></div>
            <div className='py-10 md:py-12 lg:py-[60px] xl:py-[70px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px] flex flex-col gap-7 lg:gap-10 bg-[#131111]'>
                <h3 className='font-medium text-[30px] md:text-[40px] lg:text-[48px] leading-[38.8px] md:leading-[48.8px] lg:leading-[60.8px] text-white text-center z-10'>
                    Featured Tools
                </h3>
                <div className='flex w-full justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-7 w-full md:gap-4 lg:gap-5 xl:gap-[35px]'>
                        {featureCarousel.map((item, index) => (
                            <div key={index} className='relative overflow-hidden rounded-[12px] backdrop-blur-sm'>
                                <div className='absolute  rounded-[12px]'></div>
                                <div className='p-2.5 lg:p-5 xl:p-10 flex flex-col gap-7 xl:gap-[34px] md:h-full md:justify-between'>
                                    <div className='flex flex-col gap-7 xl:gap-[34px]'>
                                        <div className='px-2.5 lg:px-5 xl:px-10 2xl:px-12 bg-gradient-to-b from-[#010101] to-[#67636320] rounded-[16px]'>
                                            {item.component}
                                        </div>
                                        <div className='flex flex-col gap-[14px] z-10'>
                                            <h5 className='font-bold text-[24px] lg:text-[32px] leading-[30.2px] lg:leading-[38.2px] text-white text-center'>
                                                {item.heading}
                                            </h5>
                                            <p className='font-normal text-[16px] lg:text-[18px] leading-[22.4px] lg:leading-[24.4px] text-white text-center'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className='flex justify-center z-10'>
                                        <Link href={item.href} className='w-fit Orange-border-button-main'>
                                            <p className='py-2 xl:py-3 px-4 xl:px-[26px] Orange-border-button'>
                                                {item.button}
                                            </p>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features