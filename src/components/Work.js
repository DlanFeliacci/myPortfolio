import Slider from "../assets/slider.png";
import RealEstate from "../assets/Real-Estate.png";
import aimtech from "../assets/aimtech.png";
import draftTemplate from "../assets/draft-template.jpg";
import Portfolio from "../assets/portfolio.png";
import Weather from "../assets/weather-app.jpg";
import Expenses from "../assets/expenses-tracker.jpg";
import Behance from "../assets/behance.png";
import DigitalSmile from "../assets/DigitalSmile.png";
import decoration from "../assets/decoration.png";
import View from "../assets/view.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto sm:h-[1200px] bg-[#0a192f] text-gray-300 p-2">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-auto pt-18">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Grid item 1 */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Portfolio App
              </span>
              
            </div>
          </div>

          {/* Grid Item 2*/}
          <div
            style={{ backgroundImage: `url(${DigitalSmile})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Digital Smile Dz
              </span>
              <div>
                <a 
                href="https://digital-smile.vercel.app/" 
                className="flex justify-center pt-4"
                target= "_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 3 */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div>
                <a 
                href="https://meteo-adlene.web.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 4 */}
          <div
            style={{ backgroundImage: `url(${Expenses})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Expenses calculator App
              </span>
              <div>
                <a 
                href="https://expense-calculator-sigma.vercel.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          
 
          {/* Grid item 5 */}
          <div
            style={{ backgroundImage: `url(${aimtech})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Company aim tech website
              </span>
              <div>
                <a 
                href="https://aimtech-move.com/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 6 */}
          <div
            style={{ backgroundImage: `url(${draftTemplate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Draft template
              </span>
              <div>
                <a 
                href="https://draft-self.vercel.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 5 */}
          {/* <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md hover:border-2 flex justify-center items-center mx-auto content-div"
          > */}
            {/* Hover Effect */}
            {/* <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Real Estate website
              </span>
              <div>
                <a 
                href="https://real-estate-agence.web.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    <img src={View} alt="" width={40} />
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        

          {/* Grid Item 7 */}
          <div
            // style={{ backgroundImage: `url(${Slider})` }}
            className="shadow-lg shadow-[#705693] group container rounded-md hover:border-2 border-2 flex justify-center items-center mx-auto content-iv">
            {/* Hover Effect */}
            <div className="opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider animate-pulse">
                Graphic Design Gallery
              </span>
              <div>
                <a 
                href="https://splendorous-slider-e0c685.netlify.app/" 
                className="flex justify-center pt-4"
                target= "_blank"
                rel="noopener noreferrer">
                  <button className="tracking-wider rounded-lg px-4 py-2 m-2 text-[#0a192f] hover:text-black font-bold text-lg bg-gray-300 hover:bg-white">
                    Click me
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="flex flex-col">
          <div className="flex justify-center"><img src={decoration} alt="" className="w-[350px]"/></div>
          <div className="mx-auto  text-xl font-bold hover:text-pink-600 duration-300">
            <a href="https://www.behance.net/adlenefeliachi" target="_blank" rel="noopener noreferrer">
              <img className="w-24 border-black fill-gray-500 hover:scale-125 duration-700" src={Behance} alt="Behance icon" />
            </a>
          </div>
          {/* <div className="mx-auto mt-12 text-xl font-bold hover:text-pink-600 duration-300">
            <a href="https://www.behance.net/adlenefeliachi" target="_blank" rel="noopener noreferrer">
              <img className="w-20 border-black fill-gray-500 hover:scale-125 duration-700" src={Behance} alt="Behance icon" />
            </a>
          </div> */}
          <div className="flex justify-center"><img src={decoration} alt="" className="w-[350px]"/></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
