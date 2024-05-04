import React from "react";
import { Link } from "react-router-dom";
import { HeroBackground, Hero1Background, Hero2Background } from "../../assets/images";

const Hero = () => {
  return (
    <div class="relative pt-[140px] lg:pt-[190px] mb-[280px] md:mb-[318px] bg-black font-onest after:absolute after:bottom-[0px] md:after:bottom-[-80px] lg:after:bottom-[-1px] after:border-b-[100px] sm:after:border-b-[150px] after:border-b-white after:border-l-[100vw] after:border-l-transparent after:w-0 md:before:absolute before:left-0 before:bottom-[-4px] lg:before:bottom-[1px] xl:before:bottom-[-1px] before:border-t-[6px] before:border-t-black before:border-r-[55px] before:border-r-transparent before:z-[1]">
      <div class="w-full max-w-[1404px] mx-auto px-8 flex flex-col">
        <div class="relative w-full max-w-[900px] mx-auto text-center mb-8 sm:mb-[80px] z-[1]">
          <h1 class="font-bold text-white text-[44px] lg:text-[56px] leading-[120%] tracking-[-1.96px] mb-4">
            Talently.ai: Your Al Interviewer
          </h1>
          <p class="text-white text-base leading-[150%] max-w-[600px] mx-auto mb-6 md:mb-8">
            An Al interviewer that conducts live, conversational interviews and
            gives real-time evaluations to effortlessly identify top performers.
            Say goodbye to manual screening and hello to smarter recruiting.
          </p>
          <div class="flex flex-col mobileXl:flex-row justify-center gap-2">
            <a href="https://calendly.com/mtm75474/30-minutes-talently" target="_blank" rel="noreferrer noopener" 
              class="flex items-center justify-center text-base leading-[100%] text-[#F9FAFB] px-10 py-5 min-w-[184px] min-h-[58px] border-0 rounded-[100px] transition-all bg-gradient-skyblue hover:text-white focus:text-white hover:bg-gradient-skyblue-2 focus:bg-gradient-skyblue-2"
            >
              Book a Demo
            </a>
            <Link to={'/mock-interview'}
              class="flex items-center justify-center text-base leading-[100%] text-[#E6F7FC] px-10 py-5 min-w-[184px] min-h-[58px] border border-solid border-[#E6F7FC] rounded-[100px] transition-all bg-transparent hover:text-[#445E7C] focus:text-[#445E7C] hover:border-[#E6F7FC] focus:border-[#E6F7FC] hover:bg-[#E6F7FC] focus:bg-[#E6F7FC]"
            >
              Try AI Interview
            </Link>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-10 md:gap-6 w-full max-w-[1018px] mx-auto bg-white shadow-demo-card rounded-[10px] py-10 px-6 md:pr-0 laptopSm:py-[37px] pl-[24px] md:pl-[40px] laptopSm:pl-[70px] relative z-[1] mb-[-200px] overflow-hidden">
          <div class="flex flex-col items-center md:items-start md:max-w-[352px] text-center md:text-left">
            <h2 class="text-[28px] md:text-[40px] text-[#312A50] font-bold leading-[32px] md:leading-[50px] mb-[14px]">
              Experience the power of Talently
            </h2>
            <p class="text-[#445E7C] text-base leading-[28px] mb-6 md:mb-[30px]">
              Move beyond manual screening with AI recruiting solutions.
              Experience the advantages firsthand with our free demo.
            </p>
            <button
              id="mock-start-practicing"
              class="flex items-center justify-center text-base leading-[100%] text-[#0068EC] px-10 py-5 min-w-[184px] min-h-[58px] border border-solid border-[#0068EC] rounded-[100px] transition-all bg-transparent hover:text-[#445E7C] focus:text-[#445E7C] hover:border-[#E6F7FC] focus:border-[#E6F7FC] hover:bg-[#E6F7FC] focus:bg-[#E6F7FC]"
            >
              Try AI Interview
            </button>
          </div>
          <div class="flex relative right-0 lg:right-[-7px] mt-[-15px] ml-[-30px] laptopSm:ml-0">
            <img
              alt="Hero Image"
              loading="lazy"
              width="566"
              height="363"
              decoding="async"
              data-nimg="1"
              class="object-contain max-w-[100%] image-transparent"
              srcset={`${HeroBackground} 1x, ${HeroBackground} 2x`}
              src={HeroBackground}
            />
          </div>
        </div>
      </div>
      <div class="absolute left-0 top-[120px] sm:top-[199px] laptopSm::top-3 bg-[#FFBD00] w-[40px] h-[24px] md:w-[84px] md:h-[55px] rounded-r-[40px] pointer-events-none "></div>
      <div class="absolute right-[-10px] sm:right-[-20px] md:right-[-40px] laptopSm:right-0 top-[100px] md:top-[145px] pointer-events-none w-[20%] sm:w-[17.4%] hidden md:flex">
        <img
          alt="Hero Image"
          loading="lazy"
          width="308"
          height="161"
          decoding="async"
          data-nimg="1"
          class="max-full object-contain image-transparent"
          srcset={`${Hero2Background} 1x, ${Hero2Background} 2x`}
          src={Hero2Background}
        />
      </div>
      <div class="absolute left-[-30px] laptopSm:left-0 bottom-0 pointer-events-none w-[13.1%] hidden md:flex">
        <img
          alt="Hero Image"
          loading="lazy"
          width="207"
          height="410"
          decoding="async"
          data-nimg="1"
          class="max-full object-contain image-transparent"
          srcset={`${Hero1Background} 1x, ${Hero1Background} 2x`}
          src={Hero1Background}
        />
      </div>
    </div>
  );
};

export default Hero;
