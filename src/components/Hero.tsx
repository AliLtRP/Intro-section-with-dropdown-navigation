import databiz from "../assets/client-databiz.svg";
import audip from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
import sideImage from "../assets/image-hero-desktop.png";
import sideImageMobile from "../assets/image-hero-mobile.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] justify-center min-h-[90vh] flex sm:flex-row flex-col-reverse bg-[]">
        <div className="basis-[50%]">
          <div className="w-full h-full flex flex-col justify-start gap-10 text-start text-3xl font-bold text-[#141414]">
            <p className="w-full flex sm:flex-col gap-2 justify-center sm:gap-10 mt-10 sm:mt-36 sm:text-[70px] text-[50px]">
              <span>Make</span> remote work
            </p>

            <div className="flex flex-col items-center sm:items-start text-[16px] line font-bold text-[#696969df]">
              <p className="sm:my-10 sm:mt-5 mt-[-12px] mb-5 w-[75%] leading-6 text-center sm:text-start">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals and watch productivitysoar.
              </p>

              <button className="max-w-fit bg-black px-8 py-2 text-[#fff] text-md font-bold rounded-2xl">
                Learn more
              </button>
            </div>

            <div className="w-full mt-1 sm:mt-12 sm:mb-0 mb-4 flex justify-center sm:justify-start gap-4">
              <img src={databiz} alt="" />
              <img src={audip} alt="" />
              <img src={meet} alt="" />
              <img src={maker} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end basis-[50%] mt-4">
          <img
            src={sideImage}
            alt="hero desktop image"
            className="h-[80vh] hidden sm:block"
          />
          <img
            src={sideImageMobile}
            alt="mobile hero image"
            className="h-[40vh] block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
