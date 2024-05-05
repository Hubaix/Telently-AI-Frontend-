import React from "react";
import { Link } from "react-router-dom";
import { Celebrate, BlackLogo } from "../assets/images";
import { ButtonVariant7 } from "../components";

const InterviewComplete = () => {
  return (
    <div class="h-screen">
      <div class="w-full z-[2] border-b border-b-[#D9D9D98F] bg-white relative">
        <div class="relative mx-auto flex w-full max-w-[1376px] items-center justify-center px-8 pb-6 lg:pt-10 pt-8 lg:min-h-[104px] min-h-[90px]">
          <a class="w-full flex max-h-[32px] max-w-[150px] flex-shrink-0 items-center justify-start sm:max-h-[34px] sm:max-w-[159px] no-underline hover:no-underline focus:no-underline">
            <Link to={'/auth/login'}>
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="1"
                src={BlackLogo}
                className="image-transparent"
              />
            </Link>
          </a>
        </div>
      </div>
      <div class="w-full h-full mt-8">
        <div class="mx-auto w-full max-w-[1380px] px-8 flex sm:justify-between sm:items-start sm:flex-row flex-col items-center justify-start gap-5 mb-3">
          <div class="max-w-[692px] w-full bg-white border-0 rounded-[10px] mx-auto">
            <div class="max-w-[465px] w-full mx-auto px-6 md:py-10 min-h-[420px] sm:min-h[473px] flex flex-col justify-center items-center">
              <div class="w-full flex max-h-[60px] max-w-[60px] flex-shrink-0 items-center justify-center mx-auto mb-[5px]">
                <img
                  alt=""
                  loading="lazy"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  srcset={`${Celebrate} 1x, ${Celebrate} 2x`}
                  src={Celebrate}
                  className="image-transparent"
                />
              </div>
              <h2 class="font-bold mobileSm:text-[27px] text-[21px] text-[#312A50] text-center leading-[134%] mb-[5px] capitalize">
                Interview Completed Successfully
              </h2>
              <div className="mb-5">
                <p class="font-avenir text-opacity-70 font-normal text-[#312A50B8] text-sm text-center leading-[150%] mb-0 mt-8 max-w-[357px] mx-auto">
                  Thank you for your time during the interview. Your report will
                  be sent to you within 5 to 15 minutes.
                </p>
              </div>
              <Link to={'/auth/login'}>
                <ButtonVariant7>Back to Home</ButtonVariant7>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewComplete;
