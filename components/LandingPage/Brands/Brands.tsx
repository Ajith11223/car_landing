'use client'
import React, { useState } from 'react';
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';

const Brands = () => {

    const [selectedItem, setSelectedItem] = useState("Japan");
    const items = ["Japan", "Germany", "USA", "South Korea", "United Kingdom"];

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };

    const japan = [
        { href: "#", logo: "/Brands-Totota-Logo.svg" },
        { href: "#", logo: "/Brands-Honda-Logo.svg" },
        { href: "#", logo: "/Brands-Nissan-Logo.svg" },
        { href: "#", logo: "/Brands-Subaru-Logo.svg" },
        { href: "#", logo: "/Brands-Mazda-Logo.svg" },
    ];

    const germany = [
        { href: "#", logo: "/Brands-Totota-Logo.svg" },
        { href: "#", logo: "/Brands-Honda-Logo.svg" },
        { href: "#", logo: "/Brands-Nissan-Logo.svg" },
        { href: "#", logo: "/Brands-Subaru-Logo.svg" },
        { href: "#", logo: "/Brands-Mazda-Logo.svg" },
    ];

    const usa = [
        { href: "#", logo: "/Brands-Totota-Logo.svg" },
        { href: "#", logo: "/Brands-Honda-Logo.svg" },
        { href: "#", logo: "/Brands-Nissan-Logo.svg" },
        { href: "#", logo: "/Brands-Subaru-Logo.svg" },
        { href: "#", logo: "/Brands-Mazda-Logo.svg" },
    ];

    const southKorea = [
        { href: "#", logo: "/Brands-Totota-Logo.svg" },
        { href: "#", logo: "/Brands-Honda-Logo.svg" },
        { href: "#", logo: "/Brands-Nissan-Logo.svg" },
        { href: "#", logo: "/Brands-Subaru-Logo.svg" },
        { href: "#", logo: "/Brands-Mazda-Logo.svg" },
    ];

    const unitedKingdom = [
        { href: "#", logo: "/Brands-Totota-Logo.svg" },
        { href: "#", logo: "/Brands-Honda-Logo.svg" },
        { href: "#", logo: "/Brands-Nissan-Logo.svg" },
        { href: "#", logo: "/Brands-Subaru-Logo.svg" },
        { href: "#", logo: "/Brands-Mazda-Logo.svg" },
    ];

    return (
        <div className='py-10 md:py-12 lg:py-[60px] xl:py-[70px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px] bg-white'>
            <div className='flex flex-col gap-7 md:gap-8 lg:gap-[38px]'>
                <div className='flex flex-col lg:flex-row gap-7 lg:gap-4 lg:w-full lg:items-center lg:justify-between'>
                    <h3 className='max-w-[270px] md:max-w-[360px] lg:max-w-[430px] font-bold text-[30px] md:text-[40px] xl:text-[48px] leading-[38.8px] md:leading-[48.8px] xl:leading-[60.8px] text-black'>
                        Discover Brands by Country of Origin
                    </h3>
                    <div className="w-fit p-2 xl:p-2.5 flex flex-wrap gap-2.5 items-center bg-[#FFFCE9] rounded-[12px]">
                        {items?.map((item, index) => (
                            <button key={index}
                                className={`py-2.5 xl:py-3 px-2 md:px-4 lg:px-2 xl:px-[22px] font-normal text-[16px] xl:text-[18px] leading-[22.3px] xl:leading-[24.3px] text-center cursor-pointer transform transition-all duration-300 rounded-[8px] ${selectedItem === item
                                    ? "text-white bg-black"
                                    : "text-black hover:bg-[#F3F2DC]"
                                    }`}
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='w-full'>
                    {selectedItem === "Japan" &&
                        <div className='flex w-full justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:gap-[38px]'>
                                {japan.map((item, index) => (
                                    <Link key={index} href={item.href} className='w-full cursor-pointer hover:scale-105 transform transition-all duration-300'>
                                        <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] rounded-[14px] h-full w-full'>
                                            <CardBody className="overflow-visible p-0">
                                                <div className='py-10 flex w-full justify-center'>
                                                    <div className='max-w-[137px] max-h-[112px]'>
                                                        <Image src={item.logo} alt="Logo" width={137} height={112} className='w-full h-full' />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {selectedItem === "Germany" &&
                        <div className='flex w-full justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:gap-[38px]'>
                                {germany.map((item, index) => (
                                    <Link key={index} href={item.href} className='w-full cursor-pointer hover:scale-105 transform transition-all duration-300'>
                                        <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] rounded-[14px] h-full w-full'>
                                            <CardBody className="overflow-visible p-0">
                                                <div className='py-10 flex w-full justify-center'>
                                                    <div className='max-w-[137px] max-h-[112px]'>
                                                        <Image src={item.logo} alt="Logo" width={137} height={112} className='w-full h-full' />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {selectedItem === "USA" &&
                        <div className='flex w-full justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:gap-[38px]'>
                                {usa.map((item, index) => (
                                    <Link key={index} href={item.href} className='w-full cursor-pointer hover:scale-105 transform transition-all duration-300'>
                                        <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] rounded-[14px] h-full w-full'>
                                            <CardBody className="overflow-visible p-0">
                                                <div className='py-10 flex w-full justify-center'>
                                                    <div className='max-w-[137px] max-h-[112px]'>
                                                        <Image src={item.logo} alt="Logo" width={137} height={112} className='w-full h-full' />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {selectedItem === "South Korea" &&
                       <div className='flex w-full justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:gap-[38px]'>
                                {southKorea.map((item, index) => (
                                    <Link key={index} href={item.href} className='w-full cursor-pointer hover:scale-105 transform transition-all duration-300'>
                                        <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] rounded-[14px] h-full w-full'>
                                            <CardBody className="overflow-visible p-0">
                                                <div className='py-10 flex w-full justify-center'>
                                                    <div className='max-w-[137px] max-h-[112px]'>
                                                        <Image src={item.logo} alt="Logo" width={137} height={112} className='w-full h-full' />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    {selectedItem === "United Kingdom" &&
                        <div className='flex w-full justify-center'>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 2xl:gap-[38px]'>
                                {unitedKingdom.map((item, index) => (
                                    <Link key={index} href={item.href} className='w-full cursor-pointer hover:scale-105 transform transition-all duration-300'>
                                        <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] rounded-[14px] h-full w-full'>
                                            <CardBody className="overflow-visible p-0">
                                                <div className='py-10 flex w-full justify-center'>
                                                    <div className='max-w-[137px] max-h-[112px]'>
                                                        <Image src={item.logo} alt="Logo" width={137} height={112} className='w-full h-full' />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands