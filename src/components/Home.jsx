import React from 'react';
import HeroImage from "../assets/heroImage.jpg"; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 sm:pt-[300px] sm:pb-[300px] md:p-0'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-[150px]'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl text-white sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have 2 years of experience building and designing software. Currently, I love to work on web application using technologies like React, Tailwind, Next JS and GraphQL.</p>
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-lg hover:scale-105 duration-300'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                </Link>
            </div>
            </div>
            <div className='pt-[60px] md:p-0'>
                <img src={HeroImage} alt="my profile" className='rounded-2xl h-[330px]  w-[360px] mx-auto md:w-[450px] hover:scale-105 duration-300'/>
            </div>
        </div>
    </div>
  )
} 

export default Home;
