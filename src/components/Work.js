import Slider from "../assets/slider-peter.png";
import Work1 from "../assets/myWork1.png";
import Work2 from "../assets/myWork2.png";
import Weather from "../assets/weather-app.jpg";
import Behance from "../assets/behance.png";


const Work = () => {
  return (
    <div name="work" className="w-full h-[screen] sm:h-[1000px] bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-18">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Slider})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Slider Pictures
              </span>
              <div>
                <a 
                href="https://splendorous-slider-e0c685.netlify.app/" 
                className="flex justify-center pt-4"
                target= "_blank"
                rel="noopener noreferrer">
                  <button className="rounded-lg px-4 py-2 m-2 text-[#0a192f] font-bold text-lg bg-white hover:animate-ping">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 2 */}
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Portfolio App
              </span>
              <div>
                <a 
                href="https://myportfolio-adlene.web.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="rounded-lg px-4 py-2 m-2 text-[#0a192f] font-bold text-lg bg-white">
                    You are in...
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 3 */}
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Real Estate website
              </span>
              <div>
                <a 
                href="https://real-estate-agence.web.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="rounded-lg px-4 py-2 m-2 text-[#0a192f] font-bold text-lg bg-white hover:animate-ping">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 4 */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div>
                <a 
                href="https://meteo-adlene.web.app/" 
                className="flex justify-center pt-4"
                target="_blank"
                rel="noopener noreferrer">
                  <button className="rounded-lg px-4 py-2 m-2 text-[#0a192f] font-bold text-lg bg-white hover:animate-ping">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto mt-10 text-xl font-bold hover:text-pink-600 duration-300">
          <a href="https://www.behance.net/adlenefeliachi" target="_blank" rel="noopener noreferrer">
            <img className="w-20 fill-gray-500" src={Behance} alt="Behance icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
