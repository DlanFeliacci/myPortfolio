import { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { FaBars, FaTimes, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { VscFilePdf } from "react-icons/vsc";
// import { GoArrowUp} from "react-icons/go";
import { Link } from "react-scroll";
import myResume from "../assets/CV_Adlene_English.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="z-10 fixed w-full  h-[80px] flex justify-between items-center px-4 bg-[#0a192c] text-gray-300">
      <div>
        {/* <img
          src={Logo}
          alt="LogoImg"
          className="hover:animate-pulse rounded-[50%] ml-4"
          style={{ width: "60px" }}
        /> */}
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
        {!nav ? <FaBars /> : <FaTimes />}
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
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.linkedin.com/in/adlene-feliachi-520512171/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin{" "}
              <FaLinkedin size={30} className="group-hover:animate-spin" />
            </a>
          </li>
          <li className="group w-[160px] h-[60px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.facebook.com/madagascaaar/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook{" "}
              <FaFacebook size={30} className="group-hover:animate-spin" />
            </a>
          </li>
          <li className="group w-[160px] h-[60px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="mailto:adlafeliachi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email{" "}
              <HiOutlineMail size={30} className="group-hover:animate-bounce" />
            </a>
          </li>
          <li className="group w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
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
