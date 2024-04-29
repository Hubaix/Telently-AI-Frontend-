import React from "react";

const ButtonVariant3 = ({ handler, value, selectedTab, children, type}) => {
  return (
    <button
      className={`flex flex-shrink-0 items-center justify-center ${type === 'small' ? "text-xs" : "text-sm"}  font-medium font-avenir text-[#111827] px-5 py-2 grow min-h-[36px] border border-solid border-transparent rounded-[100px] transition-all hover:text-[#111827] focus:text-[#111827] active:text-[#111827] hover:border-[#E5E7EB] focus:border-[#E5E7EB] active:border-[#E5E7EB] hover:bg-white focus:bg-white active:bg-white ${
        value === selectedTab && 'bg-white'
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default ButtonVariant3;
