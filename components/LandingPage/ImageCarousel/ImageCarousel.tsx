'use client'
import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";
import Image from "next/image";

// const cars = [
//   { image: "/ImageCarousel-Car-One.avif" },
//   { image: "/ImageCarousel-Car-One.avif" },
//   { image: "/ImageCarousel-Car-One.avif" },
//   { image: "/ImageCarousel-Car-One.avif" },
// ];

const ImageCarousel = () => {

  // useEffect(() => {
  //   const slider = new Glide(".glide-05", {
  //     type: "carousel",
  //     focusAt: "center",
  //     perView: 1,
  //     autoplay: 3000,
  //     animationDuration: 700,
  //     gap: 0,
  //     classNames: {
  //       nav: {
  //         active: "[&>*]:bg-wuiSlate-700",
  //       },
  //     },
  //     breakpoints: {
  //       1024: {
  //         perView: 1,
  //       },
  //       640: {
  //         perView: 1,
  //       },
  //     },
  //   } as any).mount()

  //   return () => {
  //     slider.destroy()
  //   }
  // }, [])

  return (
    <div>
      {/* <div className="glide-05 relative w-full">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {cars.map((item, index) => (
              <li key={index}>
                <Image src={item.image} alt="Car" width={1481} height={431.54} className="w-full h-full" />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <Image src="/ImageCarousel-Car-One.avif" alt="Car" width={1481} height={431.54} className="w-full h-full" />
    </div>
  )
}

export default ImageCarousel
