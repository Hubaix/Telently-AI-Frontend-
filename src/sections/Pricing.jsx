import React, { useState, useEffect } from "react";
import { PricingCard, Tabs } from "../components";
import { PricingData, PricingTabs } from "../Content";

const Pricing = () => {
  // pricing offers state
  const [PricingOffers, setPricingOffers] = useState([]);
  const [duration, setDuration] = useState("monthly");

  // filter pricing offers based on duration
  useEffect(() => {
    if (duration === "monthly") {
      setPricingOffers(
        PricingData.filter((offer) => offer.duration === "month")
      );
    } else {
      setPricingOffers(
        PricingData.filter((offer) => offer.duration === "year")
      );
    }
  }, [duration]);

  // handle duration change
  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  return (
    <div className="py-20 lg:py-[107px] bg-[#fbfdff] overflow-hidden">
      <div className="w-full max-w-[1244px] mx-auto px-8">
        <div className="flex flex-col">
          <h1 className="font-onest font-bold text-[#111827] text-center text-[32px] lg:text-[40px] leading-[110%] tracking-[-1px] mx-auto mb-6 sm:max-w-[640px]">
            Start for Free with a 2-Week Trial
          </h1>
          <p className="font-avenir font-normal text-[#445E7C] text-center text-base leading-[150%] mb-8 md:mb-12">
            No credit card required - Jumpstart your journey with a free 2-week
            trial.
          </p>
          <div className="flex flex-col">
            <div className="flex justify-center items-center flex-wrap gap-3 w-full max-w-[980px] md:mx-auto mb-9 relative z-[1] ">
              <Tabs 
                tabs={PricingTabs} 
                selectedTab={duration}
                changeHandler={handleDurationChange}
              />
            </div>
            <div className="relative w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
                {PricingData &&
                  PricingOffers.map((card) => {
                    return <PricingCard key={card.id} card={card} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
