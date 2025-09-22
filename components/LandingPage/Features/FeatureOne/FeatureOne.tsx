'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@heroui/react";

const carsCarousel = [
    { image: "/Features-Car-ImageOne.svg" },
    { image: "/Features-Car-ImageTwo.svg" },
    { image: "/Features-Car-ImageThree.svg" },
];

const FeatureOne = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carsCarousel.length);
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, [carsCarousel.length]);

    return (
        <div className="h-[220px] w-full lg:h-[250px] xl:h-[280px] overflow-hidden relative flex items-center justify-center z-50">
            <div className="relative h-full w-full flex justify-center items-center">
                {carsCarousel.map((item, index) => {
                    // Calculate the position of each card
                    let position = (index - currentIndex + carsCarousel.length) % carsCarousel.length;

                    let cardStyle = {};
                    if (position === 0) {
                        // Center card
                        cardStyle = { transform: 'translateX(0) scale(1.35)', opacity: 1, zIndex: 2, };
                    } else if (position === 1) {
                        // Bottom card (next to be centered)
                        cardStyle = { transform: 'translateX(80%) scale(0.9)', opacity: 0.6, zIndex: 1, };
                    } else if (position === carsCarousel.length - 1) {
                        // Top card (moving out)
                        cardStyle = { transform: 'translateX(-80%) scale(0.9)', opacity: 0.6, zIndex: 1, };
                    } else {
                        // Hidden cards
                        cardStyle = { transform: 'translateX(0) scale(0)', opacity: 0, zIndex: 0, };
                    }

                    return (
                        <div key={index} className="absolute w-fit transition-all duration-1000 ease-in-out" style={cardStyle}>
                            <Card isFooterBlurred className="border-none shadow-none bg-transparent p-0">
                                <div className="bg-transparent">
                                    <Image src={item.image} alt="Image" width={184} height={180} className="w-[130px] lg:w-[150px] xl:w-[184px]" />
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FeatureOne