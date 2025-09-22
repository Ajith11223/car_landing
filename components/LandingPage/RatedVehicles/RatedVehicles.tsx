'use client'
import React from 'react';
import Link from 'next/link';
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

const RatedVehicles = () => {

  const ratedVehicles = [
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
    { href: "#", image: "/RatedVehicles-Car-Image.svg", text: "Honda accord vs toyota camry" },
  ];

  return (
    <div>
      <div className='pb-[100px] sm:pb-[125px] md:pb-[135px] lg:pb-[160px] xl:pb-[165px] 2xl:pb-[185px] bg-white'>
        <div className='py-10 md:py-12 lg:py-[60px] xl:py-[70px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px]'>
          <div className='flex flex-col gap-5 sm:gap-7 xl:gap-[34px]'>
            <div className='flex flex-col sm:flex-row gap-0 sm:gap-5 xl:gap-7 sm:w-full sm:justify-between sm:items-center'>
              <h2 className='max-w-[270px] sm:max-w-full font-bold text-[30px] md:text-[40px] lg:text-[48px] leading-[38.8px] md:leading-[48.8px] lg:leading-[56.8px] text-black'>
                Compare top rated vehicles
              </h2>
              <div className='flex justify-end'>
                <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] Black-border-button'>
                  See More
                </Link>
              </div>
            </div>
            <div className='flex w-full justify-center'>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 xl:gap-10">
                {ratedVehicles.map((item, index) => (
                  <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                    <Card isPressable className='focus:outline-none shadow-none border-[1px] border-[#CBC9C9] bg-white rounded-[14px] h-full w-full'>
                      <CardBody className="overflow-visible p-0">
                        <div className='py-4 xl:py-6 px-2.5 md:px-5 lg:px-7 xl:px-10 flex flex-col gap-2.5'>
                          <div className='max-w-[312px] max-h-[113px] rounded-[14px]'>
                            <Image src={item.image} alt="Image" width={312} height={113} className='w-full h-full rounded-[14px]' />
                          </div>
                          <p className='max-w-[314px] font-bold text-[20px] xl:text-[22px] leading-[23px] md:leading-[25px] text-black line-clamp-2'>
                            {item.text}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatedVehicles
