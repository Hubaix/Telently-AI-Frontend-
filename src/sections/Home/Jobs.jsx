import React from "react";
import { JobsBackground } from "../../assets/images";
import { CircleTick } from "../../assets/icons";

// list data
const listData = [
  { id: 1, text: "Role-specific interviewing" },
  { id: 2, text: "Tailored evaluation metrics" },
  { id: 3, text: "Tailored questions based on roles" },
];

const Jobs = () => {
  return (
    <div class="py-[70px] bg-[#F8FBFF] relative lg:min-h-[800px] flex">
      <div class="w-full max-w-[1150px] px-8 mx-auto flex grow">
        <div class="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:text-left md:gap-10">
          <div class="flex flex-col lg:max-w-[390px] lg:w-full gap-6 lg:mr-auto relative z-[1]">
            <h4 class="font-onest font-bold text-[#111827] text-2xl md:text-[32px] leading-[100%] tracking-[-0.8px] m-0">
              Any Role in the World
            </h4>
            <p class="font-avenir font-normal text-[#445E7C] text-base leading-[150%] m-0">
              Input any job description from around the globe and watch
              Talently.ai conduct precise interviews tailored to the specified
              role.
            </p>
            <div class="flex flex-col items-start mx-auto gap-y-4 lg:ml-0">
              {listData?.map((item) => (
                  <div key={item.id} class="relative pl-8 font-sofia tex t-base font-normal text-[#445E7C] leading-[150%] text-left">
                    <span class="absolute top-0 left-0 inline-flex">
                      <CircleTick />
                    </span>
                    {item.text}
                  </div>
                ))}
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div class="font-avenir text-sm font-normal text-[#6B7280]">
                No credit card required
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center overflow-hidden mt-[-25%] md:mt-[-30%] mr-[25%] sm:mr-0 sm:ml-[-18%] lg:mt-0 lg:ml-0 w-[150%] lg:w-[auto] lg:absolute right-0 lg:top-0 xl:top-[-130px] lg:right-[-8%] pointer-events-none lg:max-w-[75%] xl:max-w-full">
            <img
              alt="About Image"
              loading="lazy"
              width="1114"
              height="899"
              decoding="async"
              data-nimg="1"
              class="pointer-events-none object-cotain image-transparent"
              srcset={`${JobsBackground} 1x, ${JobsBackground} 2x`}
              src={JobsBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
