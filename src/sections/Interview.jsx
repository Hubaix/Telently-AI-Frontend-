import React, { useState } from "react";
import { Tabs } from "../components";
import { InterviewTabs } from "../Content";
import { InterviewBackground } from "../assets/images";

const Interview = () => {
  const [selectedTab, setSelectedTab] = useState("java");

  const changeHandler = (value) => {
    setSelectedTab(value);
  };

  return (
    <div className="py-20 lg:py-[140px] bg-[#fff] overflow-hidden">
      <div className="w-full max-w-[920px] mx-auto px-8">
        <div className="text-center">
          <h1 className="font-onest font-bold text-[#111827] text-[32px] lg:text-[40px] leading-[110%] tracking-[-1px] mb-6">
            Introducing Live Coding Interviews
          </h1>
          <p className="font-avenir font-normal text-[#445E7C] text-base leading-[150%] max-w-[624px] mx-auto mb-8 md:mb-12">
            Talently.ai can now conduct technical assessments through live
            coding sessions during interviews, allowing candidates to
            demonstrate their skills in real-time.
          </p>
          <div
            dir="ltr"
            data-orientation="horizontal"
            className="flex flex-col justify-center items-center flex-wrap gap-8 md:gap-10"
          >
            <Tabs
              tabs={InterviewTabs}
              selectedTab={selectedTab}
              changeHandler={changeHandler}
              type="small"
            />

            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r2o:-trigger-tab1"
              id="radix-:r2o:-content-tab1"
              tabindex="0"
              className="grow w-full"
            >
              <div className="relative">
                <div className="bg-[#F3F4F6] lg:min-h-[490px] rounded-2xl p-2.5 md:p-[14px] relative">
                  <div className="flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                      alt="Coding Image"
                      loading="lazy"
                      width="840"
                      height="480"
                      decoding="async"
                      data-nimg="1"
                      className="object-cover pointer-events-none image-transparent"
                      srcset={`${InterviewBackground} 1x, ${InterviewBackground} 2x`}
                      src={InterviewBackground}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
