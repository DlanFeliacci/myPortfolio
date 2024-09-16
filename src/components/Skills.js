import Photoshop from "../assets/PhotoshopLogo.png";
import Illustrator from "../assets/IllustratorLogo.png";
import Cpp from "../assets/Cpp.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import Firebase from "../assets/Firebase.png";
import Figma from "../assets/figma.png";
import Nextjs from "../assets/nextjs.png"
import {GiPlainArrow} from 'react-icons/gi'

const Skills = () => {
  return (
    // 
    <div name='skills' className='w-full h-[screen] sm:h-[700px] bg-[#0a192f] text-gray-300 pb-20 sm:pt-6'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-26 sm:pt-2'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
              <p className='py-4 text-sm sm:text-md md:text-lg'>These are the technologies I have worked with <GiPlainArrow size={20} className='inline mx-1 hover:text-pink-600 lg:animate-bounce' /></p>
          </div>
            {/* Logo Skills */} 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Html} alt="html icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Css} alt="css icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Javascript} alt="javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={React} alt="react icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Nextjs} alt="HTML icon" />
                  <p className='my-4'>NEXT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-14 mx-auto mt-2' src={Firebase} alt="HTML icon" />
                  <p className='my-[18px] '>FIREBASE</p>
              </div>   
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Photoshop} alt="HTML icon" />
                  <p className='my-4'>PHOTOSHOP</p>
              </div>        
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-2' src={Illustrator} alt="HTML icon" />
                  <p className='my-4'>ILLUSTRATOR</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-12 mx-auto mt-2' src={Figma} alt="HTML icon" />
                  <p className='mt-6'>FIGMA</p>
              </div>                        
          </div>
      </div>
    </div>
  );
};

export default Skills;