'use client'
import React, { useState } from 'react';
import './FindCars.css';
import Link from 'next/link';
import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

const FindCars = () => {

  const [selectedItem, setSelectedItem] = useState("Luxury Sedans");
  const items = ["Luxury Sedans", "Compact City Cars", "EV s", "Family-Friendly SUVs", "Off-Road Vehicles"];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const luxurySedans = [
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Luxusry Sedans", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Luxusry Sedans", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Luxusry Sedans", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Luxusry Sedans", model: "GT-Line", number: "12345" },
  ];

  const compactCityCars = [
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Compact City Cars", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Compact City Cars", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Compact City Cars", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Compact City Cars", model: "GT-Line", number: "12345" },
  ];

  const evs = [
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Ev s", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Ev s", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Ev s", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Ev s", model: "GT-Line", number: "12345" },
  ];

  const familyFriendlySuv = [
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Family-Friendly SUVs", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Family-Friendly SUVs", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Family-Friendly SUVs", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Family-Friendly SUVs", model: "GT-Line", number: "12345" },
  ];

  const offRoadVehicles = [
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Off-Road Vehicles", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Off-Road Vehicles", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Off-Road Vehicles", model: "GT-Line", number: "12345" },
    { href: "#", image: "/FindCar-Car-Image.svg", vehicle: "Off-Road Vehicles", model: "GT-Line", number: "12345" },
  ];

  return (
    <div className='relative overflow-hidden z-0'>
      <div className='absolute FindCar-Bg-Image'></div>
      <div className='py-10 md:py-12 lg:py-[60px] xl:py-[70px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px] bg-[#131111]'>
        <div className='flex flex-col gap-7 md:gap-8 lg:gap-[34px]'>
          <h3 className='px-5 sm:px-0 font-bold text-[30px] md:text-[40px] lg:text-[48px] leading-[38.8px] md:leading-[48.8px] lg:leading-[60.8px] text-white text-center'>
            Find Cars That Fit Your Lifestyle
          </h3>
          <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
            <div className="w-fit p-2 xl:p-2.5 flex flex-wrap gap-2.5 xl:gap-3 items-center bg-[#FFFCE9] rounded-[12px]">
              {items?.map((item, index) => (
                <button key={index}
                  className={`py-2.5 lg:py-3 px-2 lg:px-[18px] font-normal text-[16px] xl:text-[18px] leading-[22.3px] xl:leading-[24.3px] text-center cursor-pointer transform transition-all duration-300 rounded-[8px] ${selectedItem === item
                    ? "text-white bg-black"
                    : "text-black hover:bg-[#F3F2DC]"
                    }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className='w-full'>
              {selectedItem === "Luxury Sedans" &&
                <div className='flex w-full justify-center'>
                  <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
                    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 xl:gap-7 2xl:gap-[38px]'>
                      {luxurySedans.map((item, index) => (
                        <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                          <Card isPressable className='focus:outline-none shadow-none border-none bg-[#6156564F] rounded-[16px] h-full w-full'>
                            <CardBody className="overflow-visible p-0">
                              <div className='p-3 flex flex-col gap-2.5'>
                                <div className='border-[1px] border-[#CBC9C9] max-w-[280px] max-h-[229px] rounded-[14px]'>
                                  <Image src={item.image} alt="Image" width={280} height={229} className='w-full h-full rounded-[14px]' />
                                </div>
                                <div className='flex flex-col'>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.vehicle}
                                  </p>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.model}
                                  </p>
                                </div>
                                <p className='font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.number}
                                </p>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] border-[1px] border-white font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px]'>
                      See More
                    </Link>
                  </div>
                </div>
              }
              {selectedItem === "Compact City Cars" &&
                <div className='flex w-full justify-center'>
                  <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
                    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 xl:gap-7 2xl:gap-[38px]'>
                      {compactCityCars.map((item, index) => (
                        <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                          <Card isPressable className='focus:outline-none shadow-none border-none bg-[#6156564F] rounded-[16px] h-full w-full'>
                            <CardBody className="overflow-visible p-0">
                              <div className='p-3 flex flex-col gap-2.5'>
                                <div className='border-[1px] border-[#CBC9C9] max-w-[280px] max-h-[229px] rounded-[14px]'>
                                  <Image src={item.image} alt="Image" width={280} height={229} className='w-full h-full rounded-[14px]' />
                                </div>
                                <div className='flex flex-col'>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.vehicle}
                                  </p>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.model}
                                  </p>
                                </div>
                                <p className='font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.number}
                                </p>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] border-[1px] border-white font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px]'>
                      See More
                    </Link>
                  </div>
                </div>
              }
              {selectedItem === "EV s" &&
                <div className='flex w-full justify-center'>
                  <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
                    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 xl:gap-7 2xl:gap-[38px]'>
                      {evs.map((item, index) => (
                        <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                          <Card isPressable className='focus:outline-none shadow-none border-none bg-[#6156564F] rounded-[16px] h-full w-full'>
                            <CardBody className="overflow-visible p-0">
                              <div className='p-3 flex flex-col gap-2.5'>
                                <div className='border-[1px] border-[#CBC9C9] max-w-[280px] max-h-[229px] rounded-[14px]'>
                                  <Image src={item.image} alt="Image" width={280} height={229} className='w-full h-full rounded-[14px]' />
                                </div>
                                <div className='flex flex-col'>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.vehicle}
                                  </p>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.model}
                                  </p>
                                </div>
                                <p className='font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.number}
                                </p>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] border-[1px] border-white font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px]'>
                      See More
                    </Link>
                  </div>
                </div>
              }
              {selectedItem === "Family-Friendly SUVs" &&
                <div className='flex w-full justify-center'>
                  <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
                    <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 xl:gap-7 2xl:gap-[38px]'>
                      {familyFriendlySuv.map((item, index) => (
                        <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                          <Card isPressable className='focus:outline-none shadow-none border-none bg-[#6156564F] rounded-[16px] h-full w-full'>
                            <CardBody className="overflow-visible p-0">
                              <div className='p-3 flex flex-col gap-2.5'>
                                <div className='border-[1px] border-[#CBC9C9] max-w-[280px] max-h-[229px] rounded-[14px]'>
                                  <Image src={item.image} alt="Image" width={280} height={229} className='w-full h-full rounded-[14px]' />
                                </div>
                                <div className='flex flex-col'>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.vehicle}
                                  </p>
                                  <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                    {item.model}
                                  </p>
                                </div>
                                <p className='font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.number}
                                </p>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] border-[1px] border-white font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px]'>
                      See More
                    </Link>
                  </div>
                </div>
              }
              {selectedItem === "Off-Road Vehicles" &&
                <div className='flex w-full justify-center'>
                <div className='flex flex-col gap-10 xl:gap-[50px] items-center'>
                  <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 xl:gap-7 2xl:gap-[38px]'>
                    {offRoadVehicles.map((item, index) => (
                      <Link key={index} href={item.href} className='cursor-pointer hover:scale-105 transform transition-all duration-300'>
                        <Card isPressable className='focus:outline-none shadow-none border-none bg-[#6156564F] rounded-[16px] h-full w-full'>
                          <CardBody className="overflow-visible p-0">
                            <div className='p-3 flex flex-col gap-2.5'>
                              <div className='border-[1px] border-[#CBC9C9] max-w-[280px] max-h-[229px] rounded-[14px]'>
                                <Image src={item.image} alt="Image" width={280} height={229} className='w-full h-full rounded-[14px]' />
                              </div>
                              <div className='flex flex-col'>
                                <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.vehicle}
                                </p>
                                <p className='font-black text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                  {item.model}
                                </p>
                              </div>
                              <p className='font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white line-clamp-1'>
                                {item.number}
                              </p>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  <Link href="#" className='w-fit py-2.5 md:py-3 px-[18px] border-[1px] border-white font-normal text-[16px] md:text-[18px] leading-[22.3px] md:leading-[24.3px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px]'>
                    See More
                  </Link>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindCars