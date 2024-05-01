import React from "react";

const RadioButton = ({label, value, selected, handler}) => {
  return (
    <div class="flex items-center gap-2 h-[34px] max-w-[273px] rounded border text-[#445E7C] text-xs border-[#445E7C]/5 bg-[#445E7C05] cursor-pointer" onClick={() => handler(value)}>
      <button
        type="button"
        class="bg-transparent hover:opacity-80 flex items-center gap-2 px-4 group"
        tabindex="-1"
      >
        <div class={`bg-transparent w-[12px] h-[12px] rounded-full hover:opacity-80 border-[#445E7C]/40 border flex items-center justify-center ${(value === selected) && "bg-[#E9E5FC] border-none"}`}>
          <div class={`w-[8px] h-[8px] rounded-full ${value === selected && "bg-[#7B61FF]"}`}></div>
        </div>
        <label
          class="text-[#445E7C] text-xs leading-[150%] mt-[3px] h-full flex items-center cursor-pointer"
          for="65c3a3aea980c9292b9e41d5"
        >
          {label}
        </label>
      </button>
    </div>
  );
};

export default RadioButton;
