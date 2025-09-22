import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import HowWorks from './HowWorks/HowWorks'
import Faq from './Faq/Faq'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import RatedVehicles from './RatedVehicles/RatedVehicles'
import TestDrive from './TestDrive/TestDrive'
import FindCars from './FindCars/FindCars'
import Financing from './Financing/Financing'
import Brands from './Brands/Brands'
import BuyingPower from './BuyingPower/BuyingPower'
import Features from './Features/Features'

const LandingPage = () => {
    return (
        <div className='bg-white'>
            <div>
                <HeroSection />
            </div>
            <div>
                {/* <ImageCarousel /> */}
            </div>
            <div>
                <WhyChooseUs />
            </div>
            <div>
                {/* <HowWorks /> */}
            </div>
            <div>
                <Features />
            </div>
            <div>
                {/* <BuyingPower /> */}
            </div>
            {/* <div>
                <WhyChooseUs />
            </div> */}
            <div>
                <Brands />
            </div>
            <div>
                {/* <Financing /> */}
            </div>
            <div>
                {/* <FindCars /> */}
            </div>
            <div>
                {/* <RatedVehicles /> */}
            </div>
            <div>
                {/* <TestDrive /> */}
            </div>
            <div>
                <Faq />
            </div>
        </div>
    )
}

export default LandingPage
