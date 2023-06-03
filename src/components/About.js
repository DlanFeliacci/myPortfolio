import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-[700px] bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
              <p>Hi, nice to meet you and welcome to my website.</p>
            </div>
            <div>
              <p className="text-justify">My curiousity about the front end started back in my student days, i begun learning html, css and javascript,
                 then my interest evolved into react.js, you can download my resume to see more information about my route. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
