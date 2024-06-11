import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
// import Logo from '../assets/Logo.jpg'
import Logo from '../assets/AdleneRounded.png'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f] pt-4'>

        {/* Container */}
        <div className='max-w-[1100px] mx-auto px-8 pt-26 flex flex-col justify-center h-full text-center gap-7'>
            <div className='w-[200px] mx-auto '>
                <img src={Logo} alt="myPic" className="hover:animate-pulse " />
            </div>
            <p className='text-2xl sm:text-5xl font-bold text-[#F5F5F5] '>Hi, my name is Adlene</p>
            <p className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Welcome to my website</p>
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