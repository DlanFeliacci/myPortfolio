import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
// import { GoArrowUp} from "react-icons/go";
import { Link } from "react-scroll";
import myResume from "../assets/CV_Adlene_English.pdf";
import Adlene from "../assets/Adlene.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="z-10 fixed w-full  h-[80px] flex justify-between items-center px-4 bg-gradient-to-b from-[#0e0821] bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Adlene}
          alt="LogoImg"
          className="hover:animate-pulse ml-6 lg:ml-12"
          style={{ width: "60px" }}
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex font-bold">
        <li className="hover:text-pink-600 duration-300"> 
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="active:scale-95 duration-300 text-emerald-500">
          <a href={myResume} target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        {/* <li className="hover:text-pink-600 duration-300">
          <Link to="home" smooth={true} duration={500}>
            <div className="relative ">
            <GoArrowUp size={60} className="fixed top-[600px] right-[60px]"/>
            </div>
          </Link>
        </li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <Link to="home" smooth={true} duration={500}>
          <li onClick={handleClick} className="py-6 text-4xl">
            Home
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li onClick={handleClick} className="py-6 text-4xl">
            About
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li onClick={handleClick} className="py-6 text-4xl">
            Skills
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li onClick={handleClick} className="py-6 text-4xl">
            Work
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li onClick={handleClick} className="py-6 text-4xl">
            Contact
          </li>
        </Link>
        <Link to="download" smooth={true} duration={500}>
          <li onClick={handleClick} rel="noopener noreferrer" className="py-6 text-4xl">
          <a href={myResume}>Resume</a>
          </li>
        </Link>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="group w-[160px] h-[60px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-2"
              href="https://www.linkedin.com/in/adlene-feliachi/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin{""}
              <FaLinkedin size={30} className="group-hover:animate-wiggle" />
            </a>
          </li>
          <li className="group w-[160px] h-[60px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-2"
              href="https://github.com/DlanFeliacci"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
              <BsGithub size={30} className="group-hover:animate-spin-slow" />      
            </a>
          </li>
          <li className="group w-[160px] h-[60px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-2"
              href="mailto:adlafeliachi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email{" "}
              <HiOutlineMail size={30} className="group-hover:scale-150 duration-1000" />
            </a>
          </li>
          <li className="group w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold pl-2"
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <VscFilePdf size={30} className="group-hover:animate-bounce" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
