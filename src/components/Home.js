import {HiArrowNarrowRight} from 'react-icons/hi'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import SplitType from "split-type";
import {Link} from 'react-scroll'
// import Logo from '../assets/Logo.jpg'
import Logo from '../assets/me_turkey.png'

const Home = () => {

    //Refs
    const lettersRef = useRef([]);
    const welcome = useRef(null)
    const cursorRef = useRef(null)
    lettersRef.current = []

    //text
    const lettersHi = "Hii, I'am Adlene";

    // State for typed letters
    const [typedLetters, setTypedLetters] = useState([])


    useEffect(() => {
    // 1️⃣ Typewriter effect for Hi
    let index = 0;
    const interval = setInterval(() => {
    setTypedLetters(prev => [...prev, lettersHi[index]]);
    index++;
    if (index >= lettersHi.length) {
        clearInterval(interval);

        // Fade out the cursor
        if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.5 });
        }
    }
    }, 120);

    // 2️⃣ SplitType for welcome text
    const split = new SplitType(welcome.current, { types: "chars" });

    gsap.from(lettersRef.current, {
      opacity: 0,
      y: 0,
      duration: 0.05,
      ease: "none",
      stagger: 0.08
    });

    gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: -60,
        duration: 1.6,
        ease: "back.out(1.7)",
        stagger: 0.03,
        delay: 2
    });

    gsap.to(welcome.current, {
        rotate: 2,
        duration: 5.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay:2
    });
    return () => clearInterval(interval); // ✅ cleanup if component unmounts
}, []);

  return (
    <div name="home" className='w-full h-screen bg-[#0a192f] pt-4'>

        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 pt-26 flex flex-col justify-center h-full text-center gap-7'>
            <div className='w-[200px] mx-auto '>
                <img src={Logo} alt="myPic" className="hover:animate-pulse " />
            </div>
             <p className='text-2xl sm:text-5xl font-bold text-[#F5F5F5]'>
                {typedLetters.map((char, i) => (
                    <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
                <span ref={cursorRef} className="ml-1 animate-blink">|</span>
            </p>
            <p ref={welcome} className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Welcome to my portfolio website</p>
            {/* <p className='md:text-2x1 sm:text-4xl font-bold text-pink-600'>& also</p>
            <p className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>a Front End Developer.</p> */}
            <div className='pt-8 flex justify-center items-center'>
            
                <div className='flex gap-8'>
                <Link to="work" smooth={true}  duration={500}>
                    <button className='text-white group border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-600 duration-300 hover:border-pink-600'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300 ml-2'>
                            <HiArrowNarrowRight className='ml-3 ' size={20}/>
                        </span>
                    </button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 duration-300 hover:border-green-600'>
                        Hire me 
                    </button>
                </Link>
                </div>
            
                
            </div>
        </div>

    </div>
  )
}

export default Home