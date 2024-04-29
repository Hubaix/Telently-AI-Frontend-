import React from "react";
import {WorkingBackground} from "../../assets/images";

const Working = () => {
  return (
    <div class="flex flex-col w-full pt-[100px] pb-1 bg-[#F8FBFF] lg:min-h-[868px] relative overflow-hidden">
      <div class="w-full max-w-[1150px] px-8 mx-auto text-center">
        <h2 class="font-onest font-bold text-[#111827] text-2xl md:text-[32px] leading-[100%] tracking-[-0.8px] mb-6">
          How it Works
        </h2>
        <p class="font-avenir text-[#445E7C] text-base leading-[150%] mb-8 sm:mb-8">
          Talently.ai brings forth a new way to vet and hire your desired
          Talent.
        </p>
      </div>
      <div class="relative w-100 mt-[-16%] 2xl:mt-[-250px] flex justify-center">
        <img
          alt="Current Image"
          loading="lazy"
          width="1620"
          height="977"
          decoding="async"
          data-nimg="1"
          class="object-contain image-transparent"
          srcset={`${WorkingBackground} 1x, ${WorkingBackground} 2x`}
          src={WorkingBackground}
        />
      </div>
    </div>
  );
};

export default Working;
