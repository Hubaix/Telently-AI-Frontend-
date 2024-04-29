import React, { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "../assets/icons";
import { FAQData } from "../Content";

const FAQ = () => {
  // state for FAQs
  const [FAQs, setFAQs] = useState([]);

  // initialize FAQs
  useEffect(() => {
    setFAQs(FAQData);
  }, []);

  // handle toggle button
  const handleToggle = (id) => {
    const FAQChange = [...FAQs];
    const index = FAQChange.findIndex((item) => item.id === id);
    FAQChange[index].isOpen = !FAQChange[index].isOpen;
    setFAQs(FAQChange);
  };

  return (
    <div className="py-20 lg:py[125px] bg-white overflow-hidden">
      <div className="w-full max-w-[916px] mx-auto px-8">
        <h1 className="font-onest font-bold text-[#111827] text-[32px] lg:text-[40px] leading-[110%] tracking-[-1px] text-center mb-10 md:mb-16">
          Frequently Asked Questions
        </h1>
        <div
          className="max-w-[960px] mx-auto flex flex-col gap-y-4 relative"
          data-orientation="vertical"
        >
          {FAQs &&
            FAQs?.map((item) => {
              return (
                <div
                  key={item.id}
                  data-state="closed"
                  data-orientation="vertical"
                  className="bg-[#F9FAFB] border border-solid border-[#E5E7EB] rounded-xl"
                >
                  <button
                    type="button"
                    aria-controls="radix-:r9:"
                    aria-expanded="false"
                    data-state="closed"
                    data-orientation="vertical"
                    id="radix-:r8:"
                    className="font-avenir text-base text-[#111827] font-medium leading-[150%] py-6 pl-6 pr-11 w-full text-left relative"
                    data-radix-collection-item=""
                    onClick={() => handleToggle(item.id)}
                  >
                    {item.id}. {item.question}
                    <div className="absolute top-[25px] right-5">
                      <span className="block">
                        {item.isOpen ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </div>
                  </button>

                  {item.isOpen && (
                    <div
                      data-state="closed"
                      id="radix-:r9:"
                      role="region"
                      aria-labelledby="radix-:r8:"
                      data-orientation="vertical"
                      className="font-avenir text-base font-normal leading-[150%] text-[#445E7C] px-6 pb-6 max-w-[760px] open-answer-container"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
