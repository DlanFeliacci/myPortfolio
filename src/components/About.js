import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-[730px] bg-[#0a192f] text-gray-300'>
        <div className="w-full h-full pt-[50px] sm:pt-[200px]  ">
            <div className='flex flex-col mx-auto items-center w-full xl:w-[1100px] sm:w-[625px] sm:h-[350px] pt-[35px] sm:border-emerald-500 sm:rounded-md sm:border-2  p-4'>
                <div className='max-w-[1000px] w-full'>
                    <div className='sm:text-left pb-6 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                        </p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full px-6'>
                    <div className='sm:text-left  font-bold tracking-widest space-y-4'>
                    <p className="leading-7 text-[13px] xl:text-[16px]">
                        Born in Kharkiv (Ukraine), multi cultural background allowed me to speak 4 languages: Russian-English-French-Arabic.
                        <br />
                        I studied in engineering field and graduated in automation and industrial computing at university of Boumerdes.
                        <br />
                        Aside from academics, i'am a web developer and i work with Next.js building UI interfaces and satisfy my clients. i do also graphic design, making logos, flyers, posters, youtube thumbnails using photoshop and illustrator.
                        As a hobby i practice swimming since couple of years now.
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
