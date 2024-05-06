import React, { useState } from "react";

const data = [
  {
    id: 1,
    value: 10,
    description: "5 Questions",
  },
  {
    id: 2,
    value: 20,
    description: "10 Questions",
  },
];

const Selector = ({ label }) => {
  const [value, setValue] = useState("Select Duration...");
  const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (item) => {
        setValue(item.value);
        setIsOpen(false);
    }

  return (
    <div>
      <div class="text-lg text-[#312A50] leading-[134%] font-semibold mb-0">
        <div class="w-fit text-sm" data-state="closed">
          {label}
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:r2:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          class="w-full rounded-[3px] border border-[#65656533] py-2 outline-none focus:outline-none focus:border placeholder-[#4D526D] flex items-center justify-between select-trigger-btn h-[56px] bg-white focus:border-[#7B61FF] text-[#4D526D] mt-[10px] px-[26px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="selector-text">
            <span class="text-[#9E9E9E]">{value}</span>
          </span>
          <div class="w-3 h-3 flex items-center justify-end flex-shrink-0 select_icon rotate-[270deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                fill="#667085"
                fill-rule="evenodd"
                d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        {isOpen && (
          <div class="absolute mb-4 z-50 bg-white w-full border flex flex-col gap-2">
            {data.map((item) => (
              <div 
                key={item.id} 
                className="py-2 px-5 flex justify-between cursor-pointer hover:bg-purple-300"
                onClick={() => handleSelect(item)}
                >
                <span>{item.value}</span>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
