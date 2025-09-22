'use client'
import React from 'react'
import { Accordion, AccordionItem } from "@heroui/react";
import './Faq.css';

const faqs = [
    {
        question: "lorem ipsum dollo",
        answer: "Tell us your needs, and our smart system will suggest the best cars for you in the UAE.",
    },
    {
        question: "lorem ipsum dollo",
        answer: "Tell us your needs, and our smart system will suggest the best cars for you in the UAE.",
    },
    {
        question: "lorem ipsum dollo",
        answer: "Tell us your needs, and our smart system will suggest the best cars for you in the UAE.",
    },
    {
        question: "lorem ipsum dollo",
        answer: "Tell us your needs, and our smart system will suggest the best cars for you in the UAE.",
    },
];

const Faq = () => {
    return (
        <div>
            <div className='px-3 sm:px-10 md:px-16 lg:px-32 xl:px-40 2xl:px-[200px] py-10 md:py-14 lg:py-[70px] xl:py-[80px] bg-[#FFF8E8]'>
                <div className='flex flex-col gap-6'>
                    <h2 className='font-bold text-[30px] md:text-[45px] leading-[45.75px] md:leading-[60.75px] text-black text-center'>
                        FAQ
                    </h2>
                    <div>
                        <Accordion variant="splitted" className='flex flex-col gap-[18px]'>
                            {faqs.map((item, index) => (
                                <AccordionItem key={index} aria-label="Accordion 1" title={<span className="font-medium text-[18px] md:text-[20px] xl:text-[24px] leading-[23.2px] md:leading-[27.2px] xl:leading-[31.2px] text-black">{item.question}</span>} className='Faq-border Faq-shadow rounded-[14px]'>
                                    <p className='font-normal Normal-text text-[#4D4848]'>
                                        {item.answer}
                                    </p>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
