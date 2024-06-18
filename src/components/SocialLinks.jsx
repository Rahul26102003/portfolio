import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            name: "Github",
            icon: <FaGithub size={30}/>,
            hyperreference: "https://Github.com/Rahul26102003"
        },
        {
            id: 2,
            name: "LinkedIn",
            icon: <FaLinkedin size={30}/>,
            hyperreference: "https://Linkedin.com"
        },
        {
            id: 3,
            name: "Mail",
            icon: <HiOutlineMail size={30}/>,
            hyperreference: "mailto:sharmarahul@gmail.com"
        },
        {
            id: 4,
            name: "Resume",
            icon: <BsFillPersonLinesFill size={30}/>,
            hyperreference: "/resume.pdf",
            download: true
        }
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({ id, name, icon, hyperreference, download}) => (
                <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]'><a className='flex justify-between items-center w-full text-white' href={hyperreference} download={download} target='_blank' rel='noreferrer'>{name}{icon}</a></li>
            ))} 
        </ul>
    </div>
  )
}

export default SocialLinks;
