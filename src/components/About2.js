import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-[1100px] bg-[#0a192f] text-gray-300'>
        <div className="w-full h-full pt-[150px]">
            <div className='flex flex-col mx-auto items-center w-full md:w-[1100px] h-[300px] pt-[50px] sm:border-emerald-500 sm:rounded-md sm:border-2'>
                <div className='max-w-[1000px] w-full'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                        </p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full p-2'>
                    <div className='sm:text-left text-md font-bold tracking-wider'>
                    <p>
                        I studied in engineering field and graduated in automation and industrial computing at university of Boumerdes,
                        <br /> 
                        Beyond academics, i'am a web developer and i work with React.js building UI interfaces and making my clients happy, i'am always open to learn new skills and master them, i'am a polyglotte, i speak Russian, French, English, and Arabic 
                        <br />
                        I also practice swimming since couple of years now.
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
