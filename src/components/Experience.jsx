import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import Mongo from '../assets/portfolio/Mongo.webp';
import SQL from '../assets/portfolio/SQL.webp';
import bootstrap from '../assets/portfolio/bootstrap.webp';
import php from '../assets/portfolio/php.png';


const Experience = () => {

    const experience = [

        {
            id: 1,
            src: html,
            name: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            name: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            name: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: react,
            name: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: nextjs,
            name: "Next JS",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: tailwind,
            name: "Tailwind",
            style: "shadow-white"
        },
        {
            id: 7,
            src: bootstrap,
            name: "Bootstrap",
            style: "shadow-pink-600"
        },
        {
            id: 8,
            src: github,
            name: "GitHub",
            style: "shadow-red-500"
        },
        {
            id: 9,
            src: node,
            name: "Node JS",
            style: "shadow-yellow-300"
        },
        {
            id: 10,
            src: Mongo,
            name: "Mongo DB",
            style: "shadow-pink-400"
        },
        {
            id: 11,
            src: SQL,
            name: "My SQL",
            style: "shadow-gray-400"
        },
        {
            id: 11,
            src: php,
            name: "PHP",
            style: "shadow-blue-500"
        }
    ];
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[800px] pb-[300px]'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>There are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {experience.map(({ id, src, name, style }) => (
                    <div className={`shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}>
                        <img key={id} className="w-20 mx-auto" src={src} alt="" />
                        <p className='mt-4 font-bold'>{name}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Experience;
