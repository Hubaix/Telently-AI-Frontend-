import React from "react";
import { InsightsBackground } from "../assets/images";
import { CircleTick } from "../assets/icons";

// list data
const listData = [
  { id: 1, text: "Objective candidate assessment" },
  { id: 2, text: "Actionable insights provided" },
  { id: 3, text: "Precise decision-making" },
];

const Insights = () => {
  return (
    <div class="py-[70px] bg-[#fff] relative lg:min-h-[800px] flex">
      <div class="w-full max-w-[1150px] px-8 mx-auto flex grow">
        <div class="flex flex-col items-center justify-center gap-6 text-center lg:flex-row-reverse lg:justify-end lg:ml-auto lg:text-left md:gap-10">
          <div class="flex flex-col lg:max-w-[400px] w-full gap-6 lg:ml-auto relative z-[1]">
            <h4 class="font-onest font-bold text-[#111827] text-2xl md:text-[32px] leading-[100%] tracking-[-0.8px] m-0">
              Detailed Candidate Scoring
            </h4>
            <p class="font-avenir font-normal text-[#445E7C] text-base leading-[150%] m-0">
              Receive insightful, objective scores for every interviewee, aiding
              in precise decision-making.
            </p>
            <div class="flex flex-col items-start mx-auto gap-y-4 lg:ml-0">
              {listData?.map((item) => (
                <div class="relative pl-8 font-sofia text-base font-normal text-[#445E7C] leading-[150%] text-left">
                  <span class="absolute top-0 left-0 inline-flex">
                    <CircleTick />
                  </span>
                  {item?.text}
                </div>
              ))}
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start"></div>
          </div>
          <div class="flex items-center justify-center overflow-hidden mt-[-38%] sm:mt-[-44%] ml-[30%] sm:ml-0 sm:mr-[-30%] lg:mt-0 lg:mr-0 w-[150%] lg:w-[auto] lg:absolute left-0 lg:top-[-80px] xl:top-[-31%] lg:left-[-5%] xl:left-[-66px] pointer-events-none lg:max-w-[75%] xl:max-w-full">
            <img
              alt="About Image"
              loading="lazy"
              width="1120"
              height="982"
              decoding="async"
              data-nimg="1"
              class="pointer-events-none object-cotain image-transparent"
              srcset={`${InsightsBackground} 1x, ${InsightsBackground} 2x`}
              src={InsightsBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
