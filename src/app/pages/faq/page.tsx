import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className='my-20'>
        <div className='text-center'>
            <h1 className='text-lg lg:text-2xl 2xl:text-4xl font-semibold'>Questions Look Here</h1>
            <p className='text-base text-[#9F9F9F] leading-6 mt-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            </p>
        </div>
        <div className='w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mx-auto mt-10 gap-y-6 gap-x-4 px-4'>
            <FaqCard question="What types of chairs do you offer?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
            <FaqCard question="How can we get in touch with you?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
            <FaqCard question="Do your chairs come with a warranty?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
            <FaqCard question="What will be delivered? And When?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
            <FaqCard question="Can I try a chair before purchasing?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
            <FaqCard question="How do I clean and maintain my Comforty chair?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"/>
        </div>
    </div>
  )
}

export default Faq;

interface FaqCardProps {
  question: string;
  answer: string;
}

export const FaqCard = ({ question, answer }: FaqCardProps) => {
   return( 
   <div className='relative bg-[#F7F7F7] w-full p-6 space-y-4'>
        <h2 className='text-base md:text-lg font-bold mr-2'>{question}</h2>
        <p className='text-base leading-6'>{answer}</p>
        <FaPlus className='absolute right-2 top-3 ' aria-hidden="true" />
    </div>)
}
