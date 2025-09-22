'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@heroui/react";

const ourFeatures = [
    { text: "Enter Your Prompt" },
    { text: "Get Recommendations" },
    { text: "Find Your Perfect Car" },
    { text: "Know Your Buying Power" },
];

const FeatureTwo = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % ourFeatures.length);
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, [ourFeatures.length]);

    return (
        <div className="h-[220px] lg:h-[250px] xl:h-[280px] overflow-hidden relative flex items-center justify-center z-50">
            <div className="relative h-full w-full max-w-[420px] flex justify-center items-center">
                {ourFeatures.map((item, index) => {
                    // Calculate the position of each card
                    let position = (index - currentIndex + ourFeatures.length) % ourFeatures.length;

                    let cardStyle = {};
                    if (position === 0) {
                        // Center card
                        cardStyle = { transform: 'translateY(0) scale(1)', opacity: 1, zIndex: 2, };
                    } else if (position === 1) {
                        // Bottom card (next to be centered)
                        cardStyle = { transform: 'translateY(100%) scale(0.9)', opacity: 0.6, zIndex: 1, };
                    } else if (position === ourFeatures.length - 1) {
                        // Top card (moving out)
                        cardStyle = { transform: 'translateY(-100%) scale(0.9)', opacity: 0.6, zIndex: 1, };
                    } else {
                        // Hidden cards
                        cardStyle = { transform: 'translateY(0) scale(0)', opacity: 0, zIndex: 0, };
                    }

                    return (
                        <div key={index} className="absolute w-full transition-all duration-1000 ease-in-out" style={cardStyle}>
                            <Card isFooterBlurred className="border-[1px] border-[#DCDCDC] bg-white rounded-[14px] shadow-none">
                                <div className='p-2 lg:p-3 xl:p-[14px] flex gap-1 md:gap-2 lg:gap-2.5 items-center'>
                                    <div>
                                        <Image src="/Features-Feature-LineBefore.svg" alt="Image" width={24} height={24} className="w-full h-full" />
                                    </div>
                                    <p className='font-semibold text-[14px] lg:text-[16px] xl:text-[18px] leading-[20.96pxpx] lg:leading-[22.96pxpx] xl:leading-[24.96px] tracking-[-0.04em] text-[#71717A]'>
                                        {item.text}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>
            <div className="absolute top-0 py-1 px-4 bg-gradient-to-b from-[#E044FF] to-[#862999] rounded-[6px]">
                <p className="font-normal text-[12px] xl:text-[14px] leading-[16.9px] xl:leading-[18.9px] text-white">BETA</p>
            </div>
        </div>
    )
}

export default FeatureTwo