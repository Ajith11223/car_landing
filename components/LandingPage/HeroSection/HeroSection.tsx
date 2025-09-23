'use client'
import React from "react";
import Link from "next/link";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div>
  {/* Background if needed */}
  <div className="absolute HeroSection-Bg-Image"></div>
  {/* <div className="absolute"></div> */}

  <div className="pt-[90px] md:pt-[110px] sm:pt-[10px] lg:pt-[120px] pb-[40px]  w-full">
    <div className="grid grid-cols-1 place-items-center">
      <div className="flex flex-col gap-[17px] items-center text-center">
        <p className="w-fit px-2.5 py-1 font-medium Medium-text text-[#4D4848] bg-white rounded-[30px] z-10">
          4.8 Stars
        </p>

        <div className="flex flex-col gap-[32px] z-10 items-center">
          <div className="flex flex-col gap-[14px]">
            <h1 className="flex flex-col font-bold text-[34px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[62px] leading-[40px] sm:leading-[46px] md:leading-[54px] lg:leading-[62px] xl:leading-[68px]">
              <span className="sm:hidden text-black">Xtorq Trusted used cars</span>
              <span className="sm:hidden text-black">
                 
                <span className="bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent">
                Quality Pre-Owned Vehicles.
                </span>
              </span>
              <span className="sm:hidden bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent">
              No Hassle. No Pressure.{" "}
              </span>
              <span className="hidden sm:block text-black">Xtorq Trusted Used Cars</span>
              <span className="hidden sm:block bg-gradient-to-r from-[#EF709B] via-[#FAD872] to-[#FF8989] bg-clip-text text-transparent">
                Quality Pre-Owned Vehicles. No Hassle. No Pressure.
              </span>
            </h1>

            <p className="font-normal Normal-text text-[#4D4848] max-w-[700px] mx-auto">
              Tell us your needs, and our smart system will suggest the best cars for you in the UAE.
            </p>
          </div>

          {/* Buttons (centered) */}
          {/* 
          <div className="flex gap-[13px] items-center justify-center">
            <Link href="/find-car-by-ai" className="w-fit px-[18px] py-3 Black-button">
              🚗 Find My Car
            </Link>
            <Link
              href="#"
              className="w-fit px-[18px] py-3 border border-[#BDB5B5] font-normal Normal-text text-black hover:text-white hover:bg-black transition-all duration-300 rounded-[8px] text-center cursor-pointer"
            >
              How It Works
            </Link>
          </div> 
          */}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default HeroSection;
