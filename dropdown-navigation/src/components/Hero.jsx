import React from "react";
import Img from "../images/image-hero-desktop.png";
import ImgMobile from "../images/image-hero-mobile.png";
import Databiz from '../images/client-databiz.svg';
import Audiophile from '../images/client-audiophile.svg';
import Meet from '../images/client-meet.svg';
import Maker from '../images/client-maker.svg'

const Hero = () => {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto w-100 flex flex-col-reverse lg:flex-row  items-center">
        <div className="lg:w-1/2 w-full px-4 mx-10">
          <h1 className="lg:text-6xl text-4xl lg:text-left text-center py-10 font-extrabold font-sans text-bold">
            Make remote work
          </h1>
          <p className="text-gray-500 font-semibold text-center lg:text-left ">
            Get your team in sync. No matter ther location
            Streamline processes, create team rituals, and get the job done.
            watch productivity soar.
          </p>

          <button className={btnStyle}>Learn More</button>

          <button className={btnStyleMobile}>Learn More</button>

          <div className="mx-atuo flex sm:justify-center lg:justify-between mt-14 lg:mt-24 items-center space-x-8">
            <img src={Databiz} className="w-20" alt="data-biz" />
            <img src={Audiophile} className="w-20" alt="audiophile" />
            <img src={Meet} className="w-20" alt="meet" />
            <img src={Maker} className="w-20" alt="marker" />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex w-1/2  px-4">
            <img src={Img} alt="" className="w-11/12 p-5 mx-3"/>
        </div>
        {/* Mobile */}
        <div className="lg:hidden flex w-full">
            <img src={ImgMobile} alt="" className="w-100"/>
        </div>
      </div>
    </div>
  );
};
const btnStyle = `lg:flex hidden border rounded-lg text-black-500 py-2 px-4 hover:bg-white bg-black mt-12 border-black hover:text-black text-white font-semibold`;
const btnStyleMobile = `mx-auto lg:hidden flex border rounded-lg text-black-500 py-2 px-4 hover:bg-white bg-black mt-6 border-black hover:text-black text-white font-semibold`;
export default Hero;
