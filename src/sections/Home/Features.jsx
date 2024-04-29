import React from "react";
import {FeatureBackground} from '../../assets/images'

const Features = () => {
  return (
    <div class="py-[70px] bg-[#F8FBFF] relative lg:min-h-[800px] flex">
      <div class="w-full max-w-[1150px] px-8 mx-auto flex grow">
        <div class="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:text-left md:gap-10">
          <div class="flex flex-col lg:max-w-[390px] w-full gap-6 lg:mr-auto relative z-[1]">
            <h2 class="font-onest font-bold text-[#111827] text-2xl md:text-[32px] leading-[100%] tracking-[-0.8px] m-0">
              AI-Powered Interviews
            </h2>
            <p class="font-avenir font-normal text-[#445E7C] text-base leading-[150%] m-0">
              Experience real-time, automated interviews that emulate human
              interaction.
            </p>
            <div class="flex flex-col items-start mx-auto gap-y-4 lg:ml-0">
              <div class="relative pl-8 font-sofia text-base font-normal text-[#445E7C] leading-[150%] text-left">
                <span class="absolute top-0 left-0 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-[24px] h-[24px]"
                  >
                    <path
                      stroke="#1F2937"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                </span>
                Real-time evaluations
              </div>
              <div class="relative pl-8 font-sofia text-base font-normal text-[#445E7C] leading-[150%] text-left">
                <span class="absolute top-0 left-0 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-[24px] h-[24px]"
                  >
                    <path
                      stroke="#1F2937"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                </span>
                Human-like interaction
              </div>
              <div class="relative pl-8 font-sofia text-base font-normal text-[#445E7C] leading-[150%] text-left">
                <span class="absolute top-0 left-0 inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-[24px] h-[24px]"
                  >
                    <path
                      stroke="#1F2937"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    ></path>
                  </svg>
                </span>
                Automated scheduling
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start"></div>
          </div>
          <div class="flex items-center justify-center overflow-hidden mt-0 mx-0 lg:ml-[-5%] w-full lg:w-[auto] lg:absolute right-0 lg:top-[50%] lg:-translate-y-[50%] lg:right-[-18%] xl:right-[-1%] pointer-events-none lg:max-w-[75%] xl:max-w-full">
            <img
              alt="About Image"
              loading="lazy"
              width="840"
              height="480"
              decoding="async"
              className="image-transparent"
              data-nimg="1"
              srcset={`${FeatureBackground} 1x, ${FeatureBackground} 2x`}
              src={FeatureBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
