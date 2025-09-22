import React from 'react'
import { Navbar as HeroUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem, } from "@heroui/navbar";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
];

const Navbar = () => {
    return (
        <div className='relative'>
            <div className='absolute'>
                <Image src="/Header-Round-Shape.avif" alt="Blog" width={614} height={614} />
            </div>
            <div className='fixedNavbar mt-4 md:mt-6 lg:mt-7 mx-3 sm:mx-5 md:mx-[30px] lg:mx-[50px] xl:mx-[80px] 2xl:mx-[100px]'>
                <HeroUINavbar maxWidth="full" position="sticky" className='bg-black rounded-[8px]'>
                    <NavbarContent>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex md:gap-7 lg:gap-[45px] items-center'>
                                <NavbarBrand as="li" className="gap-3 max-w-fit">
                                    <Link href="/" className="cursor-pointer">
                                        <Image src="/xtr.png" alt="Blog" width={104} height={55} />
                                    </Link>
                                </NavbarBrand>
                                <NavbarItem className="hidden lg:flex">
                                    <div className='flex md:gap-4 lg:gap-6 items-center'>
                                        {navItems.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                <p className='font-bold text-[18px] leading-[24.3px] text-white underline-animation'>
                                                    {item.name}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </NavbarItem>
                            </div>
                            <NavbarItem className="hidden lg:flex"> 
                                <div className='flex gap-[13px] items-center'>
                                    <Link href="#" className='w-fit p-2.5 border-[1px] border-white font-normal text-[18px] leading-[21.78px] text-black hover:text-white bg-white hover:bg-black transform transition-all duration-300 rounded-[8px] text-center cursor-pointer'>
                                        🚗 Find My Car
                                    </Link>
                                    {/* <Link href="#" className='w-fit p-2.5 border-[1px] border-white font-normal text-[18px] leading-[21.78px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px] text-center cursor-pointer'>
                                        Login
                                    </Link> */}
                                </div>
                            </NavbarItem>
                        </div>
                    </NavbarContent>

                    <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                        <NavbarMenuToggle className='text-white' />
                    </NavbarContent>

                    <NavbarMenu className='-mt-16 bg-black'>
                        <div className='mt-24 flex flex-col gap-5 ml-2 sm:ml-3 md:ml-7'>
                            <NavbarItem >
                                <div className='flex flex-col gap-3'>
                                    {navItems.map((item, index) => (
                                        <Link key={index} href={item.href}>
                                            <p className='font-bold text-[18px] leading-[24.3px] text-white'>
                                                {item.name}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </NavbarItem>
                            <NavbarItem>
                                <div className='flex flex-col gap-5'>
                                    <Link href="#" className='w-fit p-2.5 border-[1px] border-white font-normal text-[18px] leading-[21.78px] text-black hover:text-white bg-white hover:bg-black transform transition-all duration-300 rounded-[8px] text-center cursor-pointer'>
                                        🚗 Find My Car
                                    </Link>
                                    <Link href="#" className='w-[148px] p-2.5 border-[1px] border-white font-normal text-[18px] leading-[21.78px] text-white hover:text-black hover:bg-white transform transition-all duration-300 rounded-[8px] text-center cursor-pointer'>
                                        Login
                                    </Link>
                                </div>
                            </NavbarItem>
                        </div>
                    </NavbarMenu>
                </HeroUINavbar>
            </div>
        </div>
    )
}

export default Navbar