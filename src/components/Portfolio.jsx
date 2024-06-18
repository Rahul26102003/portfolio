import React from 'react';
import Study from '../assets/portfolio/Study.jpg';
import Swiggy from '../assets/portfolio/Swiggy.jpg';
import Movie from '../assets/portfolio/Movie.webp';
import News from '../assets/portfolio/News.jpg';
import Food from '../assets/portfolio/Food.jpg';
import Models from '../assets/portfolio/Models.jpg';
import Spotify1 from '../assets/portfolio/Spotify1.jpg';
import Shopping from '../assets/portfolio/Shopping.jpg';
import Joke from '../assets/portfolio/Joke.jpg';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Study,
            href: "https://github.com/Rahul26102003/Online_Courses.git",
            name: "Online Tutorials"

        },
        {
            id: 2,
            src: Swiggy,
            href: "https://github.com/Rahul26102003/Swiggy_Clone_Project.git",
            name: "Swiggy Clone"
        },
        {
            id: 3,
            src: Movie,
            href: "https://github.com/Rahul26102003/Netflix_Clone.git",
            name: "Netflix Clone"
        },
        {
            id: 4,
            src: News,
            href: "https://github.com/Rahul26102003/News-website.git",
            name: "News Website"
        },
        {
            id: 5,
            src: Food,
            href: "https://github.com/Rahul26102003/Food-Website.git",
            name: "Food Website"
        },
        {
            id: 6,
            src: Models,
            href: "https://github.com/Rahul26102003/Modelling-Website.git",
            name: "Modelling Website"
        },
        {
            id: 7,
            src: Spotify1,
            href: "https://github.com/Rahul26102003/Spotify-Clone.git",
            name: "Spotify Clone"
        },
        {
            id: 8,
            src: Shopping,
            href: "https://github.com/Rahul26102003/Online-Shopping.git",
            name: "Online Shopping"
        },
        {
            id: 9,
            src: Joke,
            href: "https://github.com/Rahul26102003/Javascript-Projects.git",
            name: "Joke Generator"
        }
    ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[400px] pb-[200px]'>
        <div className='max-w-screen-lg p-7 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src, href, name }) => (
                <div className='shadow-md shadow-gray-500 rounded-lg'>
                <img key={id} src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-[180px] w-[500px]' />
                <div className='flex items-center justify-center'>
                    <h2 className='px-1 pt-2 m-1 duration-200 font-bold text-[25px]'>{name}</h2> 
                </div>
                <div className='flex items-center justify-center'>
                <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white w-fit px-4 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-lg duration-200 hover:scale-105'
                >
                <FaGithub className='mr-2' /> Source Code
                </a>
                </div>
            </div>      
            ))}
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
